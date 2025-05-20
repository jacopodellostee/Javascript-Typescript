# Soundwave

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Given the following array

```javascript
    let noisesArray = ['quack', 'sneeze', 'boom'];
```

Produce the following array, then print it to the console

```javascript
    ['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!'];
```

### Solution Step-by-Step

1. Create the  `01-soundwave` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-soundwave` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jacopo Dell'Oste">
        <title>Soundwave</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Soundwave</h1>
        <p>open the console (F12) to see the output</p>

        <!-- End of Body-->
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
    * This file processes an array of noise strings and generates
    * variations of each word by capitalizing one character at a time
    * and appending a growing number of exclamation marks. Each variation
    * is logged to the console.
    */

    /**
    * An array containing the initial noise strings to process.
    * @type {string[]}
    */
    let noisesArray = ['quack', 'sneeze', 'boom'];

    /**
    * Iterates through each noise in the `noisesArray`, then for each character
    * in the word, produces a new variation with one uppercase character and
    * increasing exclamation marks. Each variation is printed to the console.
    */
    noisesArray.forEach(noise => {
        let newNoise;

        for (let i = 0; i < noise.length; i++) {
            
            newNoise = noise.slice(0, i) + noise.charAt(i).toUpperCase() + noise.slice(i + 1) + '!'.repeat(i + 1);
            
            console.log(newNoise);        
        }
    });
    ```

5. Check The Result using the DevTool Console of the Browser
