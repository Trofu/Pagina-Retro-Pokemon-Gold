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
const attack1 = document.querySelector('.attack1');
const attack2 = document.querySelector('.attack2');
const attack3 = document.querySelector('.attack3');
const attack4 = document.querySelector('.attack4');
const useattack1 = document.querySelector('.useAttack1');
const useattack2 = document.querySelector('.useAttack2');
const useattack3 = document.querySelector('.useAttack3');
const useattack4 = document.querySelector('.useAttack4');
const typeAttack = document.querySelector('.AttackFight');

let starInterval;
let intro = true;
let battle = false;
let action = false;
let attack = false;

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

function checkBlock(item){
    return window.getComputedStyle(item).display == 'block';
}
function checkNone(item){
    return window.getComputedStyle(item).display == 'none';
}

function doingPokemon(texto) {
    if (texto == 'der') {
        if (checkBlock(do1)) {
            do1.style.display = 'none';
            do2.style.display = 'block';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (checkBlock(do2)) {
            do1.style.display = 'block';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (checkBlock(do3)) {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'block';
        } else if (checkBlock(do4)) {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'block';
            do4.style.display = 'none';
        }
    } else if (texto == 'izq') {
        if (checkBlock(do1)) {
            do1.style.display = 'none';
            do2.style.display = 'block';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (checkBlock(do2)) {
            do1.style.display = 'block';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'none';
        } else if (checkBlock(do3)) {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'none';
            do4.style.display = 'block';
        } else if (checkBlock(do4)) {
            do1.style.display = 'none';
            do2.style.display = 'none';
            do3.style.display = 'block';
            do4.style.display = 'none';
        }
    } else if (texto == 'up') {
        if (attack) {
            if (checkBlock(attack1)) {
                attack1.style.display = 'none';
                attack2.style.display = 'none';
                attack3.style.display = 'none';
                attack4.style.display = 'block';
            } else if (checkBlock(attack2)) {
                attack1.style.display = 'block';
                attack2.style.display = 'none';
                attack3.style.display = 'none';
                attack4.style.display = 'none';
            } else if (checkBlock(attack3)) {
                attack1.style.display = 'none';
                attack2.style.display = 'block';
                attack3.style.display = 'none';
                attack4.style.display = 'none';
            } else if (checkBlock(attack4)) {
                attack1.style.display = 'none';
                attack2.style.display = 'none';
                attack3.style.display = 'block';
                attack4.style.display = 'none';
            }
        } else {
            if (checkBlock(do1)) {
                do1.style.display = 'none';
                do2.style.display = 'none';
                do3.style.display = 'block';
                do4.style.display = 'none';
            } else if (checkBlock(do2)) {
                do1.style.display = 'none';
                do2.style.display = 'none';
                do3.style.display = 'none';
                do4.style.display = 'block';
            } else if (checkBlock(do3)) {
                do1.style.display = 'block';
                do2.style.display = 'none';
                do3.style.display = 'none';
                do4.style.display = 'none';
            } else if (checkBlock(do4)) {
                do1.style.display = 'none';
                do2.style.display = 'block';
                do3.style.display = 'none';
                do4.style.display = 'none';
            }
        }
    } else if (texto == 'down') {
        if (attack) {
            if (checkBlock(attack1)) {
                attack1.style.display = 'none';
                attack2.style.display = 'block';
                attack3.style.display = 'none';
                attack4.style.display = 'none';
            } else if (checkBlock(attack2)) {
                attack1.style.display = 'none';
                attack2.style.display = 'none';
                attack3.style.display = 'block';
                attack4.style.display = 'none';
            } else if (checkBlock(attack3)) {
                attack1.style.display = 'none';
                attack2.style.display = 'none';
                attack3.style.display = 'none';
                attack4.style.display = 'block';
            } else if (checkBlock(attack4)) {
                attack1.style.display = 'block';
                attack2.style.display = 'none';
                attack3.style.display = 'none';
                attack4.style.display = 'none';
            }
        } else {
            if (checkBlock(do1)) {
                do1.style.display = 'none';
                do2.style.display = 'none';
                do3.style.display = 'block';
                do4.style.display = 'none';
            } else if (checkBlock(do2)) {
                do1.style.display = 'none';
                do2.style.display = 'none';
                do3.style.display = 'none';
                do4.style.display = 'block';
            } else if (checkBlock(do3)) {
                do1.style.display = 'block';
                do2.style.display = 'none';
                do3.style.display = 'none';
                do4.style.display = 'none';
            } else if (checkBlock(do4)) {
                do1.style.display = 'none';
                do2.style.display = 'block';
                do3.style.display = 'none';
                do4.style.display = 'none';
            }
        }
    }
}


// Función que maneja el clic del botón "A"
function handleBtnAClick() {
    if (intro) {
        // Si el video está pausado
        if (videoElement.paused && !checkNone(videoElement)) {
            videoElement.play();
            audioElement.play();
            console.log('Se inicia el video por que se para por el navegador');
        }
        // Si el video está reproduciéndose
        else if (!videoElement.paused && !checkNone(videoElement)) {
            videoElement.pause();
            audioElement.pause();
            videoElement.style.display = 'none';
            startStarGeneration();
            audioElement2.play();
            console.log('Se generan estrellas por video parado');
        }
        // Caso 3: Si el video está oculto (display: none), ocultar el contenedor
        else if (checkNone(videoElement)) {
            audioElement2.pause();
            introCont.style.display = 'none';  // Ocultar el contenedor de estrellas
            console.log('Video desaparecido y desaparece el gameStart');
            clearInterval(starInterval);
            intro = false;
            battle = true;
        }
    } else if (battle) {
        if (checkNone(battleCont)) {
            battleCont.style.display = 'block';
            console.log("Se muestra el inicio de la batalla");
        } else if (checkBlock(battleCont) && !action) {
            pokDo.style.display = 'block';
            do1.style.display = 'block';
            console.log("Se empieza a ver que tienen que hacer los pokemons");
            action = true;
        } else if (action) {
            if (checkBlock(do1)) {
                do1.style.display = 'none';
                attack1.style.display = 'block';
                attack=true;
            }else if(attack){
                if(checkBlock(attack1)){
                    useattack1.style.display = 'block';
                    attack1.style.display = 'none';
                    attack=false;
                }else if(checkBlock(attack2)){
                    useattack2.style.display = 'block';
                    attack2.style.display = 'none';
                    attack=false;
                }else if(checkBlock(attack3)){
                    useattack3.style.display = 'block';
                    attack3.style.display = 'none';
                    typeAttack.style.display = 'block';
                    attack=false;
                }else if(checkBlock(attack4)){
                    useattack4.style.display = 'block';
                    attack4.style.display = 'none';
                    attack=false;
                }
            }else if([useattack1,useattack2,useattack3,useattack4].some(checkBlock)){
                useattack1.style.display = 'none';
                useattack2.style.display = 'none';
                useattack3.style.display = 'none';
                useattack4.style.display = 'none';
                typeAttack.style.display = 'none';
                do1.style.display = 'block';
            }
        }
    }
}

function handleBtnBClick() {
    if (checkBlock(attack1) || checkBlock(attack2) || checkBlock(attack3) || checkBlock(attack4)) {
        attack1.style.display = 'none';
        attack2.style.display = 'none';
        attack3.style.display = 'none';
        attack4.style.display = 'none';
        do1.style.display = 'block';
        attack=false;
    }
}

videoElement.addEventListener('ended', function () {
    // El video ha terminado
    videoElement.style.display = 'none';
    startStarGeneration();
    audioElement2.play();
    console.log('Se generan estrellas por video terminado');
});
