# Capital (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a JavaScript function called capital which has one parameter, a string, and which returns
that string with the first letter capitalized

- For example, the call capital("hello world") should return the string "Hello world"

- Bonus: Modify the function so that it capitalizes each word. capital2("my name is john") should return the string "My Name Is John"

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
        <title>Capital (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Capital (Bonus)</h1>
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
    * Capital (Bonus)
    *
    * this file contain one function called 'capital2' that 
    * with a string in input return the string with the first letter of each word capitalized
    *  
    */

    /**
    * capitalized the first letter of each word capitalized
    * @param {string} str - the string in input 
    * @returns {string} - 'str' with the first letter of each word capitalized
    */
    function capital2(str) {

        let words = str.split(' '); 
        // ["my" "name" "is" "john"]
        let newString = '';

        for (let i = 0; i < words.length; i++) {

            let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);

            newString += capitalizedWord + ' ';
        }

        return newString
    }
        
    console.log(capital2("my name is john"));
    ```

5. Check The Result using the DevTool Console of the Browser
