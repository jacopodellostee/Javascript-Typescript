# Big numbers

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Big numbers

- Write a function named greaterNum that:

    * takes 2 parameters, both numbers.

    * returns whichever number is the greater (higher) number.

- Call that function 2 times with different number pairs, and log the output to

make sure it works (e.g. "The greater number of 5 and 10 is 10.").

### Solution Step-by-Step

1. Create the  `01-big-number` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-big-number` directory

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
        <title>Big Number</title>
    </head>
    <body>
        <h1>Big Number</h1>

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
    * Creation and use of the function 'greaterNum'
    *
    * this file create a function called 'greaterNum' that takes 
    * in input two number and returns the greater one
    *  
    */

    /**
    * return the grater number of the 2 argument of the function 
    * @param {number} firstNumber - the first number in input 
    * @param {number} secondNumber -  the second number in input
    * @returns {number} - the higher number
    */
    function greaterNum(firstNumber, secondNumber) {
        if(firstNumber > secondNumber) 
            return firstNumber;
        else
            return secondNumber;
    }

    /**
    * print the result of the function 'greaterNum' on the console in a complete sentence
    * @param {number} firstNumber - the first number in input 
    * @param {number} secondNumber -  the second number in input
    * @returns {void}
    */
    function printResult(firstNumber, secondNumber) {
        console.log("The greater number of " + firstNumber + " and " + secondNumber + " is " + greaterNum(firstNumber, secondNumber));
    }

    printResult(6, 12);
    printResult(18, 7);
    ```

5. Check The Result using the DevTool Console of the Browser
