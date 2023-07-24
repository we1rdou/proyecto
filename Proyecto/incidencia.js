// Obtener los elementos del formulario
const form = document.getElementById('form');
const nameInput = document.getElementById('Nombre y Apellido');
const apellidoInput = document.getElementById('teléfono');
const emailInput = document.getElementById('sector');
const telefonoInput = document.getElementById('dirección');
const contrasenaInput = document.getElementById('incidencia');


//Función para validar el teléfono
function validarFormatoTelefono(teléfono) {
    // Expresión regular para validar el formato de teléfono de 10 dígitos
    var patronTelefono = /^\d{10}$/;

    // Eliminar espacios en blanco y guiones antes de hacer la validación
    var telefonoLimpio = telefono.replace(/\s|-/g, '');

    // Comprobar si el número de teléfono coincide con el patrón
    if (patronTelefono.test(telefonoLimpio)) {
        return true; // Formato válido
    } else {
        return false; // Formato inválido
    }
}

// Función para validar el formulario al momento de enviarlo
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const name = nombreyapellidosInput.value.trim();
    const apellido = teléfonoInput.value.trim();
    const email = sectorInput.value.trim();
    const telefono = direcciónInput.value.trim();
    const contrasena = incidenciaInput.value.trim();

    // Validar que los campos no estén vacíos
    if (nombreyapellido === '' || teléfono === '' || sector === '' || dirección === '' || incidencia === '' ) {
        alert('Por favor, complete todos los campos');
        return;
    }


    // Si todo está correcto, enviar el formulario
    alert('El formulario ha sido enviado correctamente');
    form.reset(); // Limpiar los campos del formulario
}

// Agregar el evento 'submit' al formulario
form.addEventListener('submit', validarFormulario);