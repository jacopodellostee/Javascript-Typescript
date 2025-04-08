/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Solution 13
 *
 * this file replace the 4th character of the string "Abracadabra" with an "X"
 * This is the third solution
 *  
 */

const str = "Abracadabra";

const newStr = `${str.slice(0, 3)}X${str.slice(4)}`;

console.log(newStr); 