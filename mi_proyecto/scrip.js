document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            // Redirigir a la página principal (index.html de los carros)
            window.location.href = 'index.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});