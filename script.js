if (window.lucide?.createIcons) {
    window.lucide.createIcons();
}

function toggleFaq(element) {
    if (!element) return;
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) element.classList.add('active');
}

function updateTabBar(id) {
    if (!id) return;
    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
        }
    });
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Actualizar estado de la tab bar activa según la sección visible
                updateTabBar(entry.target.id);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
} else {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

const nav = document.querySelector('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.style.backgroundColor = window.scrollY > 20
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(245, 245, 247, 0.72)';
    }, { passive: true });
}
