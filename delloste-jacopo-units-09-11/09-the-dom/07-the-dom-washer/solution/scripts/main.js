/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * The DOM Washer - Single Stack Version
 *
 * This file simulates a dishwasher system using the DOM.
 * It models a single stack of dirty dishes and one stack of clean dishes.
 *
 * Plates are displayed in the DOM as list items.
 * The system washes one plate at a time, moves it to the clean stack, 
 * and updates the DOM after each wash.
 * A random delay simulates time between washing cycles.
 */

let cleanDishes = [];

/**
 * Creates a single dirty stack with 10–15 plates.
 * Each plate is labeled "Plate #N".
 * @type {string[]}
 */
let dirtyDishes = Array.from(
  { length: Math.floor(Math.random() * 6) + 10 },
  (_, i) => `Plate #${i + 1}`
);

/**
 * Updates the DOM by rendering the current state of
 * dirty and clean stacks as HTML list items.
 */
function drawStacks() {
  const dirtyList = document.getElementById("dirty-stack");
  const cleanList = document.getElementById("clean-stack");

  dirtyList.innerHTML = "";
  cleanList.innerHTML = "";

  dirtyDishes.forEach(dish => {
    const li = document.createElement("li");
    li.textContent = dish;
    dirtyList.appendChild(li);
  });

  cleanDishes.forEach(dish => {
    const li = document.createElement("li");
    li.textContent = dish;
    cleanList.appendChild(li);
  });
}

/**
 * Simulates washing a single dish:
 * Removes the top dirty dish and adds it to the clean stack.
 * Logs the washing action to the console.
 */
function washDish() {
  if (dirtyDishes.length > 0) {
    const dish = dirtyDishes.shift();
    cleanDishes.push(dish);
    console.log("Washing " + dish + "...");
  }
}

/**
 * Runs the simulation:
 * - Continues washing dishes one by one with a delay
 * - Stops when there are no dirty dishes left
 * - Updates the DOM after each wash
 */
function runSimulation() {
  if (dirtyDishes.length === 0) {
    drawStacks();
    console.log("All dishes are clean!");
    return;
  }

  washDish();
  drawStacks();

  const delay = Math.floor(Math.random() * 1000) + 500; // 500ms–1500ms
  setTimeout(runSimulation, delay);
}

// Start the simulation
runSimulation();
