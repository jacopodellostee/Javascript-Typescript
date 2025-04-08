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

	if(quantity > 1)
		result = animal + "s";
    else
        result = animal;

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