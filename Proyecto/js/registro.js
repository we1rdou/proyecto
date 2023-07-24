// registro.js

document.getElementById("Registro").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombresInput = document.getElementById("nombres");
    const apellidosInput = document.getElementById("apellidos");
    const telefonoInput = document.getElementById("telef");
    const correoInput = document.getElementById("correo_inst");
    const contraseñaInput = document.getElementById("contra");
    const confirmaContraseñaInput = document.getElementById("confirma_contra");

    const nombres = nombresInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const correo = correoInput.value.trim();
    const contraseña = contraseñaInput.value;
    const confirmaContraseña = confirmaContraseñaInput.value;

    if (nombres === "" || apellidos === "" || telefono === "" || correo === "" || contraseña === "" || confirmaContraseña === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (contraseña !== confirmaContraseña) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }

    if (!validateEmail(correo)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
     this.submit('registro.html');
});

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
}




