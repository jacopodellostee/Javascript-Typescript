/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'assignGrade'
 *
 * this file create a function called 'assignGrade' that takes in input 
 * a numberic score and return the grade in american notation
 * if the score isn't among the few selected it returns "F"
 */

/**
 * Return the american grade based on the score the user gives in input
 * 
 * @param {number} score - the score of the user 
 * @returns {string} the grade the user get 
 */
function assignGrade(score) {
    let grade;
    
    switch (score) {
        case 10:
            grade = "A"
            break;
        case 9:
            grade = "B";
            break;
        case 8:
            grade = "C";
            break;
        case 7:
            grade = "C";
            break;
        default:
            grade = "F";
            break;
    }

    return grade;
}

/**
 * print the result of the function 'assignGrade' on the console in a complete sentence
 * 
 * @param {number} score - the score of the user 
 * @returns {void}
 */
function printResult(score) {
    console.log("Your score is " + score + " and the grade is an " + assignGrade(score));
}



printResult(10);
printResult(9);
printResult(8);
printResult(7);
printResult(1);
printResult(100);  
