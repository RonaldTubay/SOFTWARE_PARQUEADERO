document.addEventListener("DOMContentLoaded", function () {
    const inicioSesionForm = document.getElementById("inicio-sesion-form");
    const message = document.getElementById("message");
    const regresarPrincipal = document.getElementById("regresar-principal");
    const regresarRegistro = document.getElementById("regresar-registro");
    const regresarAdmin = document.getElementById("regresar-admin");

    inicioSesionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Obtener los usuarios almacenados en localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Validar credenciales
        const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

        if (usuarioEncontrado) {
            showAlert("Inicio de sesión exitoso.", "success");
            // Redirigir al usuario a la página de perfil
            window.location.href = "perfil.html";
        } else {
            showAlert("Credenciales incorrectas. Por favor, inténtelo nuevamente.", "error");
        }
    });

    function showAlert(text, type) {
        if (type === "success") {
            alert("Inicio de sesión exitoso.");
        } else if (type === "error") {
            alert("Credenciales incorrectas. Por favor, inténtelo nuevamente.");
        }
    }

    regresarPrincipal.addEventListener("click", function () {
        window.location.href = "principal.html";
    });
    regresarRegistro.addEventListener("click", function () {
        window.location.href = "registroUsuario.html";
    });
    regresarAdmin.addEventListener("click", function () {
        window.location.href = "sesionAdmin.html";
    });
});
