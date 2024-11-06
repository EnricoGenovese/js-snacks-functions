/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


function printVowels(string) {  // i caratteri che, se trovati, fanno salire il contatore
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];         
    let vowelsNumb = 0;
    let vowelsFound = []                             // varaibile di accumulo
    //
    for(let i = 0; i < string.length; i++) {       // ciclo per per leggere tutti i caratteri nella stringa
        //
        if(vowels.includes(string[i])) {            // se si trova una corrispondenza tra un elemento di  
            vowelsFound.push(string[i]);                                       // 'vowels' e un l'index ciclato della stringa
            vowelsNumb += 1;                        // il contatore sale di uno
        }
    }
    return vowelsNumb
}

const countArrow = (string) => {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let vowelsNumb = 0;
    let vowelsFound = [] 
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            vowelsFound.push(string[i]);
            vowelsNumb += 1;  
        }              
    }
    return vowelsNumb; 
}
// Invoca la funzione qui e stampa il risultato in console

const vowelsJS = printVowels(word);
console.log(countArrow(word));
console.log(vowelsJS);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)