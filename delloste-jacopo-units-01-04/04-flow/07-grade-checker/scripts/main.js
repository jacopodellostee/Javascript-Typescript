/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the function 'assignGrade'
 *
 * this file create a function called 'assignGrade' that takes in input 
 * a numberic score and return the grade in american notation of the gap where the score is in.
 * In case the score is an invalid number, the grade is 'N/A' (Not Available)
 */

/**
 * Return the american grade based on the score the user gives in input
 * 
 * @param {number} score - the score of the user 
 * @returns {string} the grade the user get 
 */
function assignGrade(score) {
    let grade;
    
    // switch case cannot be used (Unlike C)
    if (score > 0 && score <= 20){
        grade = "F";
    } else if (score > 20 && score <= 40){
        grade = "D";
    } else if (score > 40 && score <= 60){
        grade = "C";
    } else if (score > 60 && score <= 80){
        grade = "B";
    } else if (score > 80 && score <= 100){
        grade = "A";
    } else{
        grade = "N/A";  
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
printResult(22);
printResult(45);
printResult(69);
printResult(92);
printResult(-1);  
