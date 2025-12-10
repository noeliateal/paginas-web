//Página Test
//Intercepta el envío del formulario, muestra un mensaje de agradecimiento y limpia los campos del formulario.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#mental-health-test');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el envío real del formulario
            alert('¡Muchas gracias! Los datos del test se han enviado correctamente a nuestro equipo. Contactaremos contigo por si quisieses tener una reunión inicial y asignarte el psicólogo/a ideal para ti :)');
            form.reset(); // Limpia el formulario tras el envío
        });
    }
}); 