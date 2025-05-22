# Babies

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 


- Create an empty array of babies

- Each baby should have the following properties

    + "name" (a string)

    + "months" (age in months as number)

    + "noises" (an array of strings)

    + "favoriteFoods" (an array of strings)

- Add 4 different babies to the array using as many different ways as possible

- Iterate through the array printing key and value pairs e.g `name: ”Lyla”`

- Now add an "outfit" property to each baby in the array

    + Outfit should describes at least 3 parts of their clothing using different properties, for example, "shirt": "blue"

    + Print each baby again with their outfit in a nicely formatted object

### Solution Step-by-Step

1. Create the  `02-babies` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-babies` directory

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
        <title>Babies</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Babies</h1>
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
    * This script creates and manages an array of baby objects.
    * Each baby has properties like name, age in months, noises, and favorite foods.
    * Babies are created using different techniques, and each is later assigned a random outfit.
    * All babies are printed before and after outfits are added.
    */

    /**
    * Prints detailed information of each baby in the array to the console.
    * It handles strings, arrays, and nested objects like outfit.
    *
    * @param {Object[]} babies - Array of baby objects to print
    */
    function printBabies(babies) {

        babies.forEach((baby, index) => {

            console.log(`Baby: ${index + 1}`);

            for (let key in baby) {

                if (typeof baby[key] === 'object' && baby[key] !== null) {

                    console.log(`${key}:`);

                    for (let subKey in baby[key]) {
                        Array.isArray(baby[key])
                            ? console.log(` ${baby[key][subKey]}`)
                            : console.log(` ${subKey}: ${baby[key][subKey]}`);
                    }

                } else {
                    console.log(`${key}: ${baby[key]}`);
                }
            }
        });
    }

    /**
    * Array of colors used to randomly assign outfit parts.
    * @type {string[]}
    */
    let colors = ["red", "green", "blue", "black", "white", "orange"];

    /**
    * Returns a random color from the `colors` array.
    * @returns {string} A randomly selected color
    */
    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    /**
    * Array that will hold all baby objects.
    * @type {Object[]}
    */
    let babies = [];

    // Creating babies using different object declaration techniques

    // 1. Using object literal syntax

    let firstBaby = {
        name: "Lyla",
        months: 11,
        noises: ["Goo", "Gaa", "Ba"],
        favoriteFoods: ["Mashed carrots", "Milk", "Bananas"]
    };

    babies.push(firstBaby);

    // 2. Using dot notation to assign properties

    let secondBaby = {};

    secondBaby.name = "Ethan";

    secondBaby.months = 12;

    secondBaby.noises = ["Hee", "Haha", "Yay"];

    secondBaby.favoriteFoods = ["Apple puree", "Rice cereal", "Peas"];

    babies.push(secondBaby);

    // 3. Using bracket notation to assign properties

    let thirdBaby = {};

    thirdBaby['name'] = "Ava";

    thirdBaby['months'] = 13;

    thirdBaby['noises'] = ["Baba", "Waa", "La"];

    thirdBaby['favoriteFoods'] = ["Pumpkin", "Oatmeal", "Blueberries"];

    babies.push(thirdBaby);

    let fourthBaby = {};

    let firstCamp = "name";

    let secondCamp = "months";

    let thirdCamp = "noises";

    let fourthCamp = "favoriteFoods";

    // 4. Using computed property names with variables

    fourthBaby[firstCamp] = "Noah";

    fourthBaby[secondCamp] = 10;

    fourthBaby[thirdCamp] = ["Dada", "Uhh", "Tee"];

    fourthBaby[fourthCamp] = ["Avocado", "Sweet potato", "Cheese"];

    babies.push(fourthBaby);

    // Print all babies before adding outfits
    printBabies(babies);

    console.log("\n------------ Outfit Added -------------");

    // Add a random outfit to each baby
    babies.forEach(baby => {

        baby.outfit = {};

        baby.outfit.shirt = randomColor();

        baby.outfit.jumper = randomColor();

        baby.outfit.shoes = randomColor();
    });

    // Print all babies after adding outfits
    printBabies(babies);

    ```

5. Check The Result using the DevTool Console of the Browser
