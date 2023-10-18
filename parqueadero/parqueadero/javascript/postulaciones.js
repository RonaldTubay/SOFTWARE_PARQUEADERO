document.addEventListener("DOMContentLoaded", function () {
    const registroServiciosForm = document.getElementById("registro-servicios-form");
    const opcionesServicio = document.getElementById("opciones-servicio");
    const valorServicio = document.getElementById("valor-servicio");
    const meses = document.getElementById("meses");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contacto = document.getElementById("contacto");
    const listaServicios = document.getElementById("lista-servicios"); // Agregar un elemento con el id "lista-servicios" en tu HTML.

    // Función para mostrar los servicios
    function mostrarServicios() {
        listaServicios.innerHTML = ""; // Limpia la lista antes de mostrar los servicios.

        const servicios = JSON.parse(localStorage.getItem("servicios")) || [];

        if (servicios.length === 0) {
            listaServicios.innerHTML = "<p>No se han registrado ningún plan.</p>";
        } else {
            servicios.forEach(function (servicio, index) {
                const li = document.createElement("li");
                li.innerHTML = `<strong>Area #${index + 1}:</strong> ${servicio.seleccion}<br><strong>Experiencia commo docente:</strong> ${servicio.valor}<br/><strong>Nivel academico:</strong> titulo de ${servicio.meses} nivel<br><strong>Nombre:</strong> ${servicio.nombre}<br><strong>Correo:</strong> ${servicio.correo}<br><strong>Número de contacto:</strong> ${servicio.contacto}<br>`;

                // Agregar un botón para eliminar el servicio
                const eliminarButton = document.createElement("button");
                eliminarButton.textContent = "Eliminar";
                eliminarButton.addEventListener("click", function () {
                    eliminarServicio(index);
                });

                li.appendChild(eliminarButton);
                listaServicios.appendChild(li);
            });
        }
    }

    // Función para eliminar un servicio
    function eliminarServicio(index) {
        const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
        servicios.splice(index, 1);
        localStorage.setItem("servicios", JSON.stringify(servicios));
        mostrarServicios();
    }

    // Llama a la función para mostrar los servicios cuando se carga la página.
    mostrarServicios();

    registroServiciosForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // ... (código para agregar un nuevo servicio, como se mencionó anteriormente)
        mostrarServicios();
    });

    regresarPerfilButton.addEventListener("click", function () {
        window.location.href = "perfil.html";
    });
});
