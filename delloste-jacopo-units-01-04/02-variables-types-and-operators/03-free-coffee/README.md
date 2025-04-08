# Free coffee

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Free coffee

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store the amount of coffee you drink per day (as a number).
- Calculate how much coffee you would drink for the rest of your life.
- Output the result to the console like so: "You will need NN cups of coffee to last you until the
ripe old age of X".


### Solution Step-by-Step

1. Create the  `03-free-coffee` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `03-free-coffee` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jacopo Dell'Oste">
        <title>Free Coffee</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Free Coffee</h1>

        <!-- End of Body-->
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
    * Free Coffee
    *
    * calculate based on the values selected how many cup of of coffee a person will drink
    * until he die of old age and print the result on the console
    */

    // store the values
    let currentAge = 20;

    let maximumAge = 90;

    let coffeePerDay = 3;

    // calculate the result
    let coffeeForLife = (maximumAge - currentAge) * coffeePerDay;

    //print the result
    console.log("You will need " + coffeeForLife + " cups of coffee to last you until the ripe old age of " + maximumAge);
    ```

5. Check The Result using the DevTool Console of the Browser
