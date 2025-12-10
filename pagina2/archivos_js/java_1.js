// Función para desplegar el menú
function desplegar() {
    const menu = document.getElementById("menu_desplegable");
    const itemsMenu = menu.getElementsByClassName("item_menu");

    for (let item of itemsMenu) {
        item.style.display = "block"; // Mostrar las opciones
    }
}

// Función para replegar el menú
function replegar() {
    const menu = document.getElementById("menu_desplegable");
    const itemsMenu = menu.getElementsByClassName("item_menu");

    for (let item of itemsMenu) {
        item.style.display = "none"; // Ocultar las opciones
    }
}

// Selecciona el encabezado y el botón
const header = document.getElementById("mainHeader");
const scrollToTopButton = document.getElementById("scrollToTop");

// Detectar el scroll
window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight;
    
    // Mostrar el botón si el encabezado no está visible
    if (window.scrollY > headerHeight) {
        scrollToTopButton.style.display = "flex";
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.display = "none";
        scrollToTopButton.style.opacity = "0";
    }
});

// Desplazar hacia arriba al hacer clic
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Movimiento suave
    });
});
