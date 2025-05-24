# Baby Processing

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Using the babies array from the previous exercise:

- Write a getBabyOutfit() function that returns a description a baby's outfit

    + e.g 

        ```js
        "Lyla is wearing a blue shirt and red pants and a green hat"
        ```

- Write a feedBaby() function that prints what a baby is eating.

    + e.g. 

        ```js
        "Lyla is eating food3, food1, food4 and food2"
        ```

    + All foods in favoriteFoods should appear but randomly each time the function is called

Run both function on all the babies

### Solution Step-by-Step

1. Create the  `03-baby-processing` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `03-baby-processing` directory

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
        <title>Baby Processing</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Baby Processing</h1>
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
    * The script prints each baby's outfit and food preferences.
    */

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
    * Prints a description of the baby's outfit using the `outfit` property.
    * It formats the sentence to include 'and' before the last item.
    * 
    * @param {Object} baby - A baby object with an `outfit` property
    */
    function getBabyOutfit(baby) {
        let string = `${baby.name} is wearing `;

        let keys = Object.keys(baby.outfit);

        keys.forEach((key, index) => {
            let clothes = baby.outfit[key];
            
            let isLast = index === keys.length - 1;

            isLast ? string += `a ${clothes} ${key}.` : string += `a ${clothes} ${key} and `;
        });

        console.log(string);
    }

    /**
    * Prints what the baby is eating by randomly shuffling their favorite foods
    * and formatting the output with commas and "and" before the last item.
    * 
    * @param {Object} baby - A baby object with a `favoriteFoods` array
    */
    function feedBaby(baby) {
        let foods = baby.favoriteFoods;

        // Shuffles the array using a random comparator
        let shuffled = foods.sort(() => 0.5 - Math.random());

        let string = `${baby.name} is eating `;

        shuffled.length === 1 ? string += shuffled[0] : string += shuffled.slice(0, -1).join(', ') + ' and ' + shuffled[shuffled.length - 1];

        console.log(string);
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

    // 4. Using computed property names with variables
    let fourthBaby = {};

    let firstCamp = "name";

    let secondCamp = "months";

    let thirdCamp = "noises";

    let fourthCamp = "favoriteFoods";

    fourthBaby[firstCamp] = "Noah";

    fourthBaby[secondCamp] = 10;

    fourthBaby[thirdCamp] = ["Dada", "Uhh", "Tee"];

    fourthBaby[fourthCamp] = ["Avocado", "Sweet potato", "Cheese"];

    babies.push(fourthBaby);


    // Add a random outfit to each baby
    babies.forEach(baby => {
        baby.outfit = {};

        baby.outfit.shirt = randomColor();

        baby.outfit.jumper = randomColor();

        baby.outfit.shoes = randomColor();

    });


    // Describe each baby's outfit and food
    babies.forEach(baby => {
        getBabyOutfit(baby);
        feedBaby(baby);
    });
    ```

5. Check The Result using the DevTool Console of the Browser
