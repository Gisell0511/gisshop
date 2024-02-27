// Desplazamiento suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Validación del formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim();
    const preferencias = document.getElementById("preferencias").value;

    if (nombre === "" || email === "" || preferencias === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación básica del formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}
