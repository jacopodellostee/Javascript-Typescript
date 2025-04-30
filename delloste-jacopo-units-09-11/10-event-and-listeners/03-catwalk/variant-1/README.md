# 

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 



### Solution Step-by-Step

1. Create the  `` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 

    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * 
    * @description
    * This file animates a cat image across the screen from left to right.
    * Once the cat reaches the end of the viewport, it resets to the starting
    * position and continues walking in a loop.
    */

    /**
    * The image element representing the cat.
    * @type {HTMLImageElement}
    */
    let cat = document.querySelector("img");

    /**
    * Current horizontal position of the cat in pixels.
    * @type {number}
    */
    let position = 0;

    /**
    * Moves the cat image to the right across the screen.
    * When it reaches the right edge, it resets the position to 0.
    *
    * @returns {void}
    */
    function catWalk() {

        position += 10;

        cat.style.left = position + "px";

        if (position > window.innerWidth - cat.width) {
            position = 0;
        }

        setTimeout(catWalk, 50);
    }

    /**
    * Starts the cat animation once the window has finished loading.
    *
    * @returns {void}
    */
    window.onload = function () {
        catWalk();
    };
    ```

5. Check The Result using the DevTool Console of the Browser
