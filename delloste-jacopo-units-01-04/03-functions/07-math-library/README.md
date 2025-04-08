# Math Library

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Math library

- Write a function called squareNumber that will take one parameter (a
number), square that number, and return the result. It should also log a
string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one parameter (a
number), divide it by 2, and return the result. It should also log a string like
"Half of 5 is 2.5."



### Solution Step-by-Step

1. Create the  `07-math-library` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `07-math-library` directory

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
        <title>Math Library</title>
    </head>
    <body>
        <h1>Math Library</h1>

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
    * Math Library
    *
    * this file create 4 function that do simple mathematical operation 
    * and print the result on the console
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

    squareNumber(2);
    halfNumber(2);
    percentOf(3, 4);
    areaOfCircle(3);
    ```

5. Check The Result using the DevTool Console of the Browser
