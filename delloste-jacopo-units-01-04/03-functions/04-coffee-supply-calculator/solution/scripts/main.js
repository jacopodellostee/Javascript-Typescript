/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'calculateSupply'
 *
 *  this file create a function called 'calculateSupply' that 
 *  calculate how many cup of coffee a person will drink until
 *  he reach his final age
 */

// estimated maximum age
const maxAge = 90;

/**
 * calculate and print on the console how much cup of coffe you will drink 
 * @param {number} age - your current age
 * @param {number} coffeePerday - how many cup of coffee you drink in a day 
 * @returns {void}
 */
function calculateSupply(age, coffeePerday) {
    let coffeePerLife = (maxAge - age) * coffeePerday;
    console.log("You will need " + coffeePerLife + " cups of coffee to last you until the age of " + maxAge);
}

calculateSupply(20, 3);
calculateSupply(15, 5);
calculateSupply(45, 7);