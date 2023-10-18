document.addEventListener("DOMContentLoaded", function () {
    const userProfile = document.getElementById("user-profile");
    const cerrarSesionButton = document.getElementById("cerrar-sesion");

    // Obtener los datos del usuario desde localStorage
    const usuario = JSON.parse(localStorage.getItem("usuarios"))[0]; // Aquí asumimos que solo hay un usuario registrado

    if (usuario) {
        // Construir la estructura HTML para mostrar los datos del usuario
        const profileHTML = `
            <p><strong>Nombre de Usuario:</strong> ${usuario.username}</p>
            <p><strong>Nombres:</strong> ${usuario.nombres}</p>
            <p><strong>Apellidos:</strong> ${usuario.apellidos}</p>
            <p><strong>Correo Electrónico:</strong> ${usuario.correo}</p>
            <p><strong>Número de Celular:</strong> ${usuario.celular}</p>
            <p><strong>cedula:</strong> ${usuario.cedula}</p>
        `;

        userProfile.innerHTML = profileHTML;
    }

    cerrarSesionButton.addEventListener("click", function () {
        // Redirigir al usuario a la página de inicio de sesión al cerrar sesión
        window.location.href = "sesionUsuario.html";
    });
});

document.getElementById("regresar-principal").addEventListener("click", function () {
    // Redirigir al usuario de vuelta a la página de registro de servicios
    window.location.href = "principal.html";
});

document.getElementById("regresar-postular").addEventListener("click", function () {
    // Redirigir al usuario de vuelta a la página de registro de servicios
    window.location.href = "reservar.html";
});

