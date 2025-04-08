# Odd or even

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Odd or even

- Write a for loop that will iterate from 0 to 20.

- For each iteration, it will check if the current number is odd or even, and
report that to the screen (e.g. "2 is even").


### Solution Step-by-Step

1. Create the  `04-odd-or-even` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `04-odd-or-even` directory

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
        <title>Odd Or Even</title>
    </head>
    <body>
        <h1>Odd Or Even</h1>

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
    * Calculate if a number is odd or even
    *
    * this file create a for loop for calcute if
    * the first 20  (including 0) number are odd (number NOT divisible by 2)
    * or even (number divisible by 2) and print the result on the console 
    */

    for(let i = 0; i <= 20; i++) {
        // calculate the module of the current number (the module is the rest of the division, if it's 0 the number is divisible by 2) 
        if(i % 2 == 0)
            // print the result
            console.log(i + " is even.");
        else
            // print the result
            console.log(i + " is odd.");
    }
    ```

5. Check The Result using the DevTool Console of the Browser
