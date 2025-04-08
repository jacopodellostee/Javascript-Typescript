# Cash register

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a function called cashRegister that takes a shopping cart object.

- The object contains item names and prices (itemName: itemPrice).

- The function returns the total price of the shopping cart

Example :

```javascript
let cartForParty = {
banana: "1.25",
handkerchief: ".99",
Tshirt: "25.01",
apple: "0.60",
nalgene: "10.34",
proteinShake: "22.36"
}
```

The output should be 60.55

### Solution Step-by-Step

1. Create the  `04-cash-register` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `04-cash-register` directory

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
        <title>Cash Register</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Cash Register</h1>
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
    * Cash Register
    *
    * this file contain an onject called 'cartForParty'
    * that contain random item and it's cost, and a function 
    * called 'cashRegister' that parse and sum the cost of the
    * item and print the total on the console
    */

    let cartForParty = 
    {
        banana: "1.25",
        handkerchief: ".99",
        Tshirt: "25.01",
        apple: "0.60",
        nalgene: "10.34",
        proteinShake: "22.36"
    };

    /**
    * print on the cansole the total price of the cart
    * @param {object} cart
    * @returns {void}
    */
    function cashRegister(cart) {

        let total = 0;

        for (let item in cart) {
            // We parse the value that have 'item' as his key
            // Es. in cart the values that has "banana" as his key is "1.25"
            total += parseFloat(cart[item]);
        }

        console.log(total.toFixed(2)); 
    }

    cashRegister(cartForParty);
    ```

5. Check The Result using the DevTool Console of the Browser
