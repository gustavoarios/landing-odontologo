document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    // Asegurate de que exista la instancia de Collapse
    const collapseInstance = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar si está abierto
            if (navbarCollapse.classList.contains('show')) {
                collapseInstance.hide();
            }
        });
    });
});
