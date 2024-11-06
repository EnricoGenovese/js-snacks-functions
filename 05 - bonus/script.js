/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function timeGreeting(string) {
    let date = new Date();
    if(date.getHours() >= 6 && date.getHours() < 13) {
        console.log("Buongiono " + string);
    } else if (date.getHours() >= 13 && date.getHours() < 17) {
        console.log("Buon pomeriggio " + string)
    } else if(date.getHours() > 17 && date.getHours() < 23) {
        console.log("Buonasera " + string);
    } else if (date.getHours() < 6) {
        console.log("Buonanotte" + string);
    }
}

timeGreeting(name);

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.