lucide.createIcons();

function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) element.classList.add('active');
}

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

function updateTabBar(id) {
    if (!id) return;
    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    } else {
        nav.style.backgroundColor = 'rgba(245, 245, 247, 0.72)';
    }
});
