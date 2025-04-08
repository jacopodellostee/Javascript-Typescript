/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Use of a Nested 'for' loop in JavaScript
 *
 * this file create a nested for loop to calculate 
 * the  moltiplication table of the first 10 number
 *  and print the result on the console
 */


let result;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // store the r esult in a variable 
        result = i * j;
        // print the result
        console.log("" + i + " * " + j + " = " + result);
    }
}