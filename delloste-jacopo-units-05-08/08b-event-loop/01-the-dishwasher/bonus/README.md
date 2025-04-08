# the Diwshasher (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Create a simulation of a dishwasher system using two stacks of dishes

- one stack represents dirty disbonuses, and the other represents clean dishes

- the dirty stack has a random number of plates 10 - 50

- useful functions

  + washDish - moves a dish from the dirty stack to the clean stack

  + displayStacks - displays the current state of both stacks in the console

  + runSimulation - simulate washing all dirty dishes adding a random delay between steps

Bonus

1. have three stacks of dirty dishes and one clean stack

2. the dishwasher is able to wash two dishes at a time

### Solution Step-by-Step

1. Create the  `bonus` folder, because this is the script for the bonus solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `bonus` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

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
        <title>The Dishwasher (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>The Dishwasher (Bonus)</h1>
        <p>open the console (F12) to see the output</p>
        
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
    ```

5. Check The Result using the DevTool Console of the Browser
