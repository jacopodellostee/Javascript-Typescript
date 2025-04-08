# Verbing

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create a function called verbing

- It should take a single parameter, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead

- If the string length is less than 3, it should leave it unchanged

For example: 

  - verbing('swim'): 'swimming'

  - verbing('swimming'): 'swimmingly'

  - verbing('go'): 'go'


### Solution Step-by-Step

1. Create the  `08-verbing` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `08-verbing` directory

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
        <title>Verbing</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Verbing</h1>
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
    * Verbing 
    *
    * this file contain one function called 'verbing' where 
    * based on the verb in input return the verbal conjugation
    *  
    */

    /**
    * return the verbal conjugation
    * @param {string} verb - the verb 
    * @returns {string}
    */
    function verbing (verb) {

        if(verb.length < 3) 
            return verb;

        if ((verb.slice(verb.length - 3)) == "ing") 
            return verb + "ly";

        return verb + "ing";
    }

    console.log(verbing("walk"));
    console.log(verbing("swimming"));
    console.log(verbing("go"));
    ```

5. Check The Result using the DevTool Console of the Browser
