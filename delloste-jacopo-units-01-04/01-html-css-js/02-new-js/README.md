# New JS

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Build your first Javascript project

- Write your index.html file from scratch
- Add a main.js file that writes your name to the console

Create a folder named 02-new-js with the solution

### Solution Step-by-Step

1. Create the  `02-new-js` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-new-js` directory

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
            <title>New JS</title>
        </head>
        <body>
            <h1>New JS</h1>
            <!-- End of The Body-->
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
         * First Javascript File
         *
         * print the file author's name on the console
         */

        console.log("Jacopo Dell'Oste");
    ```

5. Check The Result using the DevTool Console of the Browser
