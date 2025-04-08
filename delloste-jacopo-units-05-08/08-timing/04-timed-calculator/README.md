# Timed calculator

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- We will modify ‘Calculator’ exercise from the lesson about functions

- Rewrite the last function that performs all 4 operations so that there is a
delay of 3 seconds between one operation and the next

### Solution Step-by-Step

1. Create the  `04-timed-calculator` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `04-timed-calculator` directory

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
        <title>Timed Calculator</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Timed Calculator</h1>
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
    * Timed Calculator
    *
    * create a function that use the 4 function created 
    * in the exercise 'Math Library' invoking all of them 
    * with 3 seconds of delay between them 
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
    * invoke all the function created above with a 3 seconds delay between them
    * @param {any} number
    * @returns {any}
    */
    function timedCalculator(number) {
        
        setTimeout(halfNumber, 3000, number);

        setTimeout(squareNumber, 6000, number);

        setTimeout(areaOfCircle, 9000, number);

        setTimeout(percentOf, 12000, number, Math.pow(number, 2));

    }

    timedCalculator(4);
    ```

5. Check The Result using the DevTool Console of the Browser
