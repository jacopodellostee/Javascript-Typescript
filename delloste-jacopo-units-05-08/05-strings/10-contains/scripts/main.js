/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Contains
 *
 * this file contain 1 function called 'aContainsb' 
 *  that return if the string 'a' contain the substring 'b'
 */

/**
 * return if a contains b
 * @param {string} a - the string 
 * @param {string} b - the substring
 * @returns {boolean}
 */
function aContainsb(a, b) {
    return a.includes(b);
}

console.log(aContainsb("Hello World", "Hello"));
console.log(aContainsb("Hello World", "Ciao"));