// FORMULARIO REGISTRO


// Objeto vacío:
var usuario = {

};


//Correo:
var correu = document.getElementById("correo");
//Contraseña:
var contra = document.getElementById("pwd");


var vector_objetos = [];



var indicador_de_registro = false;
function datos(){

    //Nombre:
    usuario.nombre = document.getElementById("nom").value;
    vector_objetos.push(usuario.nombre);
    //Apellidos:
    usuario.apellidos  = document.getElementById("cognom").value;
    vector_objetos.push(usuario.apellidos);
    //Fecha:
    usuario.fecha = document.getElementById("fecha").value;
    vector_objetos.push(usuario.fecha);
    //Género:
    var generos = document.getElementsByName("sexo");
    for (i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            usuario.genero = generos[i].value;
        }    
    }    
    vector_objetos.push(usuario.genero);
    //Domicilio:
    usuario.domicilio = document.getElementById("dom").value;
    vector_objetos.push(usuario.domicilio);
    //Extra domicilio:
    usuario.direcc = document.getElementById("w3review").value;
    vector_objetos.push(usuario.direcc);
    //Ciudad:
    usuario.ciudad = document.getElementById("ciudad").value;
    vector_objetos.push(usuario.ciudad);
    //Correo:
    usuario.correo = document.getElementById("correo").value;
    vector_objetos.push(usuario.correo);
    //Contraseña:
    usuario.contrasenya = document.getElementById("pwd").value;
    vector_objetos.push(usuario.contrasenya);

    

    indicador_de_registro = true;


    var texto = "Registro exitoso\nHe aquí su número de usuario:\n\n"; 
    var namer = "";

    // Cogemos el Nombre: vector_objetos[0] (las dos primeras letras)
    var nombre_2 = 0;
    for(letra of vector_objetos[0]){
        if(nombre_2 < 2){
            namer = namer + letra;
            nombre_2 = nombre_2 + 1;
        }
    }    

    // Cogemos el Apellido: vector_objetos[1] (las dos primeras letras)
    var apellido_2 = 0;
    for(letra of vector_objetos[1]){
        if(apellido_2 < 2){
            namer = namer + letra;
            apellido_2 = apellido_2 + 1;
        }
    }    

    // Cogemos la Fecha: vector_objetos[2] (los dos últimos dígitos del año de nacimiento)
    var anio_2 = 0;
    for(letra of vector_objetos[2]){
        if(anio_2 < 4){
            if(anio_2 == 2 || anio_2 == 3){
                namer = namer + letra;
            }
            anio_2 = anio_2 + 1;         
        } 
    }    
            

    // Generamos un Pop-up
    texto = texto + namer;
    confirm(texto);
    

}







// FORMULARIO INICIAR SESIÓN (esto se puede hacer con vectores)

function comprobar_datos(){
    //Obtener correo ingresado en el inicio de sesión:
   // var inicio_correo = document.getElementById("electr").value;
    //Obtener contraseña ingresada en el inicio de sesión:
    //var inicio_contrasenya = document.getElementById("senya").value;

    console.log(correu);

    if(document.getElementById("electr").value === document.getElementById("correo").value){
        console.log("CORREO");
    }

    if(document.getElementById("senya").value === document.getElementById("pwd").value){
        console.log("CONTRASENYA")
    }

}


function volverInicio() {
    window.location.href = 'inicio.html';
}


function comprobar_datos() {
    // Realiza las comprobaciones necesarias
    // Si las comprobaciones son exitosas, muestra el botón "Excelente! Seguir comprando"
    document.getElementById("btnContinuarComprando").style.display = "block";

    // Devuelve false para evitar que el formulario se envíe y la página se recargue
    return false;
}

function continuarComprando() {
    // Redirige a la página principal de tienda.html
    window.location.href = "tienda.html";
}

function volverInicio() {
    alert("Volviendo a la página de inicio");
}


function recoger_datos() {
    // Aquí puedes incluir lógica para procesar los datos del formulario
    // ...

    // Después de procesar los datos, mostrar el botón "Seguir comprando"
    document.getElementById("btnSeguirComprando").style.display = "block";
}

function seguirComprando() {
    // Redirige a tienda.html
    window.location.href = "tienda.html";
}