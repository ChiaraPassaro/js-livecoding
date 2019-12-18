// Quanti minuti mancano alla fine dell’ora?

// quanti minuti compongono un'ora
var minuti = 60;

// quanti minuti abbiamo in questo momento
var data = new Date();
var minutiPassati = data.getMinutes();
console.log(minutiPassati);

// minuti che compongono l'ora - i minuti passati
var minutiMancanti = minuti - minutiPassati;
console.log(minutiMancanti);

if (minutiMancanti < 30) {
  alert("l'offerta è finita");
}
