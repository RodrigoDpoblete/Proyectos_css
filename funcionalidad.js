//Selectores tomar la cabeza de los conejos.
const head1 = document.querySelector('.head');
const head2 = document.querySelector('.head2');
const head3 = document.querySelector('.head3');
const head4 = document.querySelector('.head4');
//Selectores para modificar la dificultad.
const layer = document.querySelector('.layer-1');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-4');
const layer4 = document.querySelector('.layer-6');
//Selectores puntos y tiempo.
const tiempo = document.querySelector('h5');
const puntos = document.querySelector('p');
//Contadores. 
let contador = 0;
let resultado = 0;

head1.addEventListener('click', () => {
    contador = contador + 1;
    puntos.innerHTML = contador;
    resultado = contador;
    PowerUpRabbits(resultado)
});

head2.addEventListener('click', () => {
    contador = contador + 1;
    puntos.innerHTML = contador;
    resultado = contador;
    PowerUpRabbits(resultado)
});

head3.addEventListener('click', () => {
    contador = contador + 1;
    puntos.innerHTML = contador;
    resultado = contador;
    PowerUpRabbits(resultado)
})

head4.addEventListener('click', () => {
    contador = contador + 1;
    puntos.innerHTML = contador;
    resultado = contador; 
    PowerUpRabbits(resultado)
})



const PowerUpRabbits = (contador) => {
    if(contador >= 10) {
        layer.className = 'custom';
        layer2.className = 'custom2';
        layer3.className = 'custom3';
        layer4.className = 'custom4';
    }
}

const AumentarDificultad = () => {
    PowerUpRabbits(resultado);
    if(contador === 0) {
        resultado = 0;
    }
}

const reset = (class1, class2, classs3) => {
    //reestablece las clases:
    layer.className = 'layer-1'; 
    layer2.className = 'layer-2';
    layer3.className = 'layer-4';
    layer4.className = 'layer-6';
} 

//setInterval(() => {
//    puntos.innerHTML = '';
//    alert(`fin del juego tu puntuación es: ${contador}`);
//    contador = 0;
//}, 15000)

const UpdateCountdown = () => {
    Countdown()
}

let time = 60;

const Countdown = setInterval(() => {
    time = time - 1;
    tiempo.innerHTML = time;
    if(time === 0) {
        time = 60;
        puntos.innerHTML = 0;
        reset(layer, layer2, layer3, layer4);
        alert(`fin del juego tu puntuación es: ${contador}`)
        contador = 0;
    }
}, 1000);






