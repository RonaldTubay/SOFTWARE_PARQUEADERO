document.addEventListener("DOMContentLoaded", function () {
    const regresarSesionUsuario = document.getElementById("regresar-sesionUsuario");

    function validarFormulario() {
        var useradminInput = document.getElementById("useradmin").value;
        var passwordInput = document.getElementById("password").value;
        // Validar los datos de inicio de sesión
        if (useradminInput === "admin" && passwordInput === "123") { //credenciales
            alert("Inicio de sesión exitoso.");
            window.location.href = "adminOpciones.html";
            return false; // Evita que el formulario se envíe
        } else {
            alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
            return false; // Evita que el formulario se envíe
        }
    }

    regresarSesionUsuario.addEventListener("click", function () {
        window.location.href = "sesionUsuario.html";
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        validarFormulario();
    });
});