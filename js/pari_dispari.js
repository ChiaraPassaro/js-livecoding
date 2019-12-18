// chiediamo all'utente se sceglie pari o pari_dispari
var pariDispari  = prompt('Scegli pari o dispari');
console.log(pariDispari);

//chiedere un numero che va da 1 a 9
var numGiocatore  = parseInt(prompt('Inserisci un numero che va da 1 a 9'));
// var numGiocatore = 2;
console.log(numGiocatore);

// generiamo un numero random da 1 a 9
var numPC = Math.floor(Math.random() * 9) + 1;
console.log(numPC);

// sommiamo i due valori
var somma = numGiocatore + numPC;

console.log(somma);
var sommaPariDispari = somma % 2;
console.log(sommaPariDispari);

// controlliamo se la somma è pari o pari_dispari
if (sommaPariDispari == 0) {
  console.log('pari');
  var risultatoPariDispari = 'pari';
} else {
  var risultatoPariDispari = 'dispari';
}


// se il giocatore ha scelto pari e la somma è pari ha vinto
if (pariDispari == risultatoPariDispari) {
  alert('hai vinto');
} else {
  alert('hai perso');
}
// se ha scelto dispari ed è dispari ha vinto
// se ha scelto pari ed è dispari ha perso
// se ha scelto dispari ed è pari ha perso
