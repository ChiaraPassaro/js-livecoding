  // Inserisci con due prompt l’età di due
  // persone (persona1, persona2) e
  // stampa a schermo il numero più
  // grande.

var etaPersonaUno = parseInt(prompt('inserisci la tua eta'));
console.log(etaPersonaUno);
var etaPersonaDue = parseInt(prompt('inserisci la tua eta'));
console.log(etaPersonaDue);

// console.log(etaPersonaUno === etaPersonaDue);
console.log(isNaN(etaPersonaUno));
if (isNaN(etaPersonaUno) || isNaN(etaPersonaDue)) {
  alert('non hai inserito un numero');
} else {
  if (etaPersonaUno > etaPersonaDue) {
    console.log(etaPersonaUno);
    // if (etaPersonaUno >= 18) {
    //   console.log('sei maggiorenne');
    // }
    // console.log('dopo secondo if');
  } else if (etaPersonaDue > etaPersonaUno){
    console.log(etaPersonaDue);
  } else {
    console.log('stessa eta');
  }
}

// var etaPersonaUno = 18;
// var etaPersonaDue = 18;


// controllo quale dei due numeri è più grande
//
// stampiamo

var miaVariabile = 'qualcosa';
console.log('mia variabile ' + miaVariabile);
console.log('mia variabile', miaVariabile);
