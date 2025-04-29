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
