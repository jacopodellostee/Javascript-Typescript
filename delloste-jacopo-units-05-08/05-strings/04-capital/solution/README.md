# Capital

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a JavaScript function called capital which has one parameter, a string, and which returns
that string with the first letter capitalized

- For example, the call capital("hello world") should return the string "Hello world"

- Bonus: Modify the function so that it capitalizes each word. capital2("my name is john") should return the string "My Name Is John"

### Solution Step-by-Step

1. Create the  `solution` folder, because this is the script for the basic solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `solution` directory

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
        <title>Capital</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Capital</h1>
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
    * Capital
    *
    * this file contain one function called 'capital' that 
    * with a string in input return the string with the first letter capitalized
    *  
    */

    /**
    * capitalized the first letter of the string 
    * @param {string} str - the string in input 
    * @returns {string} - 'str' with the first letter capitalized
    */
    function capital(str) {

        let newString = "";

        let firstletterUpped = str.charAt(0).toUpperCase();

        newString = firstletterUpped + str.slice(1);
        
        return newString;
    }

    console.log(capital("hello"));
    ```

5. Check The Result using the DevTool Console of the Browser
