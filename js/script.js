// Manejo simple de formulario
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formResult.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
    contactForm.reset();
});

// Navegación suave entre secciones
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//modales

    const cards = document.querySelectorAll(".servicio-card");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if(entry.isIntersecting){

    cards.forEach((card, index) => {
    setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    }, index * 120);
    });

    }
    });
    },{threshold:0.2});

    cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    });

    observer.observe(document.querySelector("#servicios"));
