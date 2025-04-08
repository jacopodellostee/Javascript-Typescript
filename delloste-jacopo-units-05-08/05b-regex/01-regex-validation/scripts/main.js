/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * RegExp Validator
 *
 * this file contain 4 RegExp and 1 function called 'validate' 
 * the 4 RegExp are used for validate 4 type of string (in order: E-mail, Phone Number, Password, URL)
 * 
 * the function 'validate' print if the string respect the regular expression
 *  
 */


const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;


const phonePattern = /^(\+?\d{1,4}[-\s]?)?(\d{3,4}[-\s]?){2,3}\d{3,4}$/;


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


const urlPattern = /^(https?|ftp):\/\/([\w-]+\.)+[\w-]{2,4}(\/[\w\-\.~:\/?#\[\]@!$&'()*+,;=%]*)?$/;


/**
 * print on console if the string 'test' respect the RegExp 'pattern'
 * @param {RegExp} pattern
 * @param {string} test
 * @returns {void}
 */
function validate(pattern, test) {

    if (pattern.test(test)) 
        console.log(`${test} Valid`);
    else 
        console.log(`${test} NOT Valid`);
    
}

validate(emailPattern, "jacopo.delloste@edu-its.it");
validate(emailPattern, "jacopo.delledu-its.it");

validate(phonePattern, "+39 351 939 9280");
validate(phonePattern, "123466");

validate(passwordPattern, "A1b2c3!d");
validate(passwordPattern, "abcd1234");

validate(urlPattern, "https://google.com");
validate(urlPattern, "hps://google.com");