//Gioco del campo minato
var array_mine = [];
var totale_numeri = 16;
var range_min = 1;
var range_max = 0;
var contatore = -1;
//scelta difficolta e controllo
var difficolta = parseInt(prompt('Inserisci una difficoltà da 0 a 2'));

if (difficolta == 0) {
    range_max = 100;
    console.log('Hai scelto facile');
}
else if (difficolta == 1) {
    range_max = 80;
    console.log('Hai scelto normale');
}
else if (difficolta == 2) {
    range_max = 50;
    console.log('Hai scelto difficile');
}
//funzione numero casuale
function random(min, max) {
    var numeroComputer = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroComputer;
}
//funzione riempimento array mine
function numeriMine(mine, totale) {
    for (var i = 0; i < totale; i++) {
        var numero_generato = random(range_min, range_max);
        mine[i] = numero_generato;
    }
    return mine;
}
//memorizzo risultato funzione
var mine_totali = numeriMine(array_mine, totale_numeri);
//do while per il colntrollo del numero dell utente
do {
    contatore++;
    var numero_utente = parseInt(prompt('Inserisci un numero da 1 a 100'));

    console.log('Hai inserito il numero: ' + numero_utente);

    for (var i = 0; i < mine_totali.length; i++) {
        if (numero_utente == mine_totali[i]) {
            var mina_trovata = true;
        }
    }

} while (mina_trovata != true && contatore < (range_max - totale_numeri));
//stampa punteggio
if (mina_trovata) {
    console.log('Hai perso');
    console.log('Il tuo punteggio è di: ' + contatore);
}
else {
    console.log('Complimenti, sei riuscito ad evitare tutte le mine');
}
