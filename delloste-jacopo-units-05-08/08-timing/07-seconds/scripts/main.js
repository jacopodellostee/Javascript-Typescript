/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Seconds
 *
 * this file contains two functions, one called 'getSecondsToday'
 *  and the other is called 'getSecondsToTomorrow':
 *
 * getSecondsToday() returns the seconds of the day
 * getSecondsToTomorrow() returns the seconds to tomorrow
 *
 */

/**
 * returns the seconds of the day
 * @returns {number}
 */
function getSecondsToday() {
    let date = new Date();

    let secondsToday = 0;

    secondsToday += date.getHours() * 3600;
    secondsToday += date.getMinutes() * 60;
    secondsToday += date.getSeconds();

    return secondsToday;
}

/**
 * returns the seconds to tomorrow 
 * @returns {number}
 */
function getSecondsToTomorrow() {
    let date = new Date();

    let secondsTomorrow = 0;

    secondsTomorrow +=  ( 24 - date.getHours()) * 3600;
    secondsTomorrow +=  (60 - date.getMinutes()) * 60;
    secondsTomorrow += 60 - date.getSeconds();

    return secondsTomorrow;
}

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());