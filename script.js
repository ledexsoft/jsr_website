if (window.lucide?.createIcons) {
    window.lucide.createIcons();
}

function toggleFaq(element) {
    if (!element) return;
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) element.classList.add('active');
}


function goBackOrHome(fallback = 'index.html') {
    if (window.history.length > 1) {
        window.history.back();
        return;
    }
    window.location.href = fallback;
}

function setActiveNavigation() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const hash = window.location.hash;

    const navKey = hash === '#contacto'
        ? 'contacto'
        : hash === '#faq'
            ? 'ayuda'
            : path === 'catalogo.html'
                ? 'catalogo'
                : path === 'empresas.html'
                    ? 'empresas'
                    : path === 'sobre-nosotros.html'
                        ? 'nosotros'
                        : 'inicio';

    document.querySelectorAll('.ios26-nav-links .top-nav-link, .mobile-tab-bar .tab-item').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.navKey === navKey) {
            link.classList.add('active');
            if (link.classList.contains('top-nav-link')) {
                link.setAttribute('aria-current', 'page');
            }
        } else if (link.classList.contains('top-nav-link')) {
            link.removeAttribute('aria-current');
        }
    });
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
} else {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

setActiveNavigation();
window.addEventListener('hashchange', setActiveNavigation);

const navSurface = document.querySelector('.ios26-nav');
if (navSurface) {
    window.addEventListener('scroll', () => {
        navSurface.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
}
