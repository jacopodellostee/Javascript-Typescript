# Contains

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called aContainsb

- It should take in two strings, and return true if the first string contains the second, otherwise it should return false

For example: 

  - aContainsB ("Another hello world", "hell");

### Solution Step-by-Step

1. Create the  `10-contains` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `10-contains` directory

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
        <title>Contains</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Contains</h1>
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
    * Contains
    *
    * this file contain 1 function called 'aContainsb' 
    *  that return if the string 'a' contain the substring 'b'
    */

    /**
    * return if a contains b
    * @param {string} a - the string 
    * @param {string} b - the substring
    * @returns {boolean}
    */
    function aContainsb(a, b) {
        return a.includes(b);
    }

    console.log(aContainsb("Hello World", "Hello")); // true
    console.log(aContainsb("Hello World", "Ciao")); // false
    ```

5. Check The Result using the DevTool Console of the Browser
