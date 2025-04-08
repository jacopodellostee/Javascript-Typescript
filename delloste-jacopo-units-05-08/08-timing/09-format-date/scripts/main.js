/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

/**
 * Description
 * @param {Date} date
 * @returns {void}
 */
function formatDate (date) {
    let currentDate = new Date();

    if( (currentDate.getSeconds() - date.getSeconds()) < 1 ) {
        console.log("Right now");
        return;
    }

    if( (currentDate.getMinutes() - date.getMinutes()) < 1 ) {
        console.log(currentDate.getSeconds() - date.getSeconds() + " sec. ago");
        return;
    }

    if( (currentDate.getHours() - date.getHours()) < 1 ) {
        console.log(currentDate.getMinutes() - date.getMinutes() + " min. ago");
        return;
    }

    console.log(date);
}

formatDate(new Date());

/*
 *  !! IMPORTANT !!
 *  for testing this function you need to change the date in the formatDate based on your the current date:
*/

formatDate(new Date("March 29, 2025 15:18:00"));

formatDate(new Date("March 29, 2025 15:1:00"));

formatDate(new Date("March 29, 2025 00:00:00"));
