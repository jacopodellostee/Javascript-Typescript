/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Credit Card Validator
 *
 * this file contain 2 function
 * 'validateCreditCard' validate a card following determinated rules and
 *  return an object with the validation result
 * 'printResult' print on the console the result object in a pretty format
 */

/**
 * validate a credit card's numbers following 4 rules: 
 *      1. no letter
 *      2. last digit must be even
 *      3. at leat 2 different digit
 *      4. digit's sum greater than 16
 * @param {string} creditCard
 * @returns {object}
 */
function validateCreditCard(creditCard) {

    let cardValid = true;

    let error = "";

    let tmpCreditCard = creditCard.replace(/-/g, ""); 

    // number must be 16 digits, all of them must be numbers
    const pattern = /^\d{16}$/gm;

    if(!pattern.test(tmpCreditCard)) {
        cardValid = false;
        error = "invalid_characters";
    }
    
    //The final digit must be even
    let lastDigit = parseInt(tmpCreditCard.charAt(tmpCreditCard.length - 1));

    if (lastDigit % 2 !== 0) { 
        cardValid = false;
        error = "final_digit_not_even";
    }

    // The sum of all the digits must be greater than 16
    let total =  0;

    for (let i = 0; i < tmpCreditCard.length; i++) {
        total += parseInt(tmpCreditCard.charAt(i))
    }

    if (total < 16) { 
        cardValid = false;
        error = "sum_not_grater_16";
    }

    // You must have at least two different digits represented (all of the digits cannot be the same)

    // a Set only have unique number,
    // if the size is 1, than there is only 1 number repeated in the credit card
    let uniqueDigits = new Set(tmpCreditCard);

    if (uniqueDigits.size < 2) {
        cardValid = false;
        error = "only_one_digit";
    }

    let result = {
        valid: cardValid,
        number: creditCard
    }

    if(!cardValid) 
        result.error = error;

    return result;

}

/**
 * print the result object of the validation of the credit card 
 * in a pretty format
 * @param {object} result
 * @returns {void}
 */
function printResult(result) {

    console.log("================================");

    console.log(`= number : ${result.number} =`);

    if(result.valid)
        console.log(`= valid : ${result.valid}                 =`);
    else
    console.log(`= valid : ${result.valid}                =`);
    
    
    if (result.error == "invalid_characters") 
        console.log(`= error : ${result.error}   =`);

    if (result.error == "final_digit_not_even") 
        console.log(`= error : ${result.error} =`);

    if (result.error == "sum_not_grater_16") 
        console.log(`= error : ${result.error}    =`);

    if (result.error == "only_one_digit") 
        console.log(`= error : ${result.error}       =`);
    

    console.log("================================");
}

// print the result
let result = validateCreditCard("9999-9999-8888-0000");
printResult(result)

result = validateCreditCard("9169-9239-4458-9712");
printResult(result)

result = validateCreditCard("a923-3211-9c01-1112");
printResult(result)

result = validateCreditCard("6666-6666-6666-6661");
printResult(result)

result = validateCreditCard("1111-1111-1111-1110");
printResult(result)

result = validateCreditCard("4444-4444-4444-4444");
printResult(result)