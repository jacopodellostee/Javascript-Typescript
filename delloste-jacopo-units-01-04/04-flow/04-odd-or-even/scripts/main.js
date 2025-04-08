/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Calculate if a number is odd or even
 *
 * this file create a for loop for calcute if
 * the first 20  (including 0) number are odd (number NOT divisible by 2)
 * or even (number divisible by 2) and print the result on the console 
 */

for(let i = 0; i <= 20; i++) {
    // calculate the module of the current number (the module is the rest of the division, if it's 0 the number is divisible by 2) 
    if(i % 2 == 0)
        // print the result
        console.log(i + " is even.");
    else
        // print the result
        console.log(i + " is odd.");
}