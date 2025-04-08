/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Recipe (Bonus)
 *
 * This file contain an array of objects with the information of  
 * multiple recipes, the file also with a foreach loop print on the 
 * console the objects' attribute on the console
 */

let myRecipes = [
    {
        title: "Pasta aglio, olio e peperoncino",
        servings: 1,
        ingredients: ["200g of Pasta", "Garlic Cloves", "Grated Bread", "Flour", "Butter"]
    },
    {
        title: "Milanese Di Pollo",
        servings: 2,
        ingredients: ["Chicken Breast", "Egg", "Grated Bread", "Flour", "Butter"]
    },
    {
        title: "Apple Pie",
        servings: 1,
        ingredients: ["Apples ", "Sugar", "Butter", "Eggs", "Baking Powder", "Vanilla"]
    }
];

// print the array with a foreach loop
myRecipes.forEach(recipe => {
    console.log(recipe.title);
    console.log(recipe.servings);
    recipe.ingredients.forEach(ingredient => {
        console.log(ingredient)
    });
});