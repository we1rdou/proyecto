document.getElementById("form_index").addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("correo_index");
    const passwordInput = document.getElementById("contraseña_index");

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
     this.submit('menu.html');
});

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
}
