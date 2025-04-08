# Easy multiplication (Solution)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Easy multiplication

- Write a for loop that will iterate from 0 to 10.

- For each iteration of the for loop, it will multiply the number by 9 and log
the result (e.g. "2 * 9 = 18").

- Bonus: Use a nested for loop to show the tables for every multiplier from 1
to 10 (100 results total)


### Solution Step-by-Step

1. Create the  `solution` folder, because this is the script for the regular solution

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
        <title>Easy Moltiplication</title>
    </head>
    <body>
        <h1>Easy Moltiplication</h1>
        <p>open the console (F12) to see the output</p>
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
    * Use of a 'for' loop in JavaScript
    *
    * this file create a for loop for calculating 
    * the 9 times table and print the result on the console
    */

    let result;

    for (let i = 0; i <= 10; i++) {
        // store the r esult in a variable 
        result = i * 9;
        // print the result
        console.log("" + i + " * 9 = " + result);
    }
    ```

5. Check The Result using the DevTool Console of the Browser
