/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This file animates a cat image moving horizontally across the screen,
 * bouncing back when it reaches the left or right edge. The cat image flips
 * direction visually using CSS transforms to simulate turning around.
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
 * Direction the cat is moving: true if rightward, false if leftward.
 * @type {boolean}
 */
let goingRight = true;

/**
 * Animates the cat walking back and forth across the screen.
 * The cat flips horizontally depending on the direction.
 *
 * @returns {void}
 */
function catWalk() {

    if (goingRight) {
        position += 10;
        cat.style.transform = "scaleX(1)"; // Face right
    } else {
        position -= 10;
        cat.style.transform = "scaleX(-1)"; // Face left
    }

    cat.style.left = position + "px";

    if (position > window.innerWidth - cat.width) {
        goingRight = false;
    }

    if (position < 0) {
        goingRight = true;
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
