/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Print Reverse
 *
 * this file contain one function called 'printReverse' that takes
 * one string in input and print the string reversed on the console 
 *  
 */

/**
 * print the reversed the string 
 * @param {string} str - the string selected
 * @returns {void}
 */
function printReverse(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }

    console.log(newString);
}

printReverse("foobar");