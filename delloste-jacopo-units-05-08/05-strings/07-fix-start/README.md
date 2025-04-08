# FixStart

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called fixStart

- It should take a single parameter, a string, and return a version where all occurrences of its first character have been replaced with '*', except for the first character itself

- You can assume that the string is at least one character long

For example: 

  - fixStart('babble'): 'ba**le'

### Solution Step-by-Step

1. Create the  `07-fix-start` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `07-fix-start` directory

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
        <title>FixStart</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>FixStart</h1>
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
    * FixStart
    *
    * this file contain 1 function called 'fixStart' that 
    * with a string in input replace all the occurency of the first 
    * character with '*' 
    *  
    */

    /**
    * return the string with the characters replaced
    * @param {string} str - a string
    * @returns {string} the modified string
    */
    function fixStart(str) {

        let firstChar, newString = "";

        firstChar = str.charAt(0); 

        newString = str.slice(1).replaceAll(firstChar, "*"); 

        return firstChar + newString; 
    }

    console.log(fixStart("babble"));
    ```

5. Check The Result using the DevTool Console of the Browser
