function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    let containerHeight = starsContainer.clientHeight; // Inicialmente, obtiene la altura del contenedor

    // Función para actualizar la altura del contenedor
    const updateContainerHeight = () => {
        containerHeight = starsContainer.clientHeight;
    };

    // Llama a la función de actualización cuando la ventana cambie de tamaño
    window.addEventListener('resize', updateContainerHeight);

    for (let i = 0; i < 5000; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Asigna un identificador único a algunas estrellas (por ejemplo, "shine-star")
        const shouldShine = Math.random() < 0.8; // Define la condición para que una estrella brille
        if (shouldShine) {
            star.classList.add('shine-star');
        }   

        const randomSize = Math.random() * 0.1 + 1.5; // Tamaño aleatorio
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;

        const randomPositionX = Math.random() * 99; // Posición aleatoria en el 99% (para evitar desbordamiento horizontal)
        star.style.left = `${randomPositionX}%`;
        
        const randomPositionY = Math.random() * containerHeight; // Altura aleatoria dentro del contenedor
        star.style.top = `${randomPositionY}px`; // Usamos "px" para establecer la altura en píxeles
        starsContainer.appendChild(star);
    }
}



// Llama a la función para crear estrellas cuando se carga la página
window.addEventListener('load', createStars);

// Luego, selecciona las estrellas con la clase "shine-star" y aplica el efecto de brillo
const shiningStars = document.querySelectorAll('.shine-star');
shiningStars.forEach((star) => {
    star.classList.add('star-shine');
});
