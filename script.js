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
            'hero.whoami':     'angel@portfolio:~$ Angel Abdiel Luna Razo',
            'hero.name':       'ANGEL ABDIEL\nLUNA RAZO',
            'hero.echo':       '"Bienvenido a mi portafolio"',
            'hero.welcome':    '"Bienvenido a mi portafolio"',
            'hero.sections':   'drwxr-xr-x  ./home       drwxr-xr-x  ./about\ndrwxr-xr-x  ./projects   drwxr-xr-x  ./skills\ndrwxr-xr-x  ./contact',
            'hero.scroll':     'scroll',

            'nav.about':       'cat',
            'about.title':     'about.txt',
            'nav.lang':        'idioma:',
            'about.p1':        '> Soy <strong>Angel Abdiel Luna Razo</strong>, estudiante de <strong>Ingeniería en Software</strong> en la <strong>UES — Universidad Estatal de Sonora</strong>, México.',
            'about.p2':        '> Me gusta crear cosas que implican <span class="hl">tecnología y diseño</span>. Mi proyecto principal —y el más personal— es un <span class="hl">videojuego de supervivencia</span> en el que trabajo de forma individual, aplicando lo que voy aprendiendo sobre game design, arquitectura de software y narrativa.',
            

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
            'skills.cert':      '[ver certificado]',
            'skills.ai':        'Agentes de IA por terminal',
            'skills.llm':       'Integración de LLMs en apps',
            'skills.status.label': 'Estado:',
            'skills.status.value': 'abierto a prácticas profesionales',

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
            'hero.whoami':     'angel@portfolio:~$ Angel Abdiel Luna Razo',
            'hero.name':       'ANGEL ABDIEL\nLUNA RAZO',
            'hero.echo':       '"Welcome to my portfolio"',
            'hero.welcome':    '"Welcome to my portfolio"',
            'hero.sections':   'drwxr-xr-x  ./home       drwxr-xr-x  ./about\ndrwxr-xr-x  ./projects   drwxr-xr-x  ./skills\ndrwxr-xr-x  ./contact',
            'hero.scroll':     'scroll',

            'nav.about':       'cat',
            'about.title':     'about.txt',
            'nav.lang':        'lang:',
            'about.p1':        '> I am <strong>Angel Abdiel Luna Razo</strong>, a <strong>Software Engineering</strong> student at <strong>UES — Universidad Estatal de Sonora</strong>, Mexico.',
            'about.p2':        '> I love building things at the intersection of <span class="hl">technology and design</span>. My main —and most personal— project is a <span class="hl">survival video game</span> I work on solo, applying what I learn about game design, software architecture and storytelling.',
            

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
            'skills.cert':      '[view certificate]',
            'skills.ai':        'Terminal-based AI agents',
            'skills.llm':       'LLM integration in apps',
            'skills.status.label': 'Status:',
            'skills.status.value': 'open to internships',

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
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
        return 'es';
    }

    let currentLang = getInitialLang();

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
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
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
    if (cursor && window.matchMedia('(min-width: 769px)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
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
    if (navToggle) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    /* =========================================================
       4) Typing effect del hero
       ========================================================= */
    const typeText = (el, text, speed = 45) => {
        if (!el) return Promise.resolve();
        el.textContent = '';
        return new Promise(resolve => {
            let i = 0;
            const tick = () => {
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

        // Tomar textos del idioma actual (ya aplicados)
        const dict = i18n[currentLang] || i18n.es;

        await sleep(600);
        await typeText(whoami, dict['hero.whoami'], 35);

        await sleep(300);
        await typeText(bigName, dict['hero.name'], 70);

        await sleep(400);
        await typeText(welcome, dict['hero.welcome'], 50);

        await sleep(300);
        await typeText(sections, dict['hero.sections'], 30);
    }

    /* =========================================================
       5) Reveal on scroll
       ========================================================= */
    const reveals = document.querySelectorAll('.section');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08 });

    reveals.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(24px)';
        sec.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        io.observe(sec);
    });

    /* =========================================================
       6) Easter egg en consola
       ========================================================= */
    console.log(
        '%c> portfolio@angel:~$',
        'color:#4ade80; font-weight:bold; font-size:14px;',
        '\n%cHola recruiter. If you are reading this, reach out: lunarazoangel@gmail.com',
        'color:#8a8a8a; font-size:12px;'
    );

    /* =========================================================
       7) Init
       ========================================================= */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runHeroAnimation);
    } else {
        runHeroAnimation();
    }

})();
