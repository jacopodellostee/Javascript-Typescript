# Geometry library

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Geometry library

- Create a function called calcCircumference:

    * Pass the radius to the function

    * Calculate the circumference based on the radius, and output "The circumference is NN"

- Create a function called calcArea:

    * Pass the radius to the function.

    * Calculate the area based on the radius, and output "The area is NN"



### Solution Step-by-Step

1. Create the  `05-geometry-library` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `05-geometry-library` directory

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
        <title>Geometry Library</title>
    </head>
    <body>
        <h1>Geometry Library</h1>

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
    * Creation and use of the functions 'calcCircumference' and 'calcArea'
    *
    * 
    */


    /**
    * Description
    * @param {number} radius
    * @returns {void}
    */
    function calcCircumference(radius) {
        let circumference = 2 * radius * Math.PI;
        console.log("The circumference is " + circumference);
    }

    /**
    * Description
    * @param {number} radius
    * @returns {void}
    */
    function calcArea(radius) {
        let circumference = Math.pow(radius, 2 ) * Math.PI;
        console.log("The area is " + circumference);
    }

    calcCircumference(5);
    calcArea(5);
    ```

5. Check The Result using the DevTool Console of the Browser
