/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterInitial(haystack, needle) {
    let newArray = [];
    for( let i = 0; i < haystack.length; i++) {
        if(haystack[i].charAt(0) === needle) {
            newArray.push(haystack[i]);
        }
    }
    return newArray; 
}

// Invoca la funzione qui e stampa il risultato in console

const onlyA = filterInitial(names, "A");
console.log(onlyA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]