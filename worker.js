const ALLOWED_EVENTS = new Set([
    'project_english_vault',
    'project_datapulse',
    'project_survival_preview',
    'certificate_power_bi',
    'contact_email',
    'contact_phone',
    'github_profile',
]);

const JSON_HEADERS = {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
};

function jsonResponse(body, status, extraHeaders = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { ...JSON_HEADERS, ...extraHeaders },
    });
}

async function recordClick(request, env) {
    const requestOrigin = request.headers.get('Origin');
    const expectedOrigin = new URL(request.url).origin;

    if (requestOrigin && requestOrigin !== expectedOrigin) {
        return jsonResponse({ error: 'Origen no permitido' }, 403);
    }

    const declaredLength = Number(request.headers.get('Content-Length') || 0);
    if (declaredLength > 1024) {
        return jsonResponse({ error: 'Solicitud demasiado grande' }, 413);
    }

    if (!env.CLICK_ANALYTICS) {
        return jsonResponse({ error: 'Analítica no configurada' }, 503);
    }

    try {
        const rawBody = await request.text();
        if (rawBody.length > 1024) {
            return jsonResponse({ error: 'Solicitud demasiado grande' }, 413);
        }

        const body = JSON.parse(rawBody);
        const eventName = typeof body.event === 'string' ? body.event : '';
        const page = typeof body.page === 'string' ? body.page.slice(0, 200) : '/';

        if (!ALLOWED_EVENTS.has(eventName) || !page.startsWith('/')) {
            return jsonResponse({ error: 'Evento no permitido' }, 400);
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
        return jsonResponse({ error: 'Solicitud inválida' }, 400);
    }
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === '/api/click') {
            if (request.method !== 'POST') {
                return jsonResponse(
                    { error: 'Método no permitido' },
                    405,
                    { Allow: 'POST' },
                );
            }

            return recordClick(request, env);
        }

        return env.ASSETS.fetch(request);
    },
};
