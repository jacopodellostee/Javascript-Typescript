# Calculate (Solution)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Start with the following HTML:

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Calculator (Solution)</title>
    </head>
    <body>

        <label>Square this number:
        <input type="number" id="square-input" size="2">
        </label>

        <button id="square-button">Calculate</button>

        <!--other inputs here -->

        <div id="solution"></div>

    </body>
    </html>
```

- Add inputs for half number, percentage and circle area

- Use the functions from the previous calculator exercises

- For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div

- Afterwards, change the code so that you respond to key presses so that the user doesn't have to click the button

### Solution Step-by-Step

1. Create the  `02-calculate` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-calculate` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Calculator (Solution)</title>
    </head>
    <body>
        <!-- Content Of The Body-->
        <label>Square this number:
            <input type="number" id="square-input" size="2">
        </label>

        <label>Half this number:
            <input type="number" id="half-input" size="2">
        </label>

        <label>Percent those number:
            <input type="number" id="percent-first-input" size="2">
            <input type="number" id="percent-second-input" size="2">
        </label>

        <label>Area of this number:
            <input type="number" id="area-input" size="2">
        </label>


        <div id="solution"></div>

        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * 
    * @description
    * This file performs various mathematical operations—squaring a number,
    * halving it, calculating percentage, and computing the area of a circle—
    * and displays the result in the DOM based on user input.
    */

    /**
    * Output element for displaying results.
    * @type {HTMLElement}
    */
    let solution = document.getElementById("solution");

    /**
    * Calculates the square of a number.
    *
    * @param {number} number - The number to square.
    * @returns {string} A string with the result of the operation.
    */
    function squareNumber(number) {
        let power = number * number;

        return `The result of squaring the number ${number} is ${power} `;
    }

    /**
    * Calculates half of a number.
    *
    * @param {number} number - The number to halve.
    * @returns {string} A string with the result of the operation.
    */
    function halfNumber(number) {
        let half = number / 2;

        return `Half of number ${number} is ${half}`;
    }

    /**
    * Calculates the percentage of one number relative to another.
    *
    * @param {number} firstNumber - The part value.
    * @param {number} secondNumber - The whole value.
    * @returns {string} A string describing the percentage.
    */
    function percentOf(firstNumber, secondNumber) {
        let percentage = firstNumber * 100 / secondNumber;

        return `${firstNumber} is ${percentage}% of ${secondNumber}`;
    }

    /**
    * Calculates the area of a circle using the formula A = π * r^2.
    *
    * @param {number} radius - The radius of the circle.
    * @returns {string} A string with the computed area.
    */
    function areaOfCircle(radius) {
        let area = radius * radius * Math.PI;

        return `The area for a circle with radius ${radius} is ${area.toFixed(2)}`;
    }

    /**
    * Executes a given function with the provided number and displays the result.
    *
    * @param {function} func - The function to execute.
    * @param {number} number - The input number.
    * @returns {void}
    */
    function executeFunction(func, number) {
        solution.textContent = func(number);
    }

    /**
    * Input element for square calculation.
    * @type {HTMLElement}
    */
    let squareNumberInput = document.getElementById("square-input");

    // Event listener for squaring a number
    squareNumberInput.addEventListener('keypress', () => {
        let value = Number(document.getElementById("square-input").value);

        executeFunction(squareNumber, value);
    });

    /**
    * Input element for halving a number.
    * @type {HTMLElement}
    */
    let halfNumberInput = document.getElementById("half-input");

    // Event listener for halving a number
    halfNumberInput.addEventListener('keypress', () => {
        let value = Number(document.getElementById("half-input").value);

        executeFunction(halfNumber, value);
    });

    /**
    * Input element for the first number in percentage calculation.
    * @type {HTMLElement}
    */
    let percentFirstInput = document.getElementById("percent-first-input");

    /**
    * Input element for the second number in percentage calculation.
    * @type {HTMLElement}
    */
    let percentSecondInput = document.getElementById("percent-second-input");

    /**
    * Handles Enter keypress on percentage inputs and displays the result.
    *
    * @param {KeyboardEvent} e - The keyboard event object.
    * @returns {void}
    */
    function handlePercentKeypress(e) {
        if (e.key === "Enter") {
            let val1 = Number(percentFirstInput.value);

            let val2 = Number(percentSecondInput.value);

            solution.textContent = percentOf(val1, val2);
        }
    }

    // Event listener for calculating the percentage of two number
    percentFirstInput.addEventListener('keypress', handlePercentKeypress);

    percentSecondInput.addEventListener('keypress', handlePercentKeypress);

    /**
    * Input element for circle area calculation.
    * @type {HTMLElement}
    */
    let areaCircleInput = document.getElementById("area-input");

    // Event listener for calculating area of a circle
    areaCircleInput.addEventListener('keypress', () => {
        let value = Number(document.getElementById("area-input").value);
        executeFunction(areaOfCircle, value);
    });
    ```

5. Check The Result using the DevTool Console of the Browser
