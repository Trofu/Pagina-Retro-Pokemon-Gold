const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnr = document.getElementById('btnr');
const btnl = document.getElementById('btnl');
const btnu = document.getElementById('btnu');
const btnd = document.getElementById('btnd');

const videoElement = document.getElementById('video');
const audioElement = document.getElementById('audio');
const audioElement2 = document.getElementById('audioTitulo');

const introCont = document.querySelector('.gameStart'); 
const battleCont = document.querySelector('.gameBattle');
const pokDo = document.querySelector('.pokDo');

const do1 = document.querySelector('.do1');
const do2 = document.querySelector('.do2');
const do3 = document.querySelector('.do3');
const do4 = document.querySelector('.do4');
const attack = document.querySelector('.attack');

let starInterval;
let intro = true;
let battle = false;
let action = false;

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
    const center = getCenter(introCont);
    const star = document.createElement('div');
    star.classList.add('HoHoStars');
    const randomTop = getRandomTopValue(-40, 40);
    star.style.marginTop = `${randomTop}px`;
    introCont.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 4000);
}

function startStarGeneration() {
    starInterval = setInterval(createStar, 300);
}

btnA.addEventListener('click', handleBtnAClick);
btnB.addEventListener('click', handleBtnBClick);

btnr.addEventListener('click', () => doingPokemon('der'));
btnl.addEventListener('click', () => doingPokemon('izq'));
btnu.addEventListener('click', () => doingPokemon('up'));
btnd.addEventListener('click', () => doingPokemon('down'));


function doingPokemon(texto) {
    if (texto == 'der') {
        if (window.getComputedStyle(do1).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'block';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (window.getComputedStyle(do3).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'block';
        }
    } else if (texto == 'izq') {
        if (window.getComputedStyle(do2).display == 'block') {
            do1.style.display = 'block';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (window.getComputedStyle(do4).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'block';
            do4.style.display = 'none';
        }
    } else if (texto == 'up') {
        if (window.getComputedStyle(do3).display == 'block') {
            do1.style.display = 'block';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (window.getComputedStyle(do4).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'block';
            do3.style.display = 'none';
            do4.style.display = 'none';
        }
    } else if (texto == 'down') {
        if (window.getComputedStyle(do1).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'block';
            do4.style.display = 'none';
        } else if (window.getComputedStyle(do2).display == 'block') {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'block';
        }
    }
}



// Función que maneja el clic del botón "A"
function handleBtnAClick() {
    if(intro){
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
            introCont.style.display = 'none';  // Ocultar el contenedor de estrellas
            console.log('Video desaparecido y desaparece el gameStart');
            clearInterval(starInterval);
            intro = false;
            battle = true;
        }
    }else if (battle){
        if(window.getComputedStyle(battleCont).display == 'none'){
            battleCont.style.display = 'block';
            console.log("Se muestra el inicio de la batalla");
        }else if(window.getComputedStyle(battleCont).display == 'block' && !action){
            pokDo.style.display = 'block';
            do1.style.display = 'block';
            console.log("Se empieza a ver que tienen que hacer los pokemons");
            action = true;
        }else if(action){
            if(window.getComputedStyle(do1).display == 'block'){
                do1.style.display = 'none';
                attack.style.display = 'block';
            }
        }
    }
}

function handleBtnBClick() {
    if(window.getComputedStyle(attack).display == 'block'){
        attack.style.display = 'none';
        do1.style.display = 'block';
    }
}

videoElement.addEventListener('ended', function() {
    // El video ha terminado
    videoElement.style.display = 'none';  
    startStarGeneration();  
    audioElement2.play();
    console.log('Se generan estrellas por video terminado');
});