# Catwalk (Variant 1)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Start with the following HTML:

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Cat Walk</title>
        </head>
    <body>

        <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

    </body>
    </html>

```
- The cat should start from the left side of the screen

- Write a function ‘catWalk()’ that moves the cat 10 pixels to the right

- Make the cat move across the screen by calling that function every 50ms

- Write different versions of the function to handle the following variants:

    
    + Variant 1: When the cat reaches the right side of the screen it should restart from the left
    
    + Variant 2: When the cat reaches the right side of the screen, it should move backwards. When it reaches the left it should move forwards
    
    + Variant 3: When the cat reaches the middle of the screen, replace the img with a different cat image. Keep it in the middle for 10 seconds, and then replace the img with the original image and have it continue the walk as in variant 2

### Solution Step-by-Step

1. Create the  `variant-1` folder, because this file contain the first variant of the exercise

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `variant-1` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Catwalk (Variant 1)</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content Of The Body -->
        <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

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

    * The CSS code:

    ```css 
    /**
    * style.css
    *  
    * This stylesheet positions the cat image absolutely on the page so it can
    * be animated across the screen using JavaScript. The cat starts at the
    * left edge and walks rightward, resetting when it reaches the end of the viewport.
    */

    /* Positions all images absolutely to allow movement across the screen */
    img {
        position: absolute;
        left: 0;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
