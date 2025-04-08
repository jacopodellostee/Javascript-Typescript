# MixUp

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called mixUp

- It should take in two strings, and return the concatenation of the two strings (separated by a
space) slicing out and swapping the first 2 characters of each

- You can assume that the strings are at least 2 characters long


For example:

- mixUp('mix', 'pod'): 'pox mid'

- mixUp('dog', 'dinner'): 'dig donner'

### Solution Step-by-Step

1. Create the  `06-mix-up` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `06-mix-up` directory

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
        <title>MixUp</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>MixUp</h1>
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
    * MixUp
    *
    * this file contain 1 function called 'mixUp' that take in input 
    * two strings, and return the concatenation of the two strings (separated by a space) 
    * slicing out and swapping the first 2 characters of each
    *  
    */


    /**
    * concatenate two strings (separated by a space) slicing out and swapping the first 2 characters of each
    * @param {string} firstString
    * @param {string} secondString
    * @returns {string}
    */
    function mixUp(firstString, secondString) {

        let finalString = "";

        let firstTmpString = firstString.slice(0, 2).concat(secondString.slice(2));

        let secondTmpString = secondString.slice(0, 2).concat(firstString.slice(2));

        finalString =  secondTmpString +  " " + firstTmpString;

        return finalString;
        
    }

    console.log(mixUp("mix", "pod"));
    console.log(mixUp("dog", "dinner"));
    ```

5. Check The Result using the DevTool Console of the Browser
