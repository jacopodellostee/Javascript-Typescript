/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let solution = document.getElementById("solution");

function squareNumber(number) {
    
    let power = number * number;
    
    return `The result of squaring the number ${number} is ${power} `;
}

function halfNumber(number) {

    let half = number / 2;

    return `Half of number ${number} is ${half}`;
}

function percentOf(firstNumber, secondNumber) {

    let percentage = firstNumber * 100 / secondNumber;

    return `${firstNumber} is ${percentage}% of ${secondNumber}`;
}

function areaOfCircle (radius) {

    let area = 2 * radius * Math.PI;

    return `The area for a circle with radius ${radius} is ${area.toFixed(2)}`;

}

function executeFunction(func, number) {

    solution.textContent = func(number);
}

document.getElementById("square-button").addEventListener('click', () => {

    let value = Number(document.getElementById("square-input").value);

    executeFunction(squareNumber, value);
});

document.getElementById("half-button").addEventListener('click', () => {

    let value = Number(document.getElementById("half-input").value);

    executeFunction(halfNumber, value);
});

document.getElementById("percent-button").addEventListener('click', () => {

    let val1 = Number(document.getElementById("percent-first-input").value);

    let val2 = Number(document.getElementById("percent-second-input").value);

    solution.textContent = percentOf(val1, val2);
});

document.getElementById("area-button").addEventListener('click', () => {

    let value = Number(document.getElementById("area-input").value);

    executeFunction(areaOfCircle, value);
});