/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This file performs various mathematical operations—squaring a number,
 * halving it, calculating percentage, and computing the area of a circle—
 * and displays the result in the DOM based on user input.
 */

/**
 * Output element for displaying results.
 * @type {HTMLElement}
 */
let solution = document.getElementById("solution");

/**
 * Calculates the square of a number.
 *
 * @param {number} number - The number to square.
 * @returns {string} A string with the result of the operation.
 */
function squareNumber(number) {
    let power = number * number;

    return `The result of squaring the number ${number} is ${power} `;
}

/**
 * Calculates half of a number.
 *
 * @param {number} number - The number to halve.
 * @returns {string} A string with the result of the operation.
 */
function halfNumber(number) {
    let half = number / 2;

    return `Half of number ${number} is ${half}`;
}

/**
 * Calculates the percentage of one number relative to another.
 *
 * @param {number} firstNumber - The part value.
 * @param {number} secondNumber - The whole value.
 * @returns {string} A string describing the percentage.
 */
function percentOf(firstNumber, secondNumber) {
    let percentage = firstNumber * 100 / secondNumber;

    return `${firstNumber} is ${percentage}% of ${secondNumber}`;
}

/**
 * Calculates the area of a circle using the formula A = π * r^2.
 *
 * @param {number} radius - The radius of the circle.
 * @returns {string} A string with the computed area.
 */
function areaOfCircle(radius) {
    let area = radius * radius * Math.PI;

    return `The area for a circle with radius ${radius} is ${area.toFixed(2)}`;
}

/**
 * Executes a given function with the provided number and displays the result.
 *
 * @param {function} func - The function to execute.
 * @param {number} number - The input number.
 * @returns {void}
 */
function executeFunction(func, number) {
    solution.textContent = func(number);
}

/**
 * Input element for square calculation.
 * @type {HTMLElement}
 */
let squareNumberInput = document.getElementById("square-input");

// Event listener for squaring a number
squareNumberInput.addEventListener('keypress', () => {
    let value = Number(document.getElementById("square-input").value);

    executeFunction(squareNumber, value);
});

/**
 * Input element for halving a number.
 * @type {HTMLElement}
 */
let halfNumberInput = document.getElementById("half-input");

// Event listener for halving a number
halfNumberInput.addEventListener('keypress', () => {
    let value = Number(document.getElementById("half-input").value);

    executeFunction(halfNumber, value);
});

/**
 * Input element for the first number in percentage calculation.
 * @type {HTMLElement}
 */
let percentFirstInput = document.getElementById("percent-first-input");

/**
 * Input element for the second number in percentage calculation.
 * @type {HTMLElement}
 */
let percentSecondInput = document.getElementById("percent-second-input");

/**
 * Handles Enter keypress on percentage inputs and displays the result.
 *
 * @param {KeyboardEvent} e - The keyboard event object.
 * @returns {void}
 */
function handlePercentKeypress(e) {
    if (e.key === "Enter") {
        let val1 = Number(percentFirstInput.value);

        let val2 = Number(percentSecondInput.value);

        solution.textContent = percentOf(val1, val2);
    }
}

// Event listener for calculating the percentage of two number
percentFirstInput.addEventListener('keypress', handlePercentKeypress);

percentSecondInput.addEventListener('keypress', handlePercentKeypress);

/**
 * Input element for circle area calculation.
 * @type {HTMLElement}
 */
let areaCircleInput = document.getElementById("area-input");

// Event listener for calculating area of a circle
areaCircleInput.addEventListener('keypress', () => {
    let value = Number(document.getElementById("area-input").value);
    executeFunction(areaOfCircle, value);
});
