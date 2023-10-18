document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");
    const message = document.getElementById("message");
    const regresarPrincipal = document.getElementById("regresar-principal");
    const regresarSesionUsuario = document.getElementById("regresar-sesionUsuario");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const celular = document.getElementById("celular").value;
        const cedula = document.getElementById("cedula").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validaciones
        // vacios
        if (!username || !nombres || !apellidos || !correo || !celular || !cedula || !password || !confirmPassword) {
            showAlert("Por favor, complete todos los campos.", "error");
            return;
        }
        
        if (!/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(nombres) || !/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(apellidos)) {
            showAlert("Los campos 'nombres' y 'apellidos' solo pueden contener letras, espacios y caracteres acentuados.", "error");
            return;
        }
        
        if (password.length < 3) {
            showAlert("La contraseña debe tener al menos 3 caracteres.", "error");
            return;
        }
        
        if (password !== confirmPassword) {
            showAlert("Las contraseñas no coinciden.", "error");
            return;
        }
    
        const cedulaVali = /^\d{10}$/;
        if (!cedulaVali.test(cedula)) {
            showAlert("Ingrese un número de cedula válido (10 dígitos).", "error");
            return;
        }

        const correoVali = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!correoVali.test(correo)) {
            showAlert("Ingrese una dirección de correo electrónico válida.", "error");
            return;
        }

        const celularVali = /^\d{10}$/;
        if (!celularVali.test(celular)) {
            showAlert("Ingrese un número de teléfono válido (10 dígitos).", "error");
            return;
        }

        if (username.length < 3 || username.length > 20) {
            showAlert("El nombre de usuario debe tener entre 3 y 20 caracteres.", "error");
            return;
        }
        
        const usuarioVali = /^[a-zA-Z0-9_]+$/;
        if (!usuarioVali.test(username)) {
            showAlert("El nombre de usuario solo puede contener letras, números y guiones bajos.", "error");
            return;
        }

        // Crear objeto de usuario
        const usuario = {
            username,
            nombres,
            apellidos,
            correo,
            celular,
            cedula,
            password
        };

        // Sobrescribir la lista de usuarios con el nuevo usuario
        const usuarios = [usuario];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        showAlert("Registro exitoso.", "success");
        registroForm.reset();
    });

    function showAlert(text, type) {
        alert(text); // Muestra una alerta en el navegador
    }

    regresarPrincipal.addEventListener("click", function () {
        window.location.href = "principal.html";
    });

    regresarSesionUsuario.addEventListener("click", function () {
        window.location.href = "sesionUsuario.html";
    });
});
