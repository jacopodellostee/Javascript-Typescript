/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Solution 2 
 *
 * this file replace the 4th character of the string "Abracadabra" with an "X"
 * This is the second solution
 *  
 */

const str = "Abracadabra";

const newStr = str.substring(0, 3) + "X" + str.substring(4);

console.log(newStr); 