# Coffee supply calculator (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Coffee supply calculator

- Write a function named calculateSupply that:

    * takes 2 parameters: age, amount per day.

    * calculates the amount consumed for rest of the life (based on a constant max age).

- outputs the result to the screen like so: "You will need NN cups of coffee to

last you until the age of X"

- Call that function three times, passing in different values each time

- Bonus:

    * Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)

    * Round the result to a round number


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
        <title>Coffee Supply calculator (Bonus)</title>
    </head>
    <body>
        <h1>Coffee Supply calculator (Bonus)</h1>

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
    * Creation and use of the function 'calculateSupply'
    *
    *  this file create a function called 'calculateSupply' that 
    *  calculate how many cup of coffee a person will drink until
    *  he reach his final age
    */

    // estimated maximum age
    const maxAge = 90;

    /**
    * calculate and print on the console how much cup of coffe you will drink 
    * @param {number} age - your current age
    * @param {number} coffeePerday - how many cup of coffee you drink in a day 
    * @returns {void}
    */
    function calculateSupply(age, coffeePerday) {
        let coffeePerLife = (maxAge - age) * Math.round(coffeePerday);
        console.log("You will need " + coffeePerLife + " cups of coffee to last you until the age of " + maxAge);
    }

    calculateSupply(20, 3);
    calculateSupply(15, 5);
    calculateSupply(45, 7);
    ```

5. Check The Result using the DevTool Console of the Browser
