/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

function squareNumber(number) {
    let power = number * number;
    
    return `The result of squaring the number number is power `;
}

function halfNumber(number) {
    let half = number / 2;

    return `Half of number is half`;
}


function percentOf(firstNumber, secondNumber) {
    let percentage = firstNumber * 100 / secondNumber;
    return `firstNumber is percentage% of secondNumber`;
}

function areaOfCircle (radius) {
    let area = 2 * radius * Math.PI;
    return `The area for a circle with radius radius is area.toFixed(2)`;
}