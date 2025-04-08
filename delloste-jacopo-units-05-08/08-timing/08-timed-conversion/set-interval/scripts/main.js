/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Timed conversion
 *
 * this file create a function that convert
 * a celcius temperature in fahrenheit and print the result
 * of the first 100 number every second using setInterval
 */

/**
 * convert a celcius temperature in fahrenheit
 * @param {number} celcius - the temperature express in celcius
 * @returns {void}
 */
function celsiusToFahrenheit (celcius) {
    let fahrenheit = (celcius * 9/5) + 32;
    console.log(celcius + "°C is " + fahrenheit + "°F");
}

let i = 0;

/**
 * repeat the conversion every second for the first 100 number 
 * @returns {void}
 */
function printCelsiusToFahrenheit () {
    if (i <= 100) {
        celsiusToFahrenheit(i);
        i++;
    } else {
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(printCelsiusToFahrenheit, 1000);