/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * The Group
 *
 * this file contain 2 functions, one called 'aContainsb' and the other called 'group'
 *  'aContainsb' return if the string 'a' contain the substring 'b'
 *  'group' use the previous function for tell if a guy is a member of a determinated gruop and print the result on the console
 */

/**
 * return if a contains b
 * @param {string} a - the string 
 * @param {string} b - the substring
 * @returns {boolean}
 */
function aContainsb(a, b) {
    return a.includes(b);
}

/**
 * print on the console if the guy is part of the group
 * @param {string} group - the gropu of friend
 * @param {string} guy - the guy selected
 * @returns {void}
 */
function group(group, guy) {
    if(aContainsb(group, guy))
        console.log(guy + " IS part of the group");
    else
        console.log(guy + " is NOT part of the group");
}

group("Mary, James, and John", "James");
group("Mary, James, and John", "Jacopo");