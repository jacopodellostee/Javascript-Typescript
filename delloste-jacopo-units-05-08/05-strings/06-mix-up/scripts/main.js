/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * MixUp
 *
 * this file contain 1 function called 'mixUp' that take in input 
 * two strings, and return the concatenation of the two strings (separated by a space) 
 * slicing out and swapping the first 2 characters of each
 *  
 */


/**
 * concatenate two strings (separated by a space) slicing out and swapping the first 2 characters of each
 * @param {string} firstString
 * @param {string} secondString
 * @returns {string}
 */
function mixUp(firstString, secondString) {

    let finalString = "";

    let firstTmpString = firstString.slice(0, 2).concat(secondString.slice(2));

    let secondTmpString = secondString.slice(0, 2).concat(firstString.slice(2));

    finalString =  secondTmpString +  " " + firstTmpString;

    return finalString;
    
}

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

