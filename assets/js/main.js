import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Se agrega la clase navbar-scroll al navbar cuando se hace scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.getElementById('navegacion');
        if (window.scrollY > 50) { // Puedes ajustar el valor según tus necesidades
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// Manejar el envío del formulario
/* var contactForm = document.getElementById('contactForm');
contactForm.
contactFo
addEventListener('submit', function (event) {
    event.
 
preventDefault(); // Evitar el envío real del formulario
    
  
alert('Formulario enviado con éxito!');
}); */


document.addEventListener('DOMContentLoaded', (event) => {
    // Obtén el formulario y el botón de enviar
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Añade un evento 'submit' al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente
        alert('Tus datos fueron ingresados con éxito');
    });
});
