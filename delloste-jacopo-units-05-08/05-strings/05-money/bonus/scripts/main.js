/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Money (Bonus)
 *
 * this file contain 1 function called 'money' that 
 * with an ammount of money returns in input returns
 * the ammount concatenated with the string 'dollars' 
 * and the conversion in euros
 */


/**
 * return the string with the ammount of money and the string 'dollars' and the conversion in euros 
 * @param {number} ammount - the ammount of money 
 * @returns {string} - the modified string
 */
function money(ammount) {
    
    let newString = "";

    // 1 $ = 0.92 €
    let euro = ammount * 0.92;

    newString = "" + ammount + " " + "dollars are " + euro.toFixed(2) +  " euros";

    return newString;
}

console.log(money(10))
console.log(money(1000000))