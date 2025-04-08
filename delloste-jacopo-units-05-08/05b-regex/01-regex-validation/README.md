# Regex validation

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Write regular expressions to validate the following inputs: 


- 1.**Email Address**

  + Expected pattern: [any characters]@[any characters].[2-4 letters]

- 2.**Phone Number**

  + Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]

- 3.**Password**

  + Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character]

- 4.**URL**

  + Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query string]#[optional fragment]

Note: 

  + Invent multiple test cases to thoroughly test your regular expressions

### Solution Step-by-Step

1. Create the  `01-regex-validation` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-regex-validation` directory

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
        <title>ReGex Validator</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>ReGex Validator</h1>
        <p>open the console (F12) to see the output</p>
        
        <!-- End of The Body -->
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
    ```

5. Check The Result using the DevTool Console of the Browser
