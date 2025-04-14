/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */


let cleanDishes = [];

function createDirtyStack() {
    return new Array(Math.floor(Math.random() * 10) + 5)
        .fill(null)
        .map(() => "#" + (Math.floor(Math.random() * 50) + 1));
}

let dirtyDishes1 = createDirtyStack();
let dirtyDishes2 = createDirtyStack();
let dirtyDishes3 = createDirtyStack();

// Draw all stacks in the DOM
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

    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(runSimulation, delay);
}


runSimulation();
