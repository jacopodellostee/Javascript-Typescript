# The DOM washer (Bonus)

**Author**: Jacopo Dell'Oste 

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

1. Create the  `bonus` folder,  because this is the script for the bonus solution

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `bonus` directory

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
        <title>The DOM washer (Bonus)</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
    <div class="stacks">
        <div class="stack">
        <h2>Dirty Stack 1</h2>
        <ul id="dirty-stack-1"></ul>
        </div>
        <div class="stack">
        <h2>Dirty Stack 2</h2>
        <ul id="dirty-stack-2"></ul>
        </div>
        <div class="stack">
        <h2>Dirty Stack 3</h2>
        <ul id="dirty-stack-3"></ul>
        </div>
        <div class="stack clean">
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
