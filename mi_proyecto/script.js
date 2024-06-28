document.addEventListener('DOMContentLoaded', function() {
    const carsList = document.getElementById('cars-list');
    const backToLoginBtn = document.getElementById('back-to-login-btn');
    const themeToggleBtn = document.getElementById('toggle-theme-btn');
    const body = document.body;

            // Datos de ejemplo (simulando una base de datos)
            const cars = [
                { id: 1, marca: 'Toyota', modelo: 'Corolla', precio: 25000, imagen: 'https://cdn.motor1.com/images/mgl/P3gQyK/s1/corolla-grs-1.jpg' },
                { id: 2, marca: 'Honda', modelo: 'Civic', precio: 27000, imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg' },
                { id: 3, marca: 'Ford', modelo: 'Mustang', precio: 45000, imagen: 'https://cdn.motor1.com/images/mgl/9mZpXv/s1/2020-2022-ford-mustang-shelby-gt500kr.jpg' },
                { id: 4, marca: 'Chevrolet', modelo: 'Camaro', precio: 40000, imagen: 'https://parkers-images.bauersecure.com/wp-images/21327/cut-out/930x620/camaro_coupe.jpg' },
                { id: 5, marca: 'BMW', modelo: 'X5', precio: 60000, imagen: 'https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg' },
                { id: 6, marca: 'Audi', modelo: 'R8', precio: 45000, imagen: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' },
                { id: 7, marca: 'Mercedes-Benz', modelo: 'CLA', precio: 55000, imagen: 'https://www.topgear.com/sites/default/files/2023/10/Medium-44235-CLA250e.jpg' }
            ];

           // Función para renderizar los carros en el HTML
    function renderCars() {
        carsList.innerHTML = ''; // Limpiar el contenido anterior

        cars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.classList.add('car');
            carElement.innerHTML = `
                <h2>${car.marca} ${car.modelo}</h2>
                <img src="${car.imagen}" alt="${car.marca} ${car.modelo}">
                <p>Precio: $${car.precio}</p>
            `;
            carsList.appendChild(carElement);
        });
    }

    // Llamar a la función para renderizar los carros al cargar la página
    renderCars();
      // Event listener para el botón de volver al inicio
    backToLoginBtn.addEventListener('click', function() {
        window.location.href = 'inicio.html'; // Redirigir al inicio de sesión
    });

    // Event listener para el botón de cambio de tema
    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });
});