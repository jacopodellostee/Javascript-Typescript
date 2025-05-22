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
