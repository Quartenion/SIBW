document.addEventListener("DOMContentLoaded", function () {
    const botonComentarios = document.querySelector(".boton_comentarios button");
    const seccionComentarios = document.querySelector(".seccion-comentarios");
    const botonEnviar = document.getElementById("boton-enviar");
    const inputAutor = document.getElementById("autor");
    const inputEmail = document.getElementById("email");
    const inputComentario = document.getElementById("comentario");
    const commentList = document.getElementById("lista-comentarios");

    const palabrasProhibidas = ["mierda", "joder", "matar", "gilipollas", "idiota", "wtf", "fake", "inútil", "horrible", "censura"];

    botonComentarios.addEventListener("click", function () {
        seccionComentarios.classList.toggle("visible");
    });

    botonEnviar.addEventListener("click", function () {
        addComment();
    });

    inputComentario.addEventListener("input", function () {
        let texto = inputComentario.value;

        palabrasProhibidas.forEach(palabra => {
            const regex = new RegExp(`\\b${palabra}\\b`, "gi");
            texto = texto.replace(regex, "*".repeat(palabra.length));
        });

        inputComentario.value = texto;
    });

    function addComment() {
        const autor = inputAutor.value.trim();
        const email = inputEmail.value.trim();
        const comentarioTexto = inputComentario.value.trim();

        if (autor === "" || email === "" || comentarioTexto === "") {
            mostrarModal("Todos los campos son obligatorios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarModal("Por favor, introduce un e-mail válido.");
            return;
        }

        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toLocaleDateString();
        const horaFormateada = fechaActual.toLocaleTimeString();

        const newComment = document.createElement("div");
        newComment.classList.add("comentario");
        newComment.innerHTML = `
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Fecha y Hora:</strong> ${fechaFormateada} ${horaFormateada}</p>
            <p>"${comentarioTexto}"</p>
        `;

        commentList.prepend(newComment);
        
        inputComentario.value = "";
    }

    function mostrarModal(mensaje) {
        if (document.querySelector(".modal")) {
            return;
        }

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <p>${mensaje}</p>
                <button id="cerrar-modal">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("cerrar-modal").addEventListener("click", function () {
            modal.remove();
        });
    }
});
