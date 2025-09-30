document.addEventListener("DOMContentLoaded", ()=>{
    const tarea = document.getElementById("tarea");
    const boton = document.getElementById("boton");
    const lista = document.getElementById("lista");

    boton.addEventListener("click", ()=>{
        if(tarea.value.trim() === ""){
            alert("Escribe tu tarea primero");
        }
        else{
            const child = document.createElement("li");
            child.textContent = tarea.value;
            lista.appendChild(child);
            tarea.value="";
        }
    });
});