# Top choice (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create an array to hold your top choices (colors, pets, books, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
choice", "My 3rd choice", "My 4th choice", etc.

Bonus: 

  - add to the function the ability to convert dollars to euros money(10): 10 dollars are 9.31 euros

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
        <title>Top Choice (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Top Choice (Bonus)</h1>
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
    * Top Choice (Bonus)
    *
    * this file contain an array with my preferences 
    * with a 'for' loop print the my preferences on the console
    * with each preference, it's position
    *  
    */

    let topChoice = ["Monster", "Solanin", "Oyasumi Punpun", "20th Century Boys"];

    for (let i = 0; i < topChoice.length; i++) {
        switch (i) {
            case 0: // 1
                console.log(`My 1st choice is ${topChoice[i]}`);
                break;
            case 1: // 2
                console.log(`My 2nd choice is ${topChoice[i]}`);
                break;
            case 2: // 3
                console.log(`My 3rd choice is ${topChoice[i]}`);
                break;
            default:
                // i+1 beacuse with i = 3 the choice is the 4th NOT the 3rd 
                console.log(`My ${i+1}th choice is ${topChoice[i]}`);
                break;
        }
        
    }
    ```

5. Check The Result using the DevTool Console of the Browser
