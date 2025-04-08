/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Weekday
 *
 * this file contain 3 function
 * 'getWeekDayEN' get the day of the date in english
 * 'getWeekDayIT' does the same in italian
 * 'getWeekDay' invoke the previous functions based 
 * on the language selected
 */

/**
 * return the day in short format of the selected date in english 
 * @param {Date} date
 * @returns {string}
 */
function getWeekDayEN(date) {

    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    return days[date.getDay() - 1];
}

/**
 * return the day in short format of the selected date in italian 
 * @param {Date} date
 * @returns {string}
 */
function getWeekDayIT(date) {

    let days = ["LU", "MA", "ME", "GI", "VE", "SA", "DO"];

    return days[date.getDay() - 1];
}


/**
 * return the day in short format of the selected date 
 * in the selected language 
 * @param {Date} date
 * @param {string} language
 * @returns {string}
 */
function getWeekDay(date, language) {
    if (language == "it") 
        return getWeekDayIT(date);
    else
        return getWeekDayEN(date);
}

let myDate = new Date("March 25 2025");

console.log(getWeekDay(myDate, "it"));
console.log(getWeekDay(myDate, "en"));