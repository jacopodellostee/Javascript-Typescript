# My setInterval

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Pretend that setInterval() doesn't exist

- Re-create it using setTimeout naming your function mySetInterval

- Test your new function

- Modify your function so that it automatically stops after 15 intervals

### Solution Step-by-Step

1. Create the  `05-my-setinterval` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `05-my-setinterval` directory

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
        <title>My setInterval</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>My setInterval</h1>
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
    * My setInterval
    *
    * this file contains the function called 'mySetInterval' 
    * that recreates the setInterval function using the 
    * setTimeout function but it stops after 15 loops
    */

    /**
    * recreate 'SetInterval' using the function 'setTimeOut'
    * @param {function} functionToExecute
    * @param {number} interval
    * @returns {void}
    */
    function mySetInterval(functionToExecute, interval) {

        let intervalCounter = 0;

        if(typeof functionToExecute === "function") {

            /**
            * execute the function we passed as a parameter to mySetInterval
            * the interval will stop after 15 loops
            * @returns {void}
            * 
            */
            function runTheFunction() {
                if(intervalCounter < 15){
                    // invoke the function passed as a parameter
                    functionToExecute();
                    intervalCounter++;
            
                    setTimeout(runTheFunction, interval);
                } else {
                    console.log("Interval stopped after 15 loops");
                }
            }

            setTimeout(runTheFunction, interval);

        } else {
            console.log("Parameter is not a function");
            return;
        }

    }

    /**
    * print "Test" on the console
    * @returns {void}
    */
    function printTest() {
        console.log("Test");
    } 

    // test if the control works correctly
    mySetInterval("printTest", 1000);

    // set an interval to the function 'printTest'
    mySetInterval(printTest, 1000);
    ```

5. Check The Result using the DevTool Console of the Browser
