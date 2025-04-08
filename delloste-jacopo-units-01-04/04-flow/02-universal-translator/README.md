# Universal Translator

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Universal Translator

- Write a function named helloWorld that:

    * takes 1 parameter, a language code (e.g. "es", "de", "en")

    * returns "Hello, World" for the given language, for at least 3 languages. It should default to
    returning English.

- Call that function for each of the supported languages and log the result to
make sure it works.



### Solution Step-by-Step

1. Create the  `02-universal-translator` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-universal-translator` directory

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
        <title>Universal Translator</title>
    </head>
    <body>
        <h1>Universal Translator</h1>

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
    ```

5. Check The Result using the DevTool Console of the Browser
