/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Verbing 
 *
 * this file contain one function called 'verbing' where 
 * based on the verb in input return the verbal conjugation
 *  
 */

/**
 * return the verbal conjugation
 * @param {string} verb - the verb 
 * @returns {string}
 */
function verbing (verb) {

    if(verb.length < 3) 
        return verb;

    if ((verb.slice(verb.length - 3)) == "ing") 
        return verb + "ly";

    return verb + "ing";
}

console.log(verbing("walk"));
console.log(verbing("swimming"));
console.log(verbing("go"));