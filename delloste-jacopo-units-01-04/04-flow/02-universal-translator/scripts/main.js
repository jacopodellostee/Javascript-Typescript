/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'helloWorld'
 *
 * this file create a function called 'assignGrade' that takes a 
 * language in input and return the string "Hello World" in the selected 
 * language, in case the language doesn't exist the function return the
 * "Hello World" in english
 *  
 */

/**
 * translate the message "Hello World!" in the selected language
 * @param {string} language - the language selected
 * @returns {string} "Hello World" translated in the selected language
 */
function helloWorld(language) {
    let helloWorld1
    switch (language) {
        case "en":
            helloWorld1 =  "Hello World!";
            break;
        case "it":
            helloWorld1 = "Ciao Mondo!";
            break;
        case "du":
            helloWorld1 =  "Hallo Wereld!";
        case "jp":
            helloWorld1 =  "こんにちは世界!";
        default:
            helloWorld1 =  "Hello World!";
    }

    return helloWorld1;
}

/**
 * print the result of the function 'helloWorld' on the console
 * 
 * @param {number} language - the language selected
 * @returns {void}
 */
function printResult(language) {
    console.log(helloWorld(language));
}

printResult("en");
printResult("it");
printResult("du");
printResult("jp");
printResult("ITS");