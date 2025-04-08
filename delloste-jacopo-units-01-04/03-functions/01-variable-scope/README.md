# Variable Scope

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Variable Scope

- Write a .js file that uses both local and global variables in the same project
- Recreate the local and global scope examples in your browser
- Try to call the function “addNumbers” a few more times
- Make sure that you understand exactly what’s happening at every stage



### Solution Step-by-Step

1. Create the  `01-variable-scope` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-variable-scope` directory

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
        <title>Variable Scope</title>
    </head>
    <body>
        <h1>Variable Scope</h1>

        <!-- End of the Body -->
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
    * Block Scoop, how does it work?
    *
    * this file explain how the scoop of the construsct 'let' works
    * 'let' is block-scooped, so the variable 
    * only exist inside closer block of code -> {} 
    * outside of the bracket, the variable doesn't exist (it's not defined)
    *  
    */

    //global variable
    let number; 

    /**
    * return the sum of firstNumber and secondNumbers
    * @param {number} firstNumber - the first number in input 
    * @param {number} secondNumber - the second number in input
    * @returns {number} - the sum of firstNumber and secondNumber
    */
    function addNumbers(firstNumber, secondNumber){
        // local variable
        let result = firstNumber + secondNumber 
        return result;
    }

    number = addNumbers(2, 2);

    // print the result
    console.log(number); 

    // generte an error
    console.log(result);
    ```

5. Check The Result using the DevTool Console of the Browser
