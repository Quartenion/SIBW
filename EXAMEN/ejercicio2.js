/*
function saludar(){
    const nombre = document.getElementById("nombre");
    const texto = document.getElementById("texto");

    if(nombre.value.trim() == ""){
        texto.textContent = "Por favor, escribe tu nombre";
    }
    else{
        texto.textContent = "Hola " + nombre.value;
    }
}
*/

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    const input = document.getElementById("nombre");
    const parrafo = document.getElementById("texto");

    boton.addEventListener("click", () => {
        if (input.value.trim() === "") {
            parrafo.textContent = "Por favor, escribe tu nombre";
        } else {
            parrafo.textContent = "¡Hola " + input.value + "!";
        }
    });
});
