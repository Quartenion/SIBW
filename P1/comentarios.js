document.addEventListener("DOMContentLoaded", function () {
    const botonComentarios = document.querySelector(".boton_comentarios button");
    const seccionComentarios = document.querySelector(".seccion-comentarios");
    const botonEnviar = document.getElementById("boton-enviar");
    const inputAutor = document.getElementById("autor");
    const inputEmail = document.getElementById("email");
    const inputComentario = document.getElementById("comentario");
    const commentList = document.getElementById("lista-comentarios");

    // Lista de palabras prohibidas
    const palabrasProhibidas = ["malo", "tonto", "feo", "estúpido", "idiota", "troll", "fake", "inútil", "horrible", "asco"];

    // Mostrar/ocultar sección de comentarios al hacer clic en el botón de comentarios
    botonComentarios.addEventListener("click", function () {
        seccionComentarios.classList.toggle("visible");
    });

    // Manejar el clic en el botón "Enviar"
    botonEnviar.addEventListener("click", function () {
        addComment();
    });

    // Detectar y censurar palabras prohibidas en tiempo real
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

        // Validar que los campos no estén vacíos
        if (autor === "" || email === "" || comentarioTexto === "") {
            mostrarModal("Todos los campos son obligatorios.");
            return;
        }

        // Validar email con regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarModal("Por favor, introduce un e-mail válido.");
            return;
        }

        // Obtener la fecha y hora actual
        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toLocaleDateString();
        const horaFormateada = fechaActual.toLocaleTimeString();

        // Crear el nuevo comentario
        const newComment = document.createElement("div");
        newComment.classList.add("comentario");
        newComment.innerHTML = `
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Fecha y Hora:</strong> ${fechaFormateada} ${horaFormateada}</p>
            <p>"${comentarioTexto}"</p>
        `;

        // Agregar el comentario al principio de la lista
        commentList.prepend(newComment);

        // Limpiar el formulario después de agregar el comentario
        inputAutor.value = "";
        inputEmail.value = "";
        inputComentario.value = "";
    }

    // Función para mostrar un diálogo modal de error (máximo uno activo)
    function mostrarModal(mensaje) {
        // Verificar si ya hay un modal activo
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

        // Cerrar modal al hacer clic en el botón
        document.getElementById("cerrar-modal").addEventListener("click", function () {
            modal.remove();
        });

        // También cerrar modal si el usuario hace clic fuera de él
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }
});
