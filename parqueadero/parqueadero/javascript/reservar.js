document.addEventListener("DOMContentLoaded", function () {
    const registroReservasForm = document.getElementById("registro-reservas-form");
    const idLugar = document.getElementById("id-lugar");
    const fechaReserva = document.getElementById("fecha-reserva");
    const horaInicio = document.getElementById("hora-inicio");
    const horaFinal = document.getElementById("hora-final");
    const cedula = document.getElementById("cedula");
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");

    registroReservasForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const idLugarValor = idLugar.value.trim();
        const fechaReservaValor = fechaReserva.value;
        const horaInicioValor = horaInicio.value;
        const horaFinalValor = horaFinal.value;
        const cedulaValor = cedula.value.trim();
        const nombresValor = nombres.value.trim();
        const apellidosValor = apellidos.value.trim();

        // Validaciones
        if (!/^\d+$/.test(idLugarValor)) {
            alert("ID del Lugar debe contener solo números.");
            return;
        }

        if (!fechaReservaValor) {
            alert("Seleccione una Fecha de Reserva válida.");
            return;
        }

        if (!horaInicioValor || !horaFinalValor) {
            alert("Seleccione Hora de Inicio y Hora de Finalización válidas.");
            return;
        }

        if (!/^\d{10}$/.test(cedulaValor)) {
            alert("Cédula debe contener 10 números.");
            return;
        }

        // Validación de nombres y apellidos
        if (!/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(nombresValor) || !/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(apellidosValor)) {
            alert("Los campos de Nombres y Apellidos solo pueden contener letras, letras con tildes y espacios.");
            return;
        }

        // Crear un objeto para la reserva
        const reserva = {
            idLugar: idLugarValor,
            fechaReserva: fechaReservaValor,
            horaInicio: horaInicioValor,
            horaFinal: horaFinalValor,
            cedula: cedulaValor,
            nombres: nombresValor,
            apellidos: apellidosValor,
        };

        // Obtener las reservas almacenadas en localStorage
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        // Agregar la nueva reserva al arreglo
        reservas.push(reserva);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert("Reserva registrada con éxito.");
        registroReservasForm.reset();
    });

    regresarPerfilButton.addEventListener("click", function () {
        window.location.href = "perfil.html";
    });
});
