/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Capital
 *
 * this file contain one function called 'capital' that 
 * with a string in input return the string with the first letter capitalized
 *  
 */

/**
 * capitalized the first letter of the string 
 * @param {string} str - the string in input 
 * @returns {string} - 'str' with the first letter capitalized
 */
function capital(str) {

    let newString = "";

    let firstletterUpped = str.charAt(0).toUpperCase();

    newString = firstletterUpped + str.slice(1);
    
    return newString;
}

console.log(capital("ciao"));

