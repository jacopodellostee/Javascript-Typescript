# Grade checker

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Grade checker

- Write a loop that tests the function that you wrote earlier “assignGrade”.

- Check every value from 60 to 100:

    * your log should show

        + “For 88, you got a B.”

        + “For 89, you got a B.”

        + “For 90, you got an A.”

        + etc.




### Solution Step-by-Step

1. Create the  `07-grade-checker` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `07-grade-checker` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grade Checker</title>
    </head>
    <body>
        <h1>Grade Checker</h1>

        <!-- End of Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
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

    ```

5. Check The Result using the DevTool Console of the Browser
