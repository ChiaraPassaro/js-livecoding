// var miaVariabile;
// console.log(miaVariabile); // undefined
// var number = 7;
//
//
// miaVariabile = 2;
// console.log(miaVariabile); // 2
//
// miaVariabile = miaVariabile * 2;
// console.log(miaVariabile);
//
// var miaVariabileDue = miaVariabile = miaVariabileDue;
// console.log(miaVariabileDue);
//
// var testo = 'mio testo';
// var testoDue = '8';
// var num = 8;
// console.log(testoDue);
// console.log(num);
//
// var sum = '8' * 1;
// console.log(sum);
// //
// // var anni = prompt('inserisci i tui anni');
// //
// // var anniPars = parseInt(anni);
//
//
// var numberString = number.toString();
// console.log(number);
// console.log(numberString);
//
// var nome = prompt('Inserisci il tuo nome');
// console.log(nome);
// var cognome = prompt('Inserisci il tuo cognome');
// console.log(cognome);
// var colore = prompt('Inserisci il "tuo" l\' è colore preferito \n');
// console.log(colore);
//
// var numero = 19;
//
// console.log(nome + cognome + colore + 19);
// document.getElementById('password').innerHTML = nome + cognome + colore + 19;
//
// console.log( 3 !== *);
// console.log( 3 === '3');

// var x = 3;
// var y = 4;
//
// if ( x == 3 && x <= 3 ) { //1
//   alert('enntrambi uguali');
// }
// else if (x <= 3) { //2
//   alert('minore');
// }
// else { //ultima
//   alert('non sono uguali');
// }
//
// console.log('pippo');

// var parolaUno = prompt('Inserisci la prima parola');
// var parolaDue = prompt('Inserisci la seconda parola');
// // var parolaUno = 'pluto';
// // var parolaDue;
// // se la prima parola è più lunga allora scrivi ...
// if (parolaUno.length > parolaDue.length) {
//   alert('la prima parola è più lunga');
// }
// // se la seconda parola è più lunga allora scrivi un'altra cosa
// else if (parolaDue.length > parolaUno.length) {
//   alert('la seconda parola è più lunga');
// }
// // altrimenti sono uguali
// else {
//   alert('sono ugualio');
// }

// console.log(pluto);
// var pluto = 'pippo';

var data = new Date();
var ora = data.getHours() ;
var minuti = data.getMinutes();
console.log(ora + ':' + minuti);
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
var giorno = data.getDay();
console.log(giorno );
console.log(Math.floor(Math.random() * (10 - 1) ) + 1);
