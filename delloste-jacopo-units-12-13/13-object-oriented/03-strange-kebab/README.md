# Strange Kebab

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Add a method to the String prototype called `toStrangeKebab()` that transforms strings to kebab-case

```js
    // Given the following array

    const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
    ];

    source.forEach(item => console.log(item.toStrangeKebab()));
```

- The output should exactly match this:

```
my-name-is-my-passport-verify-me
my-name-is-my-passport-verify-me-m-m-m
my-name-is-my-passport-p
m-y-name-is-2023
mynameismypassport
my-name-is
my-name-is
```

**Note**:

- This implementation of kebab-case is not standard. It was invented for this exercise

- You might want to use regular expressions in your solution

### Solution Step-by-Step

1. Create the  `03-strange-kebab` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the root

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

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
        <title>Strange Kebab</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Strange Kebab</h1>
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
    * @file main.js
    * @author Jacopo Dell'Oste
    *
    * @description
    * This script defines a custom String method `toStrangeKebab`, which converts any string
    * into a lowercase, hyphen-separated format, removing symbols and punctuation.
    * The script then processes an array of strings using this method and logs the results.
    */

    /**
    * Original strings to be transformed using the `toStrangeKebab` method.
    *
    * @type {string[]}
    */
    const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
    ];

    /**
    * Converts a string to a "strange kebab-case" format.
    *
    * This method:
    * - Extracts all alphanumeric groups (ignoring punctuation/symbols)
    * - Converts them to lowercase
    * - Joins them using hyphens
    *
    * @function
    * @name toStrangeKebab
    * @memberof String.prototype
    * @returns {string} The transformed kebab-case string
    *
    * @example
    * 'MyNameIsMyPassportVerifyMe'.toStrangeKebab();
    * // returns 'my-name-is-my-passport-verify-me'
    */
    String.prototype.toStrangeKebab = function() {

        let parts = this.match(/[a-zA-Z0-9]+/g) || [];

        parts = parts.map(p => p.toLowerCase());

        return parts.join('-');
    };

    /**
    * Iterates over the source array and logs the transformed strings
    * using the `toStrangeKebab` method.
    *
    */
    source.forEach((str) => {
        console.log(str.toStrangeKebab());
    });
    ```

5. Check The Result using the DevTool Console of the Browser
