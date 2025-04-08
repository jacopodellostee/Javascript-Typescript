# Print reverse

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a JavaScript function called printReverse which has one parameter, a string, and which prints that string in reverse

- For example, the call printReverse("foobar") should result in "raboof" being displayed


### Solution Step-by-Step

1. Create the  `01-print-reverse` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-print-reverse` directory

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
        <title>Print Reverse</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Print Reverse</h1>
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
    * Print Reverse
    *
    * this file contain one function called 'printReverse' that takes
    * one string in input and print the string reversed on the console 
    *  
    */

    /**
    * print the reversed the string 
    * @param {string} str - the string selected
    * @returns {void}
    */
    function printReverse(str) {
        let newString = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newString += str.charAt(i);
        }

        console.log(newString);
    }

    printReverse("foobar");
    ```

5. Check The Result using the DevTool Console of the Browser
