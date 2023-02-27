//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//OCULTAR MENU AL SELECCIONAR UNA OPCION
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
 //BOTON "ENVIAR" DEL FORMULARIO   
}
document.getElementById('boton-enviar') .addEventListener('click', function() {
    console.log("Mensaje Enviado");
    document.getElementById("boton-enviar").innerHTML = "Tu mensaje se ha enviado ¡Gracias por comunicarte!"
});