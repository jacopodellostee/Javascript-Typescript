/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * The Dishwasher 
 *
 *this file simulates a dishwasher that washes dishes from 3 stacks of dirty dishes 
 * to a stack of clean dishes.
 * the dishes are represented by a number, the number of dishes is random.
 * the dishwasher washes two dish at a time, the time it takes to wash a dish is random.
 * the dishwasher washes the dishes in the order they are in the stack.
 */

let cleanDishes = [];

/**
 * creates a stack of dirty dishes
 * @returns {array}
 */
function createDirtyStack() {
    return new Array(Math.floor(Math.random() * 50) + 1) 
        .fill(null)
        .map(() => "#" + (Math.floor(Math.random() * 50) + 1));
}

let dirtyDishes1 = createDirtyStack();
let dirtyDishes2 = createDirtyStack();
let dirtyDishes3 = createDirtyStack();

/**
 * cleans a dish from the dirty dishes stack and adds it to the 
 * clean dishes stack printing a message to the console
 * @returns {void}
 */
function washDish() {
    let washedCount = 0;

    const tryWashFrom = (stack) => {
        if (stack.length > 0 && washedCount < 2) {
            let dish = stack.shift();
            cleanDishes.push(dish);
            console.log("Washing " + dish + "...");
            washedCount++;
        }
    };

    tryWashFrom(dirtyDishes1);
    tryWashFrom(dirtyDishes2);
    tryWashFrom(dirtyDishes3);
}

/**
 * displays the dirty dishes and the clean dishes on the console
 * @returns {void}
 */
function displayStacks() {
    console.log("Dirty Stack 1: [" + dirtyDishes1.join(", ") + "]");
    console.log("Dirty Stack 2: [" + dirtyDishes2.join(", ") + "]");
    console.log("Dirty Stack 3: [" + dirtyDishes3.join(", ") + "]");

}

/**
 * invoke the two previous functions in a loop with random time
 * until the dirty dishes stack is empty
 * @returns {void}
 */
function runSimulation() {
    if (dirtyDishes1.length === 0 && dirtyDishes2.length === 0 && dirtyDishes3.length === 0) {
        console.log("All dishes are clean.");
        return;
    }

    displayStacks();
    washDish();

    setTimeout(runSimulation, Math.floor(Math.random() * 10) * 1000);
}

runSimulation();