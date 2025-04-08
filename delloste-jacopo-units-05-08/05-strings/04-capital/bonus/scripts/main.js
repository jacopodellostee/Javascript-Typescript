/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Capital (Bonus)
 *
 * this file contain one function called 'capital2' that 
 * with a string in input return the string with the first letter of each word capitalized
 *  
 */

/**
 * capitalized the first letter of each word capitalized
 * @param {string} str - the string in input 
 * @returns {string} - 'str' with the first letter of each word capitalized
 */
function capital2(str) {

    let words = str.split(' '); 
    // ["my" "name" "is" "john"]
    let newString = '';

    for (let i = 0; i < words.length; i++) {

        let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        newString += capitalizedWord + ' ';
    }

    return newString
}
    
console.log(capital2("my name is john"));

