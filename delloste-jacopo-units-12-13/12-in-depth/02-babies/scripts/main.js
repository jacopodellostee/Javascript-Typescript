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
