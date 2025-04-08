# Oh no you don’t

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a function “useful” that does something useful in Javascript

- Schedule it to run after 10 seconds

- Write another function that cancels the scheduling of the first function

- Use the second function to cancel the first one after 5 seconds and output
‘function cancelled’ to the console

### Solution Step-by-Step

1. Create the  `02-oh-no-you-dont` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-oh-no-you-dont` directory

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
        <title>Oh no you Don't</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Oh no you Don't</h1>
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
    * Oh no you Don't
    *
    * this function contains 2 function
    * 'usefulFunction' print Something Useful... literally
    * 'cancelFunction' cancel the timeOut of the other function
    */

    /**
    * print 'Something Useful...' on the console
    * @returns {void}
    */
    function usefulFunction() {
        console.log("Something Useful...");
    }

    /**
    * clear the timeOut with ID passed as a parameters
    * and print that the function has been canceled 
    * @param {string} timeOutToCancel
    * @returns {void}
    */
    function cancelFunction(timeOutToCancel) {
        clearTimeout(timeOutToCancel);

        console.log("function cancelled");
    }

    let usefulTimeID = setTimeout(usefulFunction, 10000);

    let cancelTimeID = setTimeout(cancelFunction, 5000, usefulTimeID);
    ```

5. Check The Result using the DevTool Console of the Browser
