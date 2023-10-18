function registrarLugar() {
    var idLugar = document.getElementById("idLugar").value.trim();
    var disponibilidad = document.getElementById("disponibilidad").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;

    var errorMessages = [];

    if (!/^\d+$/.test(idLugar)) {
        errorMessages.push("ID del lugar debe contener solo números.");
    }

    if (disponibilidad !== "Disponible" && disponibilidad !== "Ocupado") {
        errorMessages.push("Disponibilidad debe ser 'Disponible' o 'Ocupado'.");
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
        errorMessages.push("Fecha debe tener el formato YYYY-MM-DD.");
    }

    if (!/^\d{2}:\d{2}$/.test(hora)) {
        errorMessages.push("Hora debe tener el formato HH:MM.");
    }

    if (errorMessages.length > 0) {
        alert("Por favor, corrija los siguientes errores:\n" + errorMessages.join("\n"));
        return;
    }

    var nuevoLugar = {
        idLugar,
        disponibilidad,
        fecha,
        hora
    };

    var lugaresRegistrados = JSON.parse(localStorage.getItem("lugaresRegistrados")) || [];
    lugaresRegistrados.push(nuevoLugar);
    localStorage.setItem("lugaresRegistrados", JSON.stringify(lugaresRegistrados));
    limpiarCamposFormulario();
    actualizarListaLugares();
}

function actualizarListaLugares() {
    var listaLugares = document.getElementById("listaLugares");
    listaLugares.innerHTML = "";

    var lugaresRegistrados = JSON.parse(localStorage.getItem("lugaresRegistrados")) || [];

    for (var i = 0; i < lugaresRegistrados.length; i++) {
        var lugar = lugaresRegistrados[i];
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>ID del Lugar:</strong> ${lugar.idLugar}<br>
            <strong>Disponibilidad:</strong> ${lugar.disponibilidad}<br>
            <strong>Fecha:</strong> ${lugar.fecha}<br>
            <strong>Hora:</strong> ${lugar.hora}<br>
        `;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar lugar";
        deleteButton.onclick = (function(index) {
            return function() {
                eliminarLugar(index);
            };
        })(i);

        listItem.appendChild(deleteButton);
        listaLugares.appendChild(listItem);
    }
}

function eliminarLugar(index) {
    var lugaresRegistrados = JSON.parse(localStorage.getItem("lugaresRegistrados")) || [];

    if (index >= 0 && index < lugaresRegistrados.length) {
        lugaresRegistrados.splice(index, 1);
        localStorage.setItem("lugaresRegistrados", JSON.stringify(lugaresRegistrados));
        actualizarListaLugares();
    }
}

actualizarListaLugares();
// Cargar la lista de lugares al cargar la página


// Función para redirigir a la página de opciones
function regresarAOpciones() {
    window.location.href = "adminOpciones.html";
}

document.getElementById("regresar-opciones").addEventListener("click", regresarAOpciones);

