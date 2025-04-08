/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Timed Calculator
 *
 * create a function that use the 4 function created 
 * in the exercise 'Math Library' invoking all of them 
 * with 3 seconds of delay between them 
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
 * invoke all the function created above with a 3 seconds delay between them
 * @param {any} number
 * @returns {any}
 */
function timedCalculator(number) {
    
    setTimeout(halfNumber, 3000, number);

    setTimeout(squareNumber, 6000, number);

    setTimeout(areaOfCircle, 9000, number);

    setTimeout(percentOf, 12000, number, Math.pow(number, 2));

}

timedCalculator(4);
