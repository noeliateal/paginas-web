// Seleccionamos los elementos necesarios
const btnAgregarTarea = document.getElementById('btn-agregar-tarea');
const inputTarea = document.getElementById('input-tarea');
const actividadesContainer = document.querySelector('.actividades');
const papelera = document.getElementById('papelera');

// Función para añadir un evento de drag a las tareas
function habilitarArrastre(actividad) {
    actividad.addEventListener('dragstart', iniciarArrastre);
}

// Agregamos el evento al botón de "Añadir" para crear nuevas tareas
btnAgregarTarea.addEventListener('click', agregarTarea);

// Agregamos el evento para agregar tarea también con la tecla Enter
inputTarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Si la tecla presionada es Enter
        event.preventDefault(); // Prevenir que la página se recargue (en algunos navegadores)
        agregarTarea(); // Llamamos a la función para agregar la tarea
    }
});

// Función para agregar una nueva tarea
function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    // Si el campo no está vacío, creamos una nueva tarea
    if (tareaTexto) {
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('actividad');
        nuevaTarea.draggable = true;
        nuevaTarea.textContent = tareaTexto;
        nuevaTarea.id = 'actividad-nueva-' + Date.now(); // Creación de ID único para las nuevas tareas

        // Añadimos el evento para permitir que la tarea sea arrastrable
        habilitarArrastre(nuevaTarea);

        // Insertamos la nueva tarea antes de la papelera
        actividadesContainer.insertBefore(nuevaTarea, papelera);

        // Limpiamos el campo de entrada
        inputTarea.value = '';
    }
}

// Función que se ejecuta cuando una tarea comienza a ser arrastrada
function iniciarArrastre(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

// Función para permitir que las actividades se puedan soltar en las zonas de drop
const dropzones = document.querySelectorAll('.dropzone');
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', permitirDrop);
    dropzone.addEventListener('drop', soltarActividad);
});

// Función para permitir el drop (soltar la tarea en la zona)
function permitirDrop(event) {
    event.preventDefault();
}

// Función que se ejecuta cuando la tarea se suelta en una dropzone
function soltarActividad(event) {
    event.preventDefault();
    const actividadId = event.dataTransfer.getData('text/plain');
    const actividadOriginal = document.getElementById(actividadId);

    // Si la tarea ya estaba en el calendario y se mueve a otra zona, la eliminamos del día anterior
    if (actividadOriginal && actividadOriginal.parentNode.classList.contains('dropzone')) {
        actividadOriginal.remove();
    }

    // Comprobamos si es una tarea nueva antes de eliminarla de la lista original
    if (actividadOriginal.id.startsWith('actividad-nueva-')) {
        actividadOriginal.remove(); // Eliminamos la tarea de la lista original
    }

    // Creamos una copia de la tarea para el calendario
    const actividadCopia = actividadOriginal.cloneNode(true);
    actividadCopia.id = actividadId + '-' + Date.now(); // Creamos un ID único para la copia

    // Añadimos el evento dragstart a la copia para que también sea arrastrable en el calendario
    habilitarArrastre(actividadCopia);

    // Insertamos la copia en la dropzone donde se ha soltado
    event.target.appendChild(actividadCopia);
}

// Función para eliminar tareas arrastradas a la papelera
papelera.addEventListener('dragover', permitirDrop);
papelera.addEventListener('drop', eliminarActividad);

function eliminarActividad(event) {
    event.preventDefault();
    const actividadId = event.dataTransfer.getData('text/plain');
    const actividad = document.getElementById(actividadId);

    // Eliminar la tarea si está dentro de una dropzone
    if (actividad && actividad.parentNode.classList.contains('dropzone')) {
        actividad.remove();
    }
}

// Inicializar el arrastre para las tareas existentes (al cargar la página)
document.querySelectorAll('.actividad').forEach(actividad => {
    habilitarArrastre(actividad);
});
