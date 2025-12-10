

// Función para desplegar el icono de sitios:

var lista_sitios = document.getElementsByClassName("item_menu");
function desplegar(){
    for(sitio of lista_sitios){
        sitio.style.display="block";
        sitio.style.position="static";
        sitio.style.minWidth="140px";
    }
}

// Función para volver a esconder las opciones:

function replegar(){
    for(sitio of lista_sitios){
        sitio.style.display="none";
        sitio.style.position="absolute";
        sitio.style.minWidth="140px";
    }

}


