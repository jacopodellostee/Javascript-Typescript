# DogSpeak

**Author**: Jacopo Dell'Oste 

### Request From The Client

Add a method to the String prototype called dogSpeak() that works as follows:

```javascript
    let s = 'We like to learn';

    s.dogSpeak();

    'Dogs are smart'.dogSpeak();

    // Console output

    // We like to learn Woof!

    // Dogs are smart Woof!
```

**Think about the following question**

Is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?


### Solution Step-by-Step

1. Create the  `01-dog-speak` folder

2. Create the the `index.html`, `main.js` files in the appropriate directories

    * the `index.html` file will be in the root

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
        <title>DogSpeak</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>DogSpeak</h1>
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
    * This script extends the native String prototype with a custom method called `dogSpeak`,
    * which appends a barking sound to any string. It demonstrates the use of prototype
    * extension and string manipulation.
    */

    /**
    * Appends a barking sound ("Woof!") to the original string.
    *
    * @function dogSpeak
    * @memberof String.prototype
    * @returns {string} The modified string with "Woof!" appended.
    *
    * @example
    * "Hello ".dogSpeak(); // returns "Hello Woof!"
    */
    String.prototype.dogSpeak = function() {
        return this.toString() + "Woof!";
    };

    let s = "My dog always say ".dogSpeak();

    console.log(s);

    console.log('Dogs are smart '.dogSpeak());
    ```

5. Check The Result using the DevTool Console of the Browser
