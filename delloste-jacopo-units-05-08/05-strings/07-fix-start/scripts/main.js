/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * FixStart
 *
 * this file contain 1 function called 'fixStart' that 
 * with a string in input replace all the occurency of the first 
 * character with '*' 
 *  
 */

/**
 * return the string with the characters replaced
 * @param {string} str - a string
 * @returns {string} the modified string
 */
function fixStart(str) {

    let firstChar, newString = "";

    firstChar = str.charAt(0); 

    newString = str.slice(1).replaceAll(firstChar, "*"); 

    return firstChar + newString; 
}

console.log(fixStart("babble"));
