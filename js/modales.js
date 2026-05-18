// Abrir modales al hacer clic en las tarjetas de servicio
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceType = this.getAttribute('data-service');
        const modal = document.getElementById(serviceType + 'Modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Cerrar modales al hacer clic en el botón de cierre
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.service-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll de la página
    });
});

// Cerrar modales al hacer clic fuera del contenido
document.querySelectorAll('.service-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Asegurar que el scroll del modal no afecte al scroll de la página
document.querySelectorAll('.service-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Prevenir que el scroll del modal afecte al scroll de la página
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('wheel', function(e) {
        const delta = e.deltaY;
        if (delta > 0 && this.scrollTop + this.clientHeight >= this.scrollHeight) {
            e.preventDefault();
        } else if (delta < 0 && this.scrollTop <= 0) {
            e.preventDefault();
        }
    }, { passive: false });
});