
// Página sobre la que se aplica el código: Tienda (tienda.html); 




// Variable que indica si el producto ha sido soltado por el ratón:
var suelto = "no";
// Variable que indica ai el ratón está sobre el icono del carrito:
var sobre_carrito = "no";

// Variable contadora:
var contador = 0;
// Variable lista:
var lista_id = [];



// Si el objeto es soltado:

var id_del_momento = "";
function soltado(elemento){
    // Cambiamos variable:
    suelto = "yes";

    id_del_momento = id_del_momento + elemento.id;
    console.log("Funciona. Soltar")
    recopilador();
}

// Si el ratón está sobre el icono del carrito:

function encima(){
    // Cambiamos variable:
    sobre_carrito = "yes";

    console.log("Funciona. Encima")
    recopilador();
}


// Si se cumplen las dos funciones anteriores a la vez:

function recopilador(){
    if(suelto == "yes" && sobre_carrito == "yes"){
        comprobador();

        // Inicializa variables:
        sobre_carrito = "no";
        suelto = "no";
    }
}



function comprobador(){
    console.log("FUNCIONA", id_del_momento);

    //Añadimos a la lista el id del producto arrastrado:
    lista_id.push(id_del_momento)

    // Dejamos la variable vacía para el próximo producto:
    id_del_momento = "";

    // Sumamos +1 al contador de productos
    contador = contador + 1;
    cambia_icono(contador);
}


// Con esta función cambiamos el icono del carrito para saber cuántas compras llevamos:

function cambia_icono(c){
    var icono = document.getElementById("menu_carrito");

    switch (c) {
        case 1:
            icono.setAttribute("src", "../img/1.png");
            break;
        case 2:
            icono.setAttribute("src", "../img/2.png"); 
            break;  
        case 3:
            icono.setAttribute("src", "../img/3.png");
            break;
        case 4:
            icono.setAttribute("src", "../img/4.png");  
            break;
        case 5:
            icono.setAttribute("src", "../img/5.png"); 
            break;

    }
}



// Crea un pop-up al pulsar sobre el icono del carro (con la lista de la compra):

function compra() {

    var texto = "LLamar al 621083719 para realizar compra.\nLista de productos en el carrito por el momento:\n\n"; 
    var extra = "";


    for(id_ of lista_id){
        extra = extra + id_ + "\n";
    }

    texto = texto + extra;


    confirm(texto);
}









