/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Abracadabra (Bonus)
 *
 * this file replace the 4th character of the string "Abracadabra" with an "X"
 * This is the bonus solution using regular expression
 *  
 */

const str = "Abracadabra"; 

const newStr = str.replace(/^(.{3})./, "$1X");

console.log(newStr);