# Money (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called money

- It should take a single parameter, an amount, and return '<amount> dollars'

- Add a smiley at the end if the amount is 1 million. Deal with edge cases

+ For example: 

  - money(1): 1 dollar

  - money(10): 10 dollars

  - money(1000000): 1000000 dollars ;)

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
        <title>Money (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Money (Bonus)</h1>
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
    * Money (Bonus)
    *
    * this file contain 1 function called 'money' that 
    * with an ammount of money returns in input returns
    * the ammount concatenated with the string 'dollars' 
    * and the conversion in euros
    */


    /**
    * return the string with the ammount of money and the string 'dollars' and the conversion in euros 
    * @param {number} ammount - the ammount of money 
    * @returns {string} - the modified string
    */
    function money(ammount) {
        
        let newString = "";

        // 1 $ = 0.92 €
        let euro = ammount * 0.92;

        newString = "" + ammount + " " + "dollars are " + euro.toFixed(2) +  " euros";

        return newString;
    }

    console.log(money(10));
    console.log(money(1000000));
    ```

5. Check The Result using the DevTool Console of the Browser
