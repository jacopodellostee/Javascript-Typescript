# Timed conversion (setInterval)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- We will modify ‘Temperature conversion’ exercise from the lesson about
functions

- Call celsiusToFahrenheit on temperatures from 0 to 100 so that one
temperature is printed to the console every second

### Solution Step-by-Step

1. Create the  `set-interval` folder, because we will use the `setInterval` function for this task

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the main directory

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
        <title>Timed conversion</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Timed conversion</h1>
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
    * Timed conversion
    *
    * this file create a function that convert
    * a celcius temperature in fahrenheit and print the result
    * of the first 100 number every second using setInterval
    */

    /**
    * convert a celcius temperature in fahrenheit
    * @param {number} celcius - the temperature express in celcius
    * @returns {void}
    */
    function celsiusToFahrenheit (celcius) {
        let fahrenheit = (celcius * 9/5) + 32;
        console.log(celcius + "°C is " + fahrenheit + "°F");
    }

    let i = 0;

    /**
    * repeat the conversion every second for the first 100 number 
    * @returns {void}
    */
    function printCelsiusToFahrenheit () {
        if (i <= 100) {
            celsiusToFahrenheit(i);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }

    let intervalId = setInterval(printCelsiusToFahrenheit, 1000);
    ```

5. Check The Result using the DevTool Console of the Browser
