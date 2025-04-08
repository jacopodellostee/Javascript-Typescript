/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Money
 *
 * this file contain 1 function called 'money' that 
 * with an ammount of money returns in input returns
 * the ammount concatenated with the string 'dollars'
 *  in case someone have more than 1000000 dollars he will have a funny surprise
 */


/**
 * return the string with the ammount of money and the string 'dollars' 
 * @param {number} ammount - the ammount of money 
 * @returns {string} - the modified string
 */
function money(ammount) {
    
    let newString = "";

    if(ammount < 1000000)
        newString = "" + ammount + " " + "dollars";
    else
        newString = "" + ammount + " " + "dollars ;)";

    return newString;
}

console.log(money(10))
console.log(money(1000000))