# Not Bad

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called notBad that takes a single parameter, a string

- It should find the first appearance of the substring 'not' and 'bad'

- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
'good' and return the result

- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
sentence

For example:

  - notBad('This dinner is not that bad!'): 'This dinner is good!'

  - notBad('This movie is not so bad!'): 'This movie is good!'

  - notBad('This dinner is bad!'): 'This dinner is bad!'


### Solution Step-by-Step

1. Create the  `09-not-bad` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `09-not-bad` directory

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
        <title>Not Bad</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Not Bad</h1>
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
    * Not Bad
    *
    * this file contain 1 function called 'notBad' that take 1 strings in input 
    * with a statement that something is not bad return the string saying that
    * something is good (if something is not bad, its means it's good)
    *  
    */

    /**
    * convert something that is not bad in good (not bad = good)
    * @param {string} string - the string in input
    * @returns {string} - the string modified
    */
    function notBad (string) {

        if(string.includes("not") && string.includes("bad")) {
            let indexOfNot = string.indexOf("not");
            let indexOfBad = string.indexOf("bad");

            if (indexOfNot < indexOfBad) {
                // Prende la parte prima di "not" + "good" + parte dopo "bad"
                string = string.slice(0, indexOfNot) + "good" + string.slice(indexOfBad + 3);
            }
        }
        return string;
    }

    console.log(notBad("This dinner is not that bad!"));
    console.log(notBad("This movie is not so bad!"));
    console.log(notBad("This dinner is bad!"));
    ```

5. Check The Result using the DevTool Console of the Browser
