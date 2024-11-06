/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


function printVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"];         // i caratteri che, se trovati, fanno salire il contatore
    let vowelsNumb = 0;                             // varaibile di accumulo
    //
    for(let i = 0; i <= string.length; i++) {       // ciclo per per leggere tutti i caratteri nella stringa
        //
        if(vowels.indexOf(string[i]) !== -1) {      // se si trova una corrispondenza tra un elemento di  
                                                    // 'vowels' e un l'index ciclato della stringa
            vowelsNumb += 1;                        // il contatore sale di uno
        }
    }
    return vowelsNumb;
}


// Invoca la funzione qui e stampa il risultato in console

const vowelsJS = printVowels(word);
console.log(vowelsJS);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)