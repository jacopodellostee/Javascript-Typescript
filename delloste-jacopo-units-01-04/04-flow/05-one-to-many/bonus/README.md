# One to many (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

One to many

- Write a function named oneToMany() that:

    * takes 2 parameters, a noun and a number.

    * returns the number and pluralized form, like "5 cats" or "1 dog".

- Call that function for a few different scores and log the result to make sure it

works.

- Bonus: Make it handle a few collective nouns like "sheep" and "geese".

### Solution Step-by-Step

1. Create the  `bonus` folder, because this is the script for the bonus solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `bonus` directory

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
        <title>One to Many</title>
    </head>
    <body>
        <h1>One to Many</h1>

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
    * creation and use of the 'oneToMany' function
    *
    * this file create a function called 'oneToMany' that takes in input the name 
    * of an animal, many of them there are and return the string with the number 
    * of animals and the prural of the name, handling various irregularity of the names
    */


    /**
    * return the string with the number and the animal prural
    * @param {string} animal - the animal name
    * @param {number} quantity - how many of them
    * @returns {string} - the number of animal concatenate with the animal's prural name
    */
    function oneToMany(animal, quantity) {
        let result

        if(quantity < 0) {
            // you cannot have -1 dog
            result = "";
        }

        result = animal;

        if(quantity > 1) {
            switch (animal) {
                case "sheep":
                    result = animal;
                    break;
                case "goose":
                    result = "geese";
                    break;
                default:
                    result = animal + "s";
                    break;
            }
        }

        result = quantity + " " + result;

        return result;
    }

    /**
    * print the result of the function 'oneToMany' on the console
    * @param {string} animal - the animal name
    * @param {number} quantity - how many of them
    * @returns {void}
    */
    function printResult(animal, quantity) {
        console.log(oneToMany(animal, quantity))
    }

    printResult("dog", 1); // output:  1 dog
    printResult("dog", 3); // output:  3 dogs
    printResult("cat", 3); // output:  3 cats
    printResult("frog", 5); // output:  5 frogs
    printResult("sheep", 1); // output:  1 sheep 
    printResult("sheep", 10) // output:  10 sheep
    printResult("goose", 3); // output: 3 geese
    printResult("goose", 1); // output:  1 goose
    ```

5. Check The Result using the DevTool Console of the Browser
