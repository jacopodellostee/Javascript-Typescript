# Calculator

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Calculator

Write a function that will take one parameter (a number) and perform the
following operations, using the functions you wrote earlier:

- Take half of the number and store the result

- Square the result of #1 and store that result

- Calculate the area of a circle with the result of #2 as the radius

- Calculate what percentage that area is of the squared result



### Solution Step-by-Step

1. Create the  `08-calculator` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `08-calculator` directory

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
        <title>Calculator</title>
    </head>
    <body>
        <h1>Calculator</h1>

        <!-- End of Body -->
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
    * Calculator
    *
    * create a function that use the 4 function created 
    * in the last exercise invoking all of the on a single number
    */


    /**
    * print the square of the number selected
    * @param {number} number - a number
    * @returns {void}
    */
    function squareNumber(number) {
        let power = number * number;
        console.log("The result of squaring the number " + number + " is " + power); 
    }

    /**
    * print the half of the number selected
    * @param {number} number - a number
    * @returns {void}
    */
    function halfNumber(number) {
        let half = number / 2;
        console.log("Half of " + number +  " is " + half);
    }

    /**
    * print the percentage of firstNumber in secondNumber
    * es. firstNumber = 2, secondNumber = 4 => 2 is 50% of 4
    * @param {number} firstNumber - the first number
    * @param {number} secondNumber - the second number 
    * @returns {void}
    */

    function percentOf(firstNumber, secondNumber) {
        let percentage = firstNumber * 100 / secondNumber;
        console.log(firstNumber + " is " + percentage + "% of " + secondNumber);
    }


    /**
    * print the area of a circus with the selected radius
    * @param {number} radius - a radius of a circumferences
    * @returns {void}
    */
    function areaOfCircle (radius) {
        let area = 2 * radius * Math.PI;
        console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2));
    }

    /**
    * invoke the functions above on a single number
    * for 'percentefOf' the secondNumber is the square of the number selected
    * @param {number} number - a number
    * @returns {void}
    */
    function calculator(number) {
        halfNumber(number);
        squareNumber(number);
        areaOfCircle(number);
        percentOf(number, Math.pow(number, 2));
    }

    calculator(12);
    ```

5. Check The Result using the DevTool Console of the Browser
