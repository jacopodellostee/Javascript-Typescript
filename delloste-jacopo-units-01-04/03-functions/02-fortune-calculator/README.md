# Fortune calculator

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Fortune calculator

- Write a function named tellFortune that:

    * Takes 4 parameters: number of children, partner's name, geographic location, job title.

    * outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

- Call that function 3 times with 3 different values for the arguments


### Solution Step-by-Step

1. Create the  `02-fortune-calculator` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-fortune-calculator` directory

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
        <title>Fortune Calculator</title>
    </head>
    <body>
        <h1>Fortune Calculator</h1>

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
    * Creation and use of the function 'tellFortune'
    *
    *  this file create a function called 'tellFortune' that 
    *  print on the console your fortune with the parameter you 
    *  use when you call it
    *  
    */



    /**
    * print in the console your fortune
    * @param {string} partner - name of the partner 
    * @param {number} numberOfChildren - how many childern you have
    * @param {string} country - country you live in 
    * @param {string} job - your job
    * @returns {void}
    */
    function tellFortune(partner, numberOfChildren, country, job){
        console.log("You will be a " + job + " in " + country + ", and married to " + partner + " with " + numberOfChildren + " kids.");
    }

    // call the function
    tellFortune("Maria", 4, "Italy", "Web Developer");
    tellFortune("Anna", 2, "Germany", "Cybersecurty Specialist");
    tellFortune("Alice", 0, "Belgium", "Game Designer");
    ```

5. Check The Result using the DevTool Console of the Browser
