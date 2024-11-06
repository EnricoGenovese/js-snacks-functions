/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function nameInitial(array) {
    let charZero = [];
    for(let i = 0; i < array.length; i++) {
        charZero.push(array[i].charAt(0));
    }
    return charZero;
}

// Invoca la funzione qui e stampa il risultato in console

const fistLetter = nameInitial(names);
console.log(fistLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]