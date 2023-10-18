// Función para registrar una postulación
function registrarPostulacion() {
    var carreraPostu = document.getElementById("carreraPostu").value;
    var facultadPostu = document.getElementById("facultadPostu").value;
    var sueldoPostu = document.getElementById("sueldoPostu").value;
    var jornada = document.getElementById("jornada").value;
    var detalles = document.getElementById("detalles").value;

    // Validar que los campos obligatorios no estén vacíos
    if (!carreraPostu || !sueldoPostu || !jornada) {
        alert("Por favor, complete los campos obligatorios.");
        return;
    }

    // Validar el formato del sueldo
    if (isNaN(parseFloat(sueldoPostu))) {
        alert("El sueldo debe ser un número válido.");
        return;
    }

    // Validar la longitud de los detalles (por ejemplo, máximo 500 caracteres)
    if (detalles.length > 500) {
        alert("Los detalles no pueden exceder los 500 caracteres.");
        return;
    }

    // Obtener las postulaciones registradas almacenadas en localStorage
    var postulacionesRegistradas = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];

    // Crear un objeto para la nueva postulación
    var nuevaPostulacion = {
        carreraPostu: carreraPostu,
        facultadPostu: facultadPostu,
        sueldoPostu: sueldoPostu,
        jornada: jornada,
        detalles: detalles
    };

    // Agregar la nueva postulación al arreglo
    postulacionesRegistradas.push(nuevaPostulacion);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem("postulacionesRegistradas", JSON.stringify(postulacionesRegistradas));

    // Limpiar los campos del formulario
    document.getElementById("carreraPostu").value = "";
    document.getElementById("facultadPostu").value = "Facultad 1";
    document.getElementById("sueldoPostu").value = "";
    document.getElementById("jornada").value = "";
    document.getElementById("detalles").value = "";

    // Actualizar la lista de postulaciones
    actualizarListaPostulaciones();
}

// Función para actualizar la lista de postulaciones
function actualizarListaPostulaciones() {
    var listaPostulaciones = document.getElementById("listaPostulaciones");
    listaPostulaciones.innerHTML = "";

    // Obtener las postulaciones registradas desde localStorage
    var postulacionesRegistradas = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];

    // Iterar a través del arreglo y mostrar cada postulación
    for (var i = 0; i < postulacionesRegistradas.length; i++) {
        var postulacion = postulacionesRegistradas[i];
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            Carrera: ${postulacion.carreraPostu}<br>
            Facultad: ${postulacion.facultadPostu}<br>
            Sueldo: ${postulacion.sueldoPostu}<br>
            Jornada: ${postulacion.jornada}<br>
            Detalles: ${postulacion.detalles}
        `;

        // Agregar un botón para eliminar la postulación usando una función de cierre
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = (function(index) {
            return function() {
                eliminarPostulacion(index);
            };
        })(i);

        listItem.appendChild(deleteButton);
        listaPostulaciones.appendChild(listItem);
    }
}

// Función para eliminar una postulación
function eliminarPostulacion(index) {
    // Obtener las postulaciones registradas desde localStorage
    var postulacionesRegistradas = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];

    // Eliminar la postulación correspondiente
    postulacionesRegistradas.splice(index, 1);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem("postulacionesRegistradas", JSON.stringify(postulacionesRegistradas));

    // Actualizar la lista de postulaciones
    actualizarListaPostulaciones();
}

// Cargar la lista de postulaciones al cargar la página
window.onload = actualizarListaPostulaciones;

// Resto del código...

// Código para cargar y mostrar las postulaciones usando event listener
document.addEventListener("DOMContentLoaded", function () {
    const listaPostulaciones = document.getElementById("listaPostulaciones");

    // Función para cargar y mostrar las postulaciones desde localStorage
    function cargarPostulaciones() {
        listaPostulaciones.innerHTML = "";

        // Obtener las postulaciones registradas desde localStorage
        const postulacionesRegistradas = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];

        // Iterar a través del arreglo y mostrar cada postulación
        postulacionesRegistradas.forEach((postulacion, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                Carrera: ${postulacion.carreraPostu}<br>
                Facultad: ${postulacion.facultadPostu}<br>
                Sueldo: ${postulacion.sueldoPostu}<br>
                Jornada: ${postulacion.jornada}<br>
                Detalles: ${postulacion.detalles}
            `;

            // Agregar un botón para eliminar la postulación
            const eliminarButton = document.createElement("button");
            eliminarButton.textContent = "Eliminar";
            eliminarButton.addEventListener("click", () => {
                // Eliminar la postulación del arreglo
                postulacionesRegistradas.splice(index, 1);
                // Actualizar la información en localStorage
                localStorage.setItem("postulacionesRegistradas", JSON.stringify(postulacionesRegistradas));
                // Recargar la lista de postulaciones
                cargarPostulaciones();
            });

            listItem.appendChild(eliminarButton);
            listaPostulaciones.appendChild(listItem);
        });
    }

    cargarPostulaciones();
});

document.getElementById("regresar-opciones").addEventListener("click", function () {
    // Redirigir al usuario de vuelta a la página de registro de servicios
    window.location.href = "adminOpciones.html";
});