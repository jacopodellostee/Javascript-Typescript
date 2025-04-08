/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'calcolateDogYear'
 *
 *  this file create a function called 'calculateDogAge' that 
 *  calculate tha age in dog year from an age in human year and a 
 *  selected conversion rate 
 */

/**
 * converte and print in the console the age from human year converted in dog year
 * @param {number} dogAgeHumanYear -  the age in human years 
 * @param {number} conversionRate  - the conversion rate 
 * @returns {number} the age in dog years 
 */
function calculateDogAge(dogAgeHumanYear, conversionRate) {
    let dogAgeDogYear = dogAgeHumanYear * conversionRate;
    console.log("Your dog is " + dogAgeDogYear + " in dog years!");
}

calculateDogAge(10, 7);
calculateDogAge(5, 3);
calculateDogAge(1, 12);