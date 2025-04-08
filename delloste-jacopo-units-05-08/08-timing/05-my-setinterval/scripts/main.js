/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * My setInterval
 *
 * this file contains the function called 'mySetInterval' 
 * that recreates the setInterval function using the 
 * setTimeout function but it stops after 15 loops
 */

/**
 * recreate 'SetInterval' using the function 'setTimeOut'
 * @param {function} functionToExecute
 * @param {number} interval
 * @returns {void}
 */
function mySetInterval(functionToExecute, interval) {

    let intervalCounter = 0;

    if(typeof functionToExecute === "function") {

        /**
         * execute the function we passed as a parameter to mySetInterval
         * the interval will stop after 15 loops
         * @returns {void}
         * 
         */
        function runTheFunction() {
            if(intervalCounter < 15){
                // invoke the function passed as a parameter
                functionToExecute();
                intervalCounter++;
        
                setTimeout(runTheFunction, interval);
            } else {
                console.log("Interval stopped after 15 loops");
            }
        }

        setTimeout(runTheFunction, interval);

    } else {
        console.log("Parameter is not a function");
        return;
    }

}

/**
 * print "Test" on the console
 * @returns {void}
 */
function printTest() {
    console.log("Test");
} 

// test if the control works correctly
mySetInterval("printTest", 1000);

// set an interval to the function 'printTest'
mySetInterval(printTest, 1000);