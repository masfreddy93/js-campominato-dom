const griglia = document.querySelector('.griglia');
const colonneGriglia = 10;
const numeroCelle = colonneGriglia ** 2;
const bottone = document.querySelector('.bottone');

let arrayBombe = [];
let punteggio = 0;
let gameOverBoolean = false;

bottone.addEventListener('click', function() {

    resetGame(griglia);

    //invocare function generaBombe in nostro arrayBombe
    arrayBombe = generaBombe(numeroCelle);

    for(let i=0; i<numeroCelle; i++) {
        let cella = getCellaElement();
        cella.innerHTML = i+1;
        cella.addEventListener('click', getColourLightBlue);
        griglia.append(cella);
    }
}); 

//FUNCTIONS

function generaBombe(max){
    const bombe = [];
    while(bombe.length < 16){
        const n = getRandomIntInclusive(1,max);
        //se il numero non è presente nell'array bombe
        if(!bombe.includes(n)){
            bombe.push(n);
        }
    }
    console.log('Bombe: ' + bombe);
    return bombe;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getColourLightBlue(clickEvent) {
    if(gameOverBoolean === false){
        const cella = this;
        // console.log('this ', this)
        cella.classList.add('light-blue');
        const numeroCella = parseInt(this.innerHTML);
        console.log('Numero scelto: ' + numeroCella)

        if(arrayBombe.includes(numeroCella) === true){
            cella.classList.add('red')
            gameOver();
            gameOverBoolean = true;
        }else{
            punteggio++;
            console.log('Punteggio parziale: ' + punteggio)
            // console.log('Game over: ', gameOverBoolean);
            if(punteggio === 87) {
                gameWon(); 
                gameOver = true;
            } 
        }
    }
}

function gameOver() {
    document.querySelector('.punteggio-finale').innerHTML += `Mi dispiace, hai perso. Il tuo punteggio è: ${punteggio} `;
}

function gameWon() {
    document.querySelector('.punteggio-finale').innerHTML += `GRANDE! Hai vinto. Il tuo punteggio è: ${punteggio} `; 
}

function resetGame (variable){
    variable.innerHTML = '';
    punteggio = 0;
    gameOverBoolean = false;
    document.querySelector('.punteggio-finale').innerHTML = '';
}

function getCellaElement() {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}

