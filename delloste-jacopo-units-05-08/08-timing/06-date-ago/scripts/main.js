/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Date ago
 *
 * this file cointain 1 function called 'getDateAgo' 
 * that returns the day of the month, days ago from the specified date
 * in case the days specified are negative, it returns 0 
 */

/**
 * returns the days ago from the specified date 
 * @param {string} date
 * @param {number} days
 * @returns {number}
 */
function getDateAgo(date, days) {

    let newDate = new Date(date);

    if(days < 0) {
        return 0;
    }

    let dayAgo = (newDate.getDate() - days);

    newDate.setDate(dayAgo);
    
    return newDate.getDate();
}

console.log(getDateAgo("August 19, 1975", 1));
console.log(getDateAgo("February 4, 2005", 2));
console.log(getDateAgo("August 19, 1975", -10));