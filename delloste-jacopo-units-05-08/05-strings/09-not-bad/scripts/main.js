/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Not Bad
 *
 * this file contain 1 function called 'notBad' that take 1 strings in input 
 * with a statement that something is not bad return the string saying that
 * something is good (if something is not bad, its means it's good)
 *  
 */

/**
 * convert something that is not bad in good (not bad = good)
 * @param {string} string - the string in input
 * @returns {string} - the string modified
 */
function notBad (string) {

    if(string.includes("not") && string.includes("bad")) {
        let indexOfNot = string.indexOf("not");
        let indexOfBad = string.indexOf("bad");

        if (indexOfNot < indexOfBad) {
            // Prende la parte prima di "not" + "good" + parte dopo "bad"
            string = string.slice(0, indexOfNot) + "good" + string.slice(indexOfBad + 3);
        }
    }
    return string;
}

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));