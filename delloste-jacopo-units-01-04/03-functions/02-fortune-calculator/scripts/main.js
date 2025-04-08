/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'tellFortune'
 *
 *  this file create a function called 'tellFortune' that 
 *  print on the console your fortune with the parameter you 
 *  use when you call it
 *  
 */



/**
 * print in the console your fortune
 * @param {string} partner - name of the partner 
 * @param {number} numberOfChildren - how many childern you have
 * @param {string} country - country you live in 
 * @param {string} job - your job
 * @returns {void}
 */
function tellFortune(partner, numberOfChildren, country, job){
    console.log("You will be a " + job + " in " + country + ", and married to " + partner + " with " + numberOfChildren + " kids.");
}

// call the function
tellFortune("Maria", 4, "Italy", "Web Developer");
tellFortune("Anna", 2, "Germany", "Cybersecurty Specialist");
tellFortune("Alice", 0, "Belgium", "Game Designer");