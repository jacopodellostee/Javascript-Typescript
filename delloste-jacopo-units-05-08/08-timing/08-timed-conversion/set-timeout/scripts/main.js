/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Timed conversion
 *
 * this file create a function that convert
 * a celcius temperature in fahrenheit and print the result
 * of the first 100 number every second using setTimeout
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


for (let i = 0; i <= 100; i++) {
    setTimeout(celsiusToFahrenheit, i * 1000, i);
}