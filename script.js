/* ============================================
   PORTFOLIO — Angel Abdiel Luna Razo
   i18n (ES/EN), typing, cursor, nav y reveals
   ============================================ */

(() => {
    'use strict';

    /* =========================================================
       1) DICCIONARIO DE TRADUCCIONES
       ========================================================= */
    const i18n = {
        es: {
            'hero.whoami':     'Angel Luna — estudiante de Ingeniería en Software',
            'hero.name':       'ANGEL ABDIEL\nLUNA RAZO',
            'hero.echo':       '"construir · aprender · iterar"',
            'hero.welcome':    'Desarrollo experiencias digitales, aplicaciones y videojuegos con intención.',
            'hero.sections':   'drwxr-xr-x  ./home       drwxr-xr-x  ./about\ndrwxr-xr-x  ./projects   drwxr-xr-x  ./skills\ndrwxr-xr-x  ./contact',
            'hero.scroll':     'scroll',

            'nav.about':       'cat',
            'about.title':     'about.txt',
            'nav.lang':        'idioma:',
            'about.p1':        '> Soy <strong>Angel Abdiel Luna Razo</strong>, estudiante de <strong>Ingeniería en Software</strong> en la <strong>UES — Universidad Estatal de Sonora</strong>, México.',
            'about.p2':        '> Me gusta crear cosas que implican <span class="hl">tecnología y diseño</span>. Mi proyecto principal —y el más personal— es un <span class="hl">videojuego de supervivencia</span> en el que trabajo de forma individual, aplicando lo que voy aprendiendo sobre game design, arquitectura de software y narrativa.',
            'about.p3':        '> Mi objetivo es seguir creciendo como desarrollador, colaborar con equipos exigentes y convertir ideas en <span class="hl">productos claros, útiles y bien construidos</span>.',

            'projects.english.desc':    'App móvil tipo Duolingo para aprender inglés. Diccionario offline con verbos irregulares, regulares, sustantivos y más; mini-juegos (Word Match, Sopa de Letras, Listening); sistema de rachas, XP/niveles, corazones y monedas; mapa de niveles estilo Super Mario Bros y base de datos personal del usuario.',
            'projects.datapulse.desc':  'Aplicación web inteligente de <span class="hl">limpieza de datos y detección de anomalías</span>. Procesa CSV/Excel, genera perfiles por columna, marca información sensible, produce payloads sanitizados listos para IA y ofrece un chat con IA (DeepSeek) que propone acciones de limpieza con un flujo <em>plan → approve → apply</em>.',
            'projects.game.badge':      'ALPHA · NO PÚBLICO',
            'projects.game.desc':       'Videojuego <span class="hl">survival / roguelike</span> en desarrollo. Planeado para <span class="hl">multijugador</span>, <span class="hl">pixel art top-down</span>, con miras a <span class="hl">móvil y PC</span>. Mi proyecto principal a título individual —el que más me ha enseñado sobre arquitectura, diseño y constancia.',
            'projects.game.preview':    '[ PREVIEW NO DISPONIBLE PÚBLICAMENTE ]',
            'projects.btn.code':        '> ver código',
            'projects.btn.preview':     '> ver preview (Drive)',

            'skills.langs':     'lenguajes',
            'skills.tools':     'herramientas',
            'skills.exploring': 'explorando',
            'skills.ai':        'Agentes de IA por terminal',
            'skills.llm':       'Integración de LLMs en apps',
            'cert.label': '// certificado',
            'cert.issuer': 'Emisor:',
            'cert.length': 'Duración:',
            'cert.date':   'Fecha:',

            'contact.intro':     '> ¿Te interesa mi perfil o quieres hablar de un proyecto? Escríbeme.',
            'contact.fictitious':'(ficticio)',
            'contact.soon':      '(próximamente)',
            'contact.location':  'ubicación',

            'footer.built':      'built with HTML, CSS & JS',
        },

        en: {
            'hero.whoami':     'Angel Luna — Software Engineering student',
            'hero.name':       'ANGEL ABDIEL\nLUNA RAZO',
            'hero.echo':       '"build · learn · iterate"',
            'hero.welcome':    'I build thoughtful digital experiences, applications and video games.',
            'hero.sections':   'drwxr-xr-x  ./home       drwxr-xr-x  ./about\ndrwxr-xr-x  ./projects   drwxr-xr-x  ./skills\ndrwxr-xr-x  ./contact',
            'hero.scroll':     'scroll',

            'nav.about':       'cat',
            'about.title':     'about.txt',
            'nav.lang':        'lang:',
            'about.p1':        '> I am <strong>Angel Abdiel Luna Razo</strong>, a <strong>Software Engineering</strong> student at <strong>UES — Universidad Estatal de Sonora</strong>, Mexico.',
            'about.p2':        '> I love building things at the intersection of <span class="hl">technology and design</span>. My main —and most personal— project is a <span class="hl">survival video game</span> I work on solo, applying what I learn about game design, software architecture and storytelling.',
            'about.p3':        '> My goal is to keep growing as a developer, collaborate with ambitious teams and turn ideas into <span class="hl">clear, useful and well-built products</span>.',

            'projects.english.desc':    'A Duolingo-inspired mobile app to learn English. Offline dictionary with irregular/regular verbs, nouns and more; mini-games (Word Match, Word Search, Listening); streaks, XP/levels, hearts and coins; a Super Mario Bros-style world map and a personal word database.',
            'projects.datapulse.desc':  'Intelligent web app for <span class="hl">data cleaning and anomaly detection</span>. Processes CSV/Excel, generates per-column profiles, flags sensitive data, produces sanitized AI-ready payloads, and offers an AI chat (DeepSeek) that proposes cleanup actions through a <em>plan → approve → apply</em> flow.',
            'projects.game.badge':      'ALPHA · NOT PUBLIC',
            'projects.game.desc':       'A <span class="hl">survival / roguelike</span> video game in development. Planned for <span class="hl">multiplayer</span>, <span class="hl">pixel art top-down</span>, targeting <span class="hl">mobile and PC</span>. My main solo project —the one that has taught me the most about architecture, design and consistency.',
            'projects.game.preview':    '[ PREVIEW NOT PUBLICLY AVAILABLE ]',
            'projects.btn.code':        '> view code',
            'projects.btn.preview':     '> view preview (Drive)',

            'skills.langs':     'languages',
            'skills.tools':     'tools',
            'skills.exploring': 'exploring',
            'skills.ai':        'Terminal-based AI agents',
            'skills.llm':       'LLM integration in apps',
            'cert.label': '// certificate',
            'cert.issuer': 'Issued by:',
            'cert.length': 'Length:',
            'cert.date':   'Date:',

            'contact.intro':     '> Interested in my profile or want to talk about a project? Reach out.',
            'contact.fictitious':'(placeholder)',
            'contact.soon':      '(coming soon)',
            'contact.location':  'location',

            'footer.built':      'built with HTML, CSS & JS',
        }
    };

    const SUPPORTED = ['es', 'en'];
    const STORAGE_KEY = 'portfolio-lang';

    function getInitialLang() {
        let saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) { /* storage may be unavailable */ }
        if (saved && SUPPORTED.includes(saved)) return saved;
        return 'es';
    }

    let currentLang = getInitialLang();
    let heroAnimationRun = 0;

    function applyTranslations(lang) {
        const dict = i18n[lang] || i18n.es;
        document.documentElement.lang = lang;
        document.title = (lang === 'en' ? 'Portfolio' : 'Portafolio') + ' — Angel Abdiel Luna Razo';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = dict[key];
            if (value === undefined) return;
            // Si el texto contiene HTML, usar innerHTML; si no, textContent
            if (/<[a-z][\s\S]*>/i.test(value)) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // Actualizar el meta description
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute('content',
                lang === 'en'
                    ? 'Portfolio of Angel Abdiel Luna Razo — Software Engineering student at UES. Projects, skills and experience.'
                    : 'Portafolio de Angel Abdiel Luna Razo — Estudiante de Ingeniería en Software en la UES. Proyectos, skills y experiencia.'
            );
        }

        // Actualizar el estado del switch
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });
    }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) return;
        heroAnimationRun += 1;
        currentLang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* keep language in memory */ }
        applyTranslations(lang);
    }

    // Listeners del switch
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // Aplicar idioma inicial antes de animar
    applyTranslations(currentLang);

    /* =========================================================
       2) Cursor personalizado
       ========================================================= */
    const cursor = document.getElementById('cursorDot');
    if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.classList.add('visible');
            document.body.classList.add('has-custom-cursor');
        });
        document.querySelectorAll('a, button, .project-card, .cert-img-link').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    /* =========================================================
       3) Nav toggle móvil
       ========================================================= */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        const closeMenu = () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú');
        };

        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    /* =========================================================
       4) Typing effect del hero
       ========================================================= */
    const typeText = (el, text, speed = 45, runId = heroAnimationRun) => {
        if (!el || runId !== heroAnimationRun) return Promise.resolve();
        el.textContent = '';
        return new Promise(resolve => {
            let i = 0;
            const tick = () => {
                if (runId !== heroAnimationRun) {
                    resolve();
                    return;
                }
                if (i < text.length) {
                    el.textContent += text.charAt(i++);
                    setTimeout(tick, speed);
                } else resolve();
            };
            tick();
        });
    };

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function runHeroAnimation() {
        const whoami   = document.getElementById('whoami');
        const bigName  = document.getElementById('bigName');
        const welcome  = document.getElementById('welcome');
        const sections = document.getElementById('sections');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const runId = ++heroAnimationRun;
        [whoami, bigName, welcome, sections].forEach((element) => {
            if (element) element.textContent = '';
        });

        // Tomar textos del idioma actual (ya aplicados)
        const dict = i18n[currentLang] || i18n.es;

        await sleep(180);
        await typeText(whoami, dict['hero.whoami'], 22, runId);

        await sleep(140);
        await typeText(bigName, dict['hero.name'], 38, runId);

        await sleep(180);
        await typeText(welcome, dict['hero.welcome'], 22, runId);

        await sleep(140);
        await typeText(sections, dict['hero.sections'], 14, runId);
    }

    /* =========================================================
       5) Reveal on scroll
       ========================================================= */
    const reveals = document.querySelectorAll('.section');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        reveals.forEach(sec => io.observe(sec));
    } else {
        reveals.forEach(sec => sec.classList.add('is-visible'));
    }

    /* =========================================================
       6) Fondo estelar pixelado
       ========================================================= */
    const canvas = document.getElementById('starfield');
    const ctx = canvas?.getContext('2d', { alpha: true });

    if (canvas && ctx) {
        let width = 0;
        let height = 0;
        let dpr = 1;
        let stars = [];
        let shootingStar = null;
        let nextShootingStar = performance.now() + 5000 + Math.random() * 5000;
        let animationFrame = 0;

        const createStars = () => {
            const count = Math.min(190, Math.max(70, Math.floor((width * height) / 8500)));
            stars = Array.from({ length: count }, (_, index) => ({
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height),
                size: index % 19 === 0 ? 2 : 1,
                phase: Math.random() * Math.PI * 2,
                speed: 0.0005 + Math.random() * 0.0012,
                color: Math.random() > 0.88 ? '#6f8f7b' : '#d7d7d7'
            }));
        };

        const resizeCanvas = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            createStars();
        };

        const spawnShootingStar = (now) => {
            shootingStar = {
                x: width * (0.3 + Math.random() * 0.55),
                y: height * (0.05 + Math.random() * 0.25),
                vx: -(7 + Math.random() * 4),
                vy: 4 + Math.random() * 2,
                life: 0,
                maxLife: 65 + Math.random() * 25
            };
            nextShootingStar = now + 11000 + Math.random() * 14000;
        };

        const draw = (now) => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach((star) => {
                const opacity = reducedMotion ? 0.55 : 0.3 + ((Math.sin(now * star.speed + star.phase) + 1) / 2) * 0.65;
                ctx.globalAlpha = opacity;
                ctx.fillStyle = star.color;
                ctx.fillRect(star.x, star.y, star.size, star.size);
                if (star.size === 2) {
                    ctx.globalAlpha = opacity * 0.25;
                    ctx.fillRect(star.x - 2, star.y, 6, 1);
                    ctx.fillRect(star.x, star.y - 2, 1, 6);
                }
            });

            if (!reducedMotion && !shootingStar && now >= nextShootingStar) spawnShootingStar(now);
            if (shootingStar) {
                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;
                shootingStar.life += 1;
                const fade = Math.sin((shootingStar.life / shootingStar.maxLife) * Math.PI);
                ctx.globalAlpha = Math.max(0, fade);
                for (let step = 0; step < 9; step += 1) {
                    ctx.fillStyle = step < 2 ? '#f5f5f5' : step < 5 ? '#a3a3a3' : '#555';
                    const trail = step * 5;
                    ctx.fillRect(
                        Math.round(shootingStar.x - shootingStar.vx * trail * 0.12),
                        Math.round(shootingStar.y - shootingStar.vy * trail * 0.12),
                        step < 2 ? 3 : 2,
                        step < 2 ? 3 : 2
                    );
                }
                if (shootingStar.life >= shootingStar.maxLife || shootingStar.x < -100 || shootingStar.y > height + 100) {
                    shootingStar = null;
                }
            }

            ctx.globalAlpha = 1;
            if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
        };

        resizeCanvas();
        draw(performance.now());
        window.addEventListener('resize', resizeCanvas, { passive: true });
        document.addEventListener('visibilitychange', () => {
            cancelAnimationFrame(animationFrame);
            if (!document.hidden && !reducedMotion) animationFrame = requestAnimationFrame(draw);
        });
    }

    /* =========================================================
       7) Navegación activa y detalles
       ========================================================= */
    const navItems = [...document.querySelectorAll('.nav-links a')];
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navItems.forEach((item) => {
                    const isCurrent = item.getAttribute('href') === `#${entry.target.id}`;
                    item.classList.toggle('active', isCurrent);
                    if (isCurrent) item.setAttribute('aria-current', 'location');
                    else item.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-35% 0px -55%', threshold: 0 });
        document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
    }

    const year = document.getElementById('currentYear');
    if (year) year.textContent = String(new Date().getFullYear());

    /* =========================================================
       8) Easter egg en consola
       ========================================================= */
    console.log(
        '%c> portfolio@angel:~$',
        'color:#4ade80; font-weight:bold; font-size:14px;',
        '\n%cHola recruiter. If you are reading this, reach out: lunarazoangel@gmail.com',
        'color:#8a8a8a; font-size:12px;'
    );

    /* =========================================================
       9) Init
       ========================================================= */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runHeroAnimation);
    } else {
        runHeroAnimation();
    }

})();
