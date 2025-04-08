/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Solution 1 
 *
 * this file replace the 4th character of the string "Abracadabra" with an "X"
 * This is the first solution
 *  
 */

const str = "Abracadabra";

const arr = str.split(""); 

arr[3] = "X"; 

const newStr = arr.join(""); 

console.log(newStr);
