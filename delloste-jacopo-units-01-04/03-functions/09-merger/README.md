# Merger

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Merger

Write a function called merger() that takes two parameters and performs the
following operation:

- If both parameters are numbers, return the sum

- If both parameters are strings, return the concatenation of the strings

- If the parameters are anything else, return null

Include a doc file in which you explain why two operators might have the same
symbol but work differently based on the type of the parameters

### Solution Step-by-Step

1. Create the  `09-merger` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `09-merger` directory

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
        <title>Merger</title>
    </head>
    <body>
        <h1>Merger</h1>

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
    * Merger
    *
    * create a function that based of the type of parameter you pass return:
    *  The Arithmetic Sum
    *  The Concat of Two String
    *  Null
    * 
    *  All of this is possible with the '+' operator of JavaScirpt
    */


    /**
    * return arithmetic sum, concatenate strings or null based on the parameters 
    * @param {any} param1
    * @param {any} param2
    * @returns {any}
    */
    function merger(param1, param2) {

        if (typeof param1 === 'string' && typeof param2 === 'string') {
            return param1 + param2;  
        }

        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;  
        }

        return null;
    }

    console.log(merger("Hello", " World"));
    console.log(merger(4, 5));
    console.log(merger("Hello", 5));
    ```

5. Check The Result using the DevTool Console of the Browser

# Why does the '+' operator return different values ​​based on the passed values?

This is because of a JavaScript feature called **Type Coercion**, which means thet JavaScript automatically convert the values ​​to an appropriate type depending on the context.

Useful Link: [Link](https://medium.com/@atuljha2402/understanding-javascript-type-coercion-type-conversion-a2ce84c00331#:~:text=Type%20coercion%20refers%20to%20the,complete%20the%20operation%20or%20comparison.)
