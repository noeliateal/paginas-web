// Abre el modal y carga el contenido dinámicamente (imagen, título y descripción)
function openModal(image, name, description) {
    document.getElementById('modal-image').src = "../img/Psicólogos/" + image;
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('myModal').style.display = 'block';
}

// Cierra el modal ocultándolo
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Función para cerrar el modal al hacer clic fuera del contenido
function closeModalOutside(event) {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
}