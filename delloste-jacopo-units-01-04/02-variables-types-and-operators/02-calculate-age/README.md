# Calculate Age

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Calculate age

- Store your birth year in a variable.
- Store a future year in a variable.
- Calculate your 2 possible ages for that year based on the stored values.
- For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what
month it is in 2026.
- Output them to the console like so: "I will be either NN or NN in YYYY", substituting the
values.


### Solution Step-by-Step

1. Create the  `02-calculate-age` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-calculate-age` directory

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
        <title>Calculate Age</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Calculate Age</h1>

        <!-- End of Body-->
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
    * Calculate Age
    *
    * calculate your age based on your year of birth and the current year
    * wheatever you celebrated your birthday or not and print the results on the console
    */


    let birthYear = 2005;

    let currentYear = 2025;

    // your age if you celebrated your birthday in the current year
    let possibleAge1 = currentYear - birthYear;
    // your age if you DIDN'T celebrated your birthday in the current year
    let possibleAge2 = possibleAge1 - 1;

    console.log("I will be either " + possibleAge2 + " or " + possibleAge1 + " in " + currentYear);
    ```

5. Check The Result using the DevTool Console of the Browser
