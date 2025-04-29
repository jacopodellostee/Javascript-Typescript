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
