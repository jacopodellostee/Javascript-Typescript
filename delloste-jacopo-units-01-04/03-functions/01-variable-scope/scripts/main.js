/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Block Scoop, how does it work?
 *
 * this file explain how the scoop of the construsct 'let' works
 * 'let' is block-scooped, so the variable 
 * only exist inside closer block of code -> {} 
 * outside of the bracket, the variable doesn't exist (it's not defined)
 *  
 */

//global variable
let number; 

/**
 * return the sum of firstNumber and secondNumbers
 * @param {number} firstNumber - the first number in input 
 * @param {number} secondNumber - the second number in input
 * @returns {number} - the sum of firstNumber and secondNumber
 */
function addNumbers(firstNumber, secondNumber){
    // local variable
    let result = firstNumber + secondNumber 
    return result;
}

number = addNumbers(2, 2);

// print the result
console.log(number); 

// generte an error
console.log(result);