const griglia = document.querySelector('.griglia');
const colonneGriglia = 10;
const numeroCelle = colonneGriglia ** 2;
const bottone = document.querySelector('.bottone');

let arrayBombe = [];

let punteggio = 0;


bottone.addEventListener('click', function() {

    // resettare la griglia
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


//generare array di 16 numeri che saranno le nostre bombe
//costruire funzione
function generaBombe(max){
    const bombe = [];

    while(bombe.length < 16){
        const n = getRandomIntInclusive(1,max);

        //se il numero non è presente nell'array bome
        if(!bombe.includes(n)){
            bombe.push(n);
        }
    }
    console.log('Bombe: ' + bombe);
    return bombe;
    
}

//funzione random presa da mdn
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function getColourLightBlue(clickEvent) {
    const cella = this;
    cella.classList.add('light-blue');
    const numeroCella = parseInt(this.innerHTML);
    console.log('Numero scelto: ' + numeroCella)
    // console.log(arrayBombe.includes(numeroCella));

    //condizione per assegnare colore rosso quando il click avviene nella classe con la bomba
    if(arrayBombe.includes(numeroCella) === true){
        cella.classList.add('red')
        // console.log('sospendere partita')
        // resetGame(griglia);
        gameOver();
    }else{
        punteggio++;
        console.log('Punteggio parziale: ' + punteggio)
    }
    // return cella
}

//funzione per appendere al body il messaggio con il punteggio finale dell'utente
function gameOver() {
    document.body.innerHTML += `Il punteggio finale è: ${punteggio}`; 
}

//funzione per resettare il gioco
function resetGame (variable){
    variable.innerHTML = '';
    //reset punteggio
    punteggio = 0;
}

function getCellaElement() {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}
