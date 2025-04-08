/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * The Dishwasher 
 *
 * this file simulates a dishwasher that washes dishes from a stack of dirty dishes 
 * to a stack of clean dishes.
 * the dishes are represented by a number, the number of dishes is random.
 * the dishwasher washes one dish at a time, the time it takes to wash a dish is random.
 * the dishwasher washes the dishes in the order they are in the stack.
 */

let cleanDishes = [];

let dirtyDishes = new Array(Math.floor(Math.random() * 50) + 1)
    .fill(null)
    .map(() => "#" + (Math.floor(Math.random() * 50) + 1));

/**
 * cleans a dish from the dirty dishes stack and adds it to the 
 * clean dishes stack printing a message to the console
 * @returns {void}
 */
function washDish() {
    if (dirtyDishes.length > 0) {
        let dirtyDish = dirtyDishes.shift();
        cleanDishes.push(dirtyDish);
        console.log("Washing " + dirtyDish + "...");
    } 
}

/**
 * displays the dirty dishes and the clean dishes on the console
 * @returns {void}
 */
function displayStacks() {
    console.log("Dirty Dishes: [" + dirtyDishes.join(", ") + "]");
    console.log("Clean Dishes: [" + cleanDishes.join(", ") + "]");
}

/**
 * invoke the two previous functions in a loop with random time
 * until the dirty dishes stack is empty
 * @returns {void}
 */
function runSimulation() {
    if (dirtyDishes.length === 0) {
        console.log("All dishes are clean.");
        return;
    }

    displayStacks();
    washDish();

    setTimeout(runSimulation, Math.floor(Math.random() * 10) * 1000);
}

runSimulation();