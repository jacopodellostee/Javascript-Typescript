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
