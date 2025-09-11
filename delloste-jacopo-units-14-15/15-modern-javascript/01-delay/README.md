# Delay

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 


- Use promises to implement a delay function that can be used like in the code below

- Your implementation should work for any type of Javascript function such as

    + regular functions
    
    + arrow functions
    
    + anonymous functions

```js
delay(300).then(myFunction);
```

### Solution Step-by-Step

1. Create the  `01-delay` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-delay` directory

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
        <title>Delay</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Delay</h1>
        <p>open the console (F12) to see the output</p>

        <!-- End of Body-->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * 
    * @description
    * This script demonstrates a generic `delay` function implemented using promises.
    * The `delay` function pauses execution for a specified time and can be used 
    * with any type of JavaScript function: regular, anonymous, or arrow functions.
    */

    /**
    * Returns a promise that resolves after a specified delay in milliseconds.
    *
    * @function
    * @name delay
    * @param {number} ms - The number of milliseconds to wait before resolving.
    * @returns {Promise<void>} A promise that resolves after the delay.
    *
    * @example
    * // Using a regular function
    * function myFunction() {
    *   console.log("I am a Regular Function!");
    * }
    * delay(1000).then(myFunction);
    *
    * @example
    * // Using an anonymous function
    * delay(3000).then(function() {
    *   console.log("I am an Anonymous Function!");
    * });
    *
    * @example
    * // Using an arrow function
    * delay(5000).then(() => {
    *   console.log("I am an Arrow Function!");
    * });
    */
    function delay(ms) { 
    return new Promise(resolve => { 
        setTimeout(resolve, ms); 
    }); 
    }

    /**
    * A sample regular function to demonstrate usage with `delay`.
    *
    * @function
    * @name myFunction
    */
    function myFunction() { 
    console.log("I am a Regular Function!"); 
    }

    // Examples of using the `delay` function
    delay(1000).then(myFunction);

    delay(3000).then(function () {
    console.log("I am an Anonymous Function!");
    });

    delay(5000).then(() => {
    console.log("I am an Arrow Function!");
    });
    ```

5. Check The Result using the DevTool Console of the Browser
