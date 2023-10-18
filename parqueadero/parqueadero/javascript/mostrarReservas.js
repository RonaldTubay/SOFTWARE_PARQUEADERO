document.addEventListener("DOMContentLoaded", function () {
    const listaReservas = document.getElementById("lista-reservas");

    // Obtener las reservas almacenadas en localStorage
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    if (reservas.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se han registrado reservas aún.";
        listaReservas.appendChild(mensaje);
    } else {
        // Iterar a través de las reservas y mostrarlas en la lista
        reservas.forEach(function (reserva, index) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>ID del Lugar:</strong> ${reserva.idLugar}<br>
                <strong>Fecha de Reserva:</strong> ${reserva.fechaReserva}<br>
                <strong>Hora de Inicio:</strong> ${reserva.horaInicio}<br>
                <strong>Hora de Finalización:</strong> ${reserva.horaFinal}<br>
                <strong>Cédula:</strong> ${reserva.cedula}<br>
                <strong>Nombres:</strong> ${reserva.nombres}<br>
                <strong>Apellidos:</strong> ${reserva.apellidos}<br>
            `;

            // Agregar un botón de eliminar para cada reserva
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar Reserva";
            deleteButton.addEventListener("click", function () {
                // Eliminar la reserva del arreglo de reservas
                reservas.splice(index, 1);
                // Actualizar los datos en localStorage
                localStorage.setItem("reservas", JSON.stringify(reservas));
                // Eliminar el elemento de la lista
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            listaReservas.appendChild(listItem);
        });
    }
});
