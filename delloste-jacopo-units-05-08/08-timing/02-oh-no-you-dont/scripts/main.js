/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Oh no you Don't
 *
 * this function contains 2 function
 * 'usefulFunction' print Something Useful... literally
 * 'cancelFunction' cancel the timeOut of the other function
 */

/**
 * print 'Something Useful...' on the console
 * @returns {void}
 */
function usefulFunction() {
    console.log("Something Useful...");
}

/**
 * clear the timeOut with ID passed as a parameters
 * and print that the function has been canceled 
 * @param {string} timeOutToCancel
 * @returns {void}
 */
function cancelFunction(timeOutToCancel) {
    clearTimeout(timeOutToCancel);

    console.log("function cancelled");
}

let usefulTimeID = setTimeout(usefulFunction, 10000);

let cancelTimeID = setTimeout(cancelFunction, 5000, usefulTimeID);