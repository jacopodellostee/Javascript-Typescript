# Enhanced Catwalk

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Start with the code from the previous ‘Catwalk’ exercise

    +  Add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’

    +  Add an area to display info

    +  When the start button is clicked the cat should start moving across the screen

    +  The cat should stop moving when the stop button is clicked

    +  The cat moves faster when the faster button is clicked and slower when the slower button is clicked

    +  Show the current speed on screen in the info area

    +  Disable the start/stop/faster/slower buttons at the appropriate times

        - e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving


**Task**: 

### Solution Step-by-Step

1. Create the  `04-enhanced-catwalk` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `04-enhanced-catwalk` directory

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
        <title>Enchanced Catwalk</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body  -->
        <div id="displayInfo"></div>

        <div>
            <input type="button" value="Start" id="start">
            <input type="button" value="Faster" id="faster">
            <input type="button" value="Slower" id="slower">
            <input type="button" value="Stop" id="stop">
        </div>

        <div>
            <img id="cat" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
        </div>

        <!-- End of The Body  -->
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
    * This file animates a cat image walking back and forth across the screen.
    * Users can start, stop, increase, or decrease the cat's speed using
    * corresponding buttons. Speed information is displayed dynamically.
    */

    /**
    * The image element representing the cat.
    * @type {HTMLImageElement}
    */
    let cat = document.querySelector("img");

    /**
    * The element that displays current speed information.
    * @type {HTMLElement}
    */
    let info = document.getElementById("displayInfo");

    /**
    * Button to start the cat animation.
    * @type {HTMLButtonElement}
    */
    let start = document.getElementById("start");

    /**
    * Button to increase the cat's speed.
    * @type {HTMLButtonElement}
    */
    let faster = document.getElementById("faster");

    /**
    * Button to decrease the cat's speed.
    * @type {HTMLButtonElement}
    */
    let slower = document.getElementById("slower");

    /**
    * Button to stop the cat animation.
    * @type {HTMLButtonElement}
    */
    let stop = document.getElementById("stop");

    /**
    * Current horizontal position of the cat in pixels.
    * @type {number}
    */
    let position = 0;

    /**
    * Speed of the cat's movement in pixels per interval.
    * @type {number}
    */
    let speed = 10;

    /**
    * Direction the cat is moving: true for right, false for left.
    * @type {boolean}
    */
    let goingRight = true;

    /**
    * Reference to the interval controlling the cat's movement.
    * @type {?number}
    */
    let catInterval = null;

    /**
    * Animates the cat walking across the screen at the current speed.
    * The cat flips direction when reaching the edge of the window.
    *
    * @returns {void}
    */
    function catWalk() {
        if (goingRight) {
            position += speed;

            cat.style.transform = "scaleX(1)";

        } else {
            position -= speed;

            cat.style.transform = "scaleX(-1)";

        }

        cat.style.left = position + "px";

        if (position > window.innerWidth - cat.width)
            goingRight = false;

        if (position < 0)
            goingRight = true;

        showInfo();
    }

    /**
    * Displays the current speed in the info display element.
    *
    * @returns {void}
    */
    function showInfo() {
        info.textContent = `The cat is going at a speed of ${speed}`;
    }

    /**
    * Increases the cat's speed by 5 pixels per interval.
    *
    * @returns {void}
    */
    function goFaster() {
        speed += 5;
        showInfo();
    }

    /**
    * Decreases the cat's speed by 5 pixels per interval, down to a minimum of 1.
    *
    * @returns {void}
    */
    function goSlower() {
        if (speed > 1) 
            speed -= 5;

        showInfo();
    }

    // Stop button event listener
    stop.addEventListener('click', () => {
        clearInterval(catInterval);

        catInterval = null;

        stop.disabled = true;

        faster.disabled = true;

        slower.disabled = true;

        start.disabled = false;

    });

    // Start button event listener
    start.addEventListener('click', () => {
        if (!catInterval) {
            catInterval = setInterval(catWalk, 50);
            
            start.disabled = true;
            
            faster.disabled = false;
            
            slower.disabled = false;
            
            stop.disabled = false;
            
        }
    });

    // Faster button event listener
    faster.addEventListener('click', goFaster);

    // Slower button event listener
    slower.addEventListener('click', goSlower);

    // Initialize info display on load
    window.onload = showInfo;
    ```

    * The CSS code:

    ```css 
    /**
    * style.css
    * 
    * This stylesheet positions the cat image absolutely on the page using its ID selector.
    * The image is aligned to the left edge of the screen and offset 0 pixels from the top.
    * This setup allows the JavaScript logic to move the cat horizontally across the screen
    * while preserving its vertical alignment.
    */

    /* Positions the cat image absolutely for horizontal movement */
    #cat {
        position: absolute;
        left: 0;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
