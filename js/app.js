const griglia = document.querySelector('.griglia');
const colonneGriglia = 10;
const numeroCelle = colonneGriglia ** 2;
const bottone = document.querySelector('.bottone');


bottone.addEventListener('click', function() {

    // resettare la griglia
    griglia.innerHTML = '';

    for(let i=0; i<numeroCelle; i++) {
        let cella = getCellaElement();
        cella.innerHTML = i+1;
        cella.addEventListener('click', getColourLightBlue);
        griglia.append(cella);
    }

}); 


function getColourLightBlue(clickEvent) {
    const cella = this;
    cella.classList.add('light-blue');
    console.log(cella.innerHTML)
    return cella
}

function getCellaElement() {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}
