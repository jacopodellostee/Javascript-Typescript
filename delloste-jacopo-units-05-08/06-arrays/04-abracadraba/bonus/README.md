# Abracadabra

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 


- Code 3 different solutions to change the 4th letter in the following string
"Abracadabra" into an "X"

- Each solution should be in a separate folder.

  + Name them solution-1, solution-2, etc.

- Also include a doc file in which you explain what 3 ways you used

- Bonus: There are many ways to replace a character in a string. Code other
solutions than the above 3

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
        <title>Abracadabra (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Abracadabra (Bonus)</h1>
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
    * Abracadabra (Bonus)
    *
    * this file replace the 4th character of the string "Abracadabra" with an "X"
    * This is the bonus solution using regular expression
    *  
    */

    const str = "Abracadabra"; 

    const newStr = str.replace(/^(.{3})./, "$1X");

    console.log(newStr);
    ```

5. Check The Result using the DevTool Console of the Browser
