const btnA = document.getElementById('btnA');
const videoElement = document.getElementById('video');
const audioElement = document.getElementById('audio');
const audioElement2 = document.getElementById('audioTitulo');
const container = document.querySelector('.gameStart'); // El contenedor del video
let starInterval;

// Función para iniciar la generación de estrellas
function getCenter(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return { centerX, centerY };
}

function getRandomTopValue(min, max) {
    return Math.random() * (max - min) + min;
}

function createStar() {
    const center = getCenter(container);
    const star = document.createElement('div');
    star.classList.add('HoHoStars');
    const randomTop = getRandomTopValue(-20, 20);
    star.style.marginTop = `${randomTop}px`;
    container.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 4000);
}

function startStarGeneration() {
    starInterval = setInterval(createStar, 300);
}

// Función que maneja el clic del botón "A"
function handleBtnAClick() {
    // Si el video está pausado
    if (videoElement.paused & window.getComputedStyle(videoElement).display != 'none') {
        videoElement.play();
        audioElement.play();
        console.log('Se inicia el video por que se para por el navegador');
    } 
    // Si el video está reproduciéndose
    else if (videoElement.paused == false & window.getComputedStyle(videoElement).display != 'none') {
        videoElement.pause();
        audioElement.pause();
        videoElement.style.display = 'none';
        startStarGeneration();
        audioElement2.play();
        console.log('Se generan estrellas por video parado');
    }
    // Caso 3: Si el video está oculto (display: none), ocultar el contenedor
    else if (window.getComputedStyle(videoElement).display == 'none') {
        audioElement2.pause();
        container.style.display = 'none';  // Ocultar el contenedor de estrellas
        console.log('Video desaparecido y desaparece el gameStart');
    }
}

// Agregar el evento de clic en el botón "A"
btnA.addEventListener('click', handleBtnAClick);

videoElement.addEventListener('ended', function() {
    // El video ha terminado
    videoElement.style.display = 'none';  // Ocultar el video
    startStarGeneration();  // Iniciar la generación de estrellas
    audioElement2.play();
    console.log('Se generan estrellas por video terminado');
});
