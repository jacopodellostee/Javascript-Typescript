/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let cleanDishes = [];
let dirtyDishes = Array.from(
  { length: Math.floor(Math.random() * 6) + 10 },
  (_, i) => `Plate #${i + 1}`
);


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


function washDish() {
  if (dirtyDishes.length > 0) {
    const dish = dirtyDishes.shift();
    cleanDishes.push(dish);
    console.log("Washing " + dish + "...");
  }
}


function runSimulation() {
  if (dirtyDishes.length === 0) {
    drawStacks();
    console.log("All dishes are clean!");
    return;
  }

  washDish();
  drawStacks();

  const delay = Math.floor(Math.random() * 1000) + 500;
  setTimeout(runSimulation, delay);
}

runSimulation();
