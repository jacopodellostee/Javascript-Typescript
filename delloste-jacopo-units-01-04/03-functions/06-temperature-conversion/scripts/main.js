/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Temperature Convertitor
 *
 * this file create the two function that convert
 * a celcius temperature in fahrenheit and vice versa 
 * printing the result on the console
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

/**
 * convert a fahrenheit temperature in celcius
 * @param {number} fahrenheit - the temperature express in fahrenheit
 * @returns {void}
 */
function fahrenheitToCelsius (fahrenheit) {
    let celcius = (fahrenheit - 32) * 9/5;
    console.log(fahrenheit + "°F is " + celcius + "°C");
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);