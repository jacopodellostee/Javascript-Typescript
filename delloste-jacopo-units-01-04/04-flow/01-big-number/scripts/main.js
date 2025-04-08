/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'greaterNum'
 *
 * this file create a function called 'greaterNum' that takes 
 * in input two number and returns the greater one
 *  
 */

/**
 * return the grater number of the 2 argument of the function 
 * @param {number} firstNumber - the first number in input 
 * @param {number} secondNumber -  the second number in input
 * @returns {number} - the higher number
 */
function greaterNum(firstNumber, secondNumber) {
    if(firstNumber > secondNumber) 
        return firstNumber;
    else
        return secondNumber;
}

/**
 * print the result of the function 'greaterNum' on the console in a complete sentence
 * @param {number} firstNumber - the first number in input 
 * @param {number} secondNumber -  the second number in input
 * @returns {void}
 */
function printResult(firstNumber, secondNumber) {
    console.log("The greater number of " + firstNumber + " and " + secondNumber + " is " + greaterNum(firstNumber, secondNumber));
}

printResult(6, 12);
printResult(18, 7);