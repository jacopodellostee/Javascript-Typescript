/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * The DOM Washer
 *
 * This file simulates a visual dishwasher system using the DOM and JavaScript.
 * There are three stacks of dirty dishes and one stack of clean dishes.
 * Each stack is visually rendered in the DOM as a list.
 * 
 * The system washes two dishes at a time from the dirty stacks and moves them to the clean stack.
 * The washing process includes a randomized delay to simulate time passing.
 * Each update re-renders the stack contents on the page.
 */

let cleanDishes = [];

/**
 * Creates a new stack of dirty dishes with 5–14 randomly labeled dishes.
 * Each dish is represented by a string like "#23".
 * @returns {string[]} A randomly generated array of dish labels.
 */
function createDirtyStack() {
    return new Array(Math.floor(Math.random() * 10) + 5)
        .fill(null)
        .map(() => "#" + (Math.floor(Math.random() * 50) + 1));
}

// Initialize three dirty stacks
let dirtyDishes1 = createDirtyStack();
let dirtyDishes2 = createDirtyStack();
let dirtyDishes3 = createDirtyStack();

/**
 * Updates the DOM to reflect the current state of all stacks.
 * Each stack is rendered in a separate HTML list identified by ID.
 */
function drawStacks() {
    const stackMap = {
        "dirty-stack-1": dirtyDishes1,
        "dirty-stack-2": dirtyDishes2,
        "dirty-stack-3": dirtyDishes3,
        "clean-stack": cleanDishes
    };

    for (let id in stackMap) {
        const element = document.getElementById(id);
        element.innerHTML = "";
        stackMap[id].forEach(dish => {
            const li = document.createElement("li");
            li.textContent = dish;
            element.appendChild(li);
        });
    }
}

/**
 * Washes up to two dishes from the dirty stacks (in order) and moves them to the clean stack.
 * A console message logs which dishes are being washed.
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
 * Runs the simulation:
 * - Continues washing dishes until all dirty stacks are empty
 * - Random delay between each washing cycle
 * - Renders current state after each wash
 */
function runSimulation() {
    if (
        dirtyDishes1.length === 0 &&
        dirtyDishes2.length === 0 &&
        dirtyDishes3.length === 0
    ) {
        drawStacks();
        console.log("All dishes are clean.");
        return;
    }

    washDish();
    drawStacks();

    const delay = Math.floor(Math.random() * 1000) + 500; // 500ms to 1500ms
    setTimeout(runSimulation, delay);
}

// Start the simulation
runSimulation();
