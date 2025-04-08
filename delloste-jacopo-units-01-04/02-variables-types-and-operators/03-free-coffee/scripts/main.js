/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Free Coffee
 *
 * calculate based on the values selected how many cup of of coffee a person will drink
 * until he die of old age and print the result on the console
 */

// store the values
let currentAge = 20;

let maximumAge = 90;

let coffeePerDay = 3;

// calculate the result
let coffeeForLife = (maximumAge - currentAge) * coffeePerDay;

//print the result
console.log("You will need " + coffeeForLife + " cups of coffee to last you until the ripe old age of " + maximumAge);