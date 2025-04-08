/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Reverse
 *
 * this file contain one function called 'reverse' that takes
 * one string in input and return the string reversed
 *  
 */

/**
 * return the reversed string 
 * @param {string} str - the string selected
 * @returns {void}
 */
function reverse(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }

    return newString;
}

let wordReversed = reverse("foobar");

console.log(wordReversed);