// Importar los estilos de AOS
import 'aos/dist/aos.css';

// Importar la biblioteca AOS
import AOS from 'aos';


//Script para cerrar la navbar:
document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.getElementById("navcol-2");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .btn-contacto");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1200 && navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});

//Script para el envio de mail:
const btn = document.getElementById('btn-envio');

document.getElementById('form-contacto')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

   btn.disabled = true; 
   btn.value = 'Enviando...';

   const serviceID = import.meta.env.VITE_EMAILJS_SERVICE;
   const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE;

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      btn.disabled = false;
      alert('¡Su consulta ha sido enviada!');
    }, (e) => {
      btn.value = 'Enviar';
      btn.disabled = false;
      alert(JSON.stringify(e));
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Inicializar AOS
  AOS.init({
    duration: 1200,  // Duración de la animación en milisegundos
    once: true,      // Ejecutar solo una vez
    easing: 'ease-in-out', // Tipo de easing (opcional)
  });
});
