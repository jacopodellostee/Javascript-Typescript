# Recipe 

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create an object to hold information on your favorite recipe. It should have
properties for title (a string), servings (a number), and ingredients (an
array of strings).

- On separate lines (one console.log statement for each), log the recipe
information

- Bonus: Create an array that holds several recipes and log them all

### Solution Step-by-Step

1. Create the  `solution` folder, because this is the script for the basic solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `solution` directory

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
        <title>Recipe</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Recipe</h1>
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
    * Recipe
    *
    * This file contain an object with the information of my 
    * favorite recipe, the file also print on the console the object's
    * attribute
    */

    let favRecipe = {
        title: "Milanese Di Pollo",
        servings: 1,
        ingredients: ["Chicken Breast", "Egg", "Grated Bread", "Flour", "Butter"]
    }

    console.log(favRecipe.title);
    console.log(favRecipe.servings);
    console.log(favRecipe.ingredients[0]);
    console.log(favRecipe.ingredients[1]);
    console.log(favRecipe.ingredients[2]);
    console.log(favRecipe.ingredients[3]);
    console.log(favRecipe.ingredients[4]);
    ```

5. Check The Result using the DevTool Console of the Browser
