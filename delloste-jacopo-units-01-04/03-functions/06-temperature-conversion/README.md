# Temperature conversion

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Temperature conversion

Create a function called celsiusToFahrenheit:

* Store a celsius temperature into a variable.

* Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:

* Now store a fahrenheit temperature into a variable.

* Convert it to celsius and output "NN°F is NN°C."

### Solution Step-by-Step

1. Create the  `06-temperature-conversion` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `06-temperature-conversion` directory

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
        <title>Temperature Conversion</title>
    </head>
    <body>
        <h1>Temperature Conversion</h1>

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
    * Temperature Convertitor
    *
    * this file create the two function that convert
    * a celcius temperature in fahrenheit and vice versa 
    * printing the result on the console
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

    /**
    * convert a fahrenheit temperature in celcius
    * @param {number} fahrenheit - the temperature express in fahrenheit
    * @returns {void}
    */
    function fahrenheitToCelsius (fahrenheit) {
        let celcius = (fahrenheit - 32) * 9/5;
        console.log(fahrenheit + "°F is " + celcius + "°C");
    }

    celsiusToFahrenheit(0);
    fahrenheitToCelsius(32);
    ```

5. Check The Result using the DevTool Console of the Browser
