# Dog age calculator (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Dog age calculator

Calculate a puppy’s age in dog years

- Write a function named calculateDogAge that:

    * takes 1 parameter: the dog's age in human years

    * calculates the dog's age based on the conversion rate of 1 human year to 7 dog years

    * outputs the result to the screen like so: "Your dog is NN years old in dog years!"


- Call the function three times with different sets of values

- Bonus:

    * Add another parameter to the function that takes the conversion rate of human to dog years


### Solution Step-by-Step

1. Create the  `bonus` folder, because this is the script for the bonus solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `` directory

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
        <title>Dog Age Calculator (Bonus)</title>
    </head>
    <body>
        <h1>Dog Age Calculator (Bonus)</h1>

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
    * Creation and use of the function 'calcolateDogYear'
    *
    *  this file create a function called 'calculateDogAge' that 
    *  calculate tha age in dog year from an age in human year and a 
    *  selected conversion rate 
    */

    /**
    * converte and print in the console the age from human year converted in dog year
    * @param {number} dogAgeHumanYear -  the age in human years 
    * @param {number} conversionRate  - the conversion rate 
    * @returns {number} the age in dog years 
    */
    function calculateDogAge(dogAgeHumanYear, conversionRate) {
        let dogAgeDogYear = dogAgeHumanYear * conversionRate;
        console.log("Your dog is " + dogAgeDogYear + " in dog years!");
    }

    calculateDogAge(10, 7);
    calculateDogAge(5, 3);
    calculateDogAge(1, 12);
    ```

5. Check The Result using the DevTool Console of the Browser
