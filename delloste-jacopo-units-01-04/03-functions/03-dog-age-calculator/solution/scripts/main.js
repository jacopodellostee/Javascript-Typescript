/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'calcolateDogYear'
 *
 *  this file create a function called 'calculateDogAge' that 
 *  calculate tha age in dog year from an age in human year 
 */

/**
 * converte and print in the console the age from human year converted in dog year
 * @param {number} dogAgeHumanYear -  the age in human years 
 * @returns {number} the age in dog years 
 */
function calculateDogAge(dogAgeHumanYear) {
    let dogAgeDogYear = dogAgeHumanYear * 7;
    console.log("Your dog is " + dogAgeDogYear + " in dog years!");
}

calculateDogAge(10);
calculateDogAge(5);
calculateDogAge(1);