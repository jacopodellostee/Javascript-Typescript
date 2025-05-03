# The DOM washer (Solution)

**Author**: Jacopo Dell'Oste solution
### Request From The Client

Create a simulation of a dishwasher system using two stacks of dishes

- one stack represents dirty dishes, and the other represents clean dishes

- the dirty stack has a random number of plates 10 - 15 

useful functions:

- washDish - moves a dish from the dirty stack to the clean stack

- drawStacks - displays the current state of both stacks in the page updating the DOM

- runSimulation - simulate washing all dirty dishes adding a random delay between steps

    + Use correct HTML and CSS as needed for this exercise

Bonus

1. have three stacks of dirty dishes and one clean stack

2. the dishwasher is able to wash two dishes at a time

### Solution Step-by-Step

1. Create the  `solution` folder,  because this is the script for the basic solution

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `solution` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The DOM washer (Solution)</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <div class="stacks">
            <div class="stack">
            <h2>Dirty Dishes</h2>
            <ul id="dirty-stack"></ul>
            </div>
            <div class="stack">
            <h2>Clean Dishes</h2>
            <ul id="clean-stack"></ul>
            </div>
        </div>
        
        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
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
    ```

    * The CSS code:

    ```css 
    /**
    * style.css
    *
    * This stylesheet defines the layout and visual design for "The DOM Washer" page.
    * It organizes multiple dish stacks in a responsive grid and provides visual cues
    * for clean vs. dirty dishes. Each stack is rendered as a styled box with a list
    * of dish items. Clean dishes are highlighted with a distinct background color.
    */

    /* Base page styling for layout and readability */
    body {
    font-family: Arial, sans-serif;
    background-color: #eef2f5;
    text-align: center;
    padding: 2rem;
    }

    /* Page title spacing */
    h1 {
    margin-bottom: 2rem;
    }

    /* Flex layout for all dish stacks */
    .stacks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem; /* Space between stacks */
    }

    /* Individual stack box styling */
    .stack {
    border: 2px solid #ccc;
    padding: 1rem;
    width: 200px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* Subtle shadow for elevation */
    }

    /* Highlight for clean dishes stack */
    .stack.clean {
    background-color: #e0ffe0; /* Light green to signify cleanliness */
    }

    /* Reset list styles for dish lists */
    ul {
    list-style: none;
    padding: 0;
    }

    /* Individual dish item styling */
    li {
    padding: 6px;
    margin: 4px 0;
    background-color: #dde; /* Light blue-gray for visual consistency */
    border-radius: 4px;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
