/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Calculate Age
 *
 * calculate your age based on your year of birth and the current year
 * wheatever you celebrated your birthday or not and print the results on the console
 */


let birthYear = 2005;

let currentYear = 2025;

// your age if you celebrated your birthday in the current year
let possibleAge1 = currentYear - birthYear;
// your age if you DIDN'T celebrated your birthday in the current year
let possibleAge2 = possibleAge1 - 1;

console.log("I will be either " + possibleAge2 + " or " + possibleAge1 + " in " + currentYear);

