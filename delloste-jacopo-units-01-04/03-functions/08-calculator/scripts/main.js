/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Calculator
 *
 * create a function that use the 4 function created 
 * in the last exercise invoking all of the on a single number
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

/**
 * invoke the functions above on a single number
 * for 'percentefOf' the secondNumber is the square of the number selected
 * @param {number} number - a number
 * @returns {void}
 */
function calculator(number) {
    halfNumber(number);
    squareNumber(number);
    areaOfCircle(number);
    percentOf(number, Math.pow(number, 2));
}

calculator(12);