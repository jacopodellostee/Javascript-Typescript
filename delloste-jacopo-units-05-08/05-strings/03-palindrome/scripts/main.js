/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Palindrome
 *
 * this file contain 2 function: 
 *  the function 'reverse' that take one string in input and return the string reversed
 *  the fuction 'isPalindrome' that use the previus function for calculate whanever the selected string is palindrome or not
 * 
 */

/**
 * return the reversed string 
 * @param {string} str - the string selected
 * @returns {void}
 */
function reverse(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }

    return newString;
}

/**
 * return if a string is palindrome or not
 * @param {string} str - the string selected
 * @returns {boolean}
 */
function isPalindrome(str){

    if(str == reverse(str))
        return true;
    else
        return false;
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("alice"));