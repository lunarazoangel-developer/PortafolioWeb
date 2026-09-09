const ALLOWED_EVENTS = new Set([
    'project_english_vault',
    'project_datapulse',
    'project_survival_preview',
    'certificate_power_bi',
    'contact_email',
    'contact_phone',
    'github_profile',
]);

const responseHeaders = {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
};

export async function onRequestPost({ request, env }) {
    const requestOrigin = request.headers.get('Origin');
    const expectedOrigin = new URL(request.url).origin;

    if (requestOrigin && requestOrigin !== expectedOrigin) {
        return new Response(JSON.stringify({ error: 'Origen no permitido' }), {
            status: 403,
            headers: responseHeaders,
        });
    }

    const contentLength = Number(request.headers.get('Content-Length') || 0);
    if (contentLength > 1024) {
        return new Response(JSON.stringify({ error: 'Solicitud demasiado grande' }), {
            status: 413,
            headers: responseHeaders,
        });
    }

    if (!env.CLICK_ANALYTICS) {
        return new Response(JSON.stringify({ error: 'Analítica no configurada' }), {
            status: 503,
            headers: responseHeaders,
        });
    }

    try {
        const rawBody = await request.text();
        if (rawBody.length > 1024) {
            return new Response(JSON.stringify({ error: 'Solicitud demasiado grande' }), {
                status: 413,
                headers: responseHeaders,
            });
        }

        const body = JSON.parse(rawBody);
        const eventName = typeof body.event === 'string' ? body.event : '';
        const page = typeof body.page === 'string' ? body.page.slice(0, 200) : '/';

        if (!ALLOWED_EVENTS.has(eventName) || !page.startsWith('/')) {
            return new Response(JSON.stringify({ error: 'Evento no permitido' }), {
                status: 400,
                headers: responseHeaders,
            });
        }

        env.CLICK_ANALYTICS.writeDataPoint({
            blobs: [eventName, page],
            doubles: [1],
            indexes: [eventName],
        });

        return new Response(null, {
            status: 204,
            headers: { 'Cache-Control': 'no-store' },
        });
    } catch {
        return new Response(JSON.stringify({ error: 'Solicitud inválida' }), {
            status: 400,
            headers: responseHeaders,
        });
    }
}

export function onRequest() {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
        status: 405,
        headers: { ...responseHeaders, Allow: 'POST' },
    });
}
