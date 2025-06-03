/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script extends the native String prototype with a custom method called `dogSpeak`,
 * which appends a barking sound to any string. It demonstrates the use of prototype
 * extension and string manipulation.
 */

/**
 * Appends a barking sound ("Woof!") to the original string.
 *
 * @function dogSpeak
 * @memberof String.prototype
 * @returns {string} The modified string with "Woof!" appended.
 *
 * @example
 * "Hello ".dogSpeak(); // returns "Hello Woof!"
 */
String.prototype.dogSpeak = function() {
    return this.toString() + "Woof!";
};

let s = "My dog always say ".dogSpeak();

console.log(s);

console.log('Dogs are smart '.dogSpeak());
