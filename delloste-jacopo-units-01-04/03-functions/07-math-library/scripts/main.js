/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Math Library
 *
 * this file create 4 function that do simple mathematical operation 
 * and print the result on the console
 */


/**
 * print the square of the number selected
 * @param {number} number - a number
 * @returns {void}
 */
function squareNumber(number) {
    let power = number * number;
    console.log("The result of squaring the number " + number + " is " + power); 
}

/**
 * print the half of the number selected
 * @param {number} number - a number
 * @returns {void}
 */
function halfNumber(number) {
    let half = number / 2;
    console.log("Half of " + number +  " is " + half);
}

/**
 * print the percentage of firstNumber in secondNumber
 * es. firstNumber = 2, secondNumber = 4 => 2 is 50% of 4
 * @param {number} firstNumber - the first number
 * @param {number} secondNumber - the second number 
 * @returns {void}
 */

function percentOf(firstNumber, secondNumber) {
    let percentage = firstNumber * 100 / secondNumber;
    console.log(firstNumber + " is " + percentage + "% of " + secondNumber);
}


/**
 * print the area of a circus with the selected radius
 * @param {number} radius - a radius of a circumferences
 * @returns {void}
 */
function areaOfCircle (radius) {
    let area = 2 * radius * Math.PI;
    console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2));
}

squareNumber(2);
halfNumber(2);
percentOf(3, 4);
areaOfCircle(3);