# Catwalk (Variant 3)

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

1. Create the  `variant-3` folder, because this file contain the third variant of the exercise

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `variant-3` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Cat Walk (Variant 3)</title>
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
    * This file animates a cat image moving back and forth across the screen.
    * When the cat reaches the center of the viewport, it pauses and switches
    * to an eating animation for 10 seconds before resuming its walk.
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
    * Direction the cat is moving: true for right, false for left.
    * @type {boolean}
    */
    let goingRight = true;

    /**
    * Whether the cat is currently playing the eating animation.
    * @type {boolean}
    */
    let isEating = false;

    /**
    * Animates the cat walking across the screen.
    * When it reaches the center of the screen, the cat switches to
    * an eating GIF for 10 seconds, then resumes walking.
    *
    * @returns {void}
    */
    function catWalk() {

        if (isEating) 
            return;

        if (goingRight) {
            position += 10;

            cat.style.transform = "scaleX(1)";

        } else {
            position -= 10;

            cat.style.transform = "scaleX(-1)";

        }

        cat.style.left = position + "px";

        let middle = window.innerWidth / 2;

        if (position >= middle - 10 && position <= middle + 10) {

            isEating = true;

            cat.src = "https://media.tenor.com/yLeYQw-s1xAAAAAM/cat-eating.gif";

            setTimeout(() => {

                cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

                isEating = false;

                catWalk();
            }, 10000);
        }

        if (position > window.innerWidth - cat.width) 
            goingRight = false;

        if (position < 0) 
            goingRight = true;

        setTimeout(catWalk, 50);
    }

    /**
    * Starts the cat animation once the window has loaded.
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
    * This stylesheet positions the cat image absolutely on the page at a fixed vertical
    * offset (100px from the top) to allow consistent animation across the screen.
    * The cat starts at the left edge and walks horizontally back and forth.
    * Additional JavaScript logic handles pausing in the center and switching animations.
    */

    /* Positions the cat image absolutely and offsets it from the top */
    img {
        position: absolute;
        left: 0;
        top: 100px;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
