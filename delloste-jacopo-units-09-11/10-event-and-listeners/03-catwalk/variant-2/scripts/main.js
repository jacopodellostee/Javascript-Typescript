/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let cat = document.querySelector("img");

let position = 0;

let goingRight = true;

function catWalk() {

    if (goingRight) {

        position += 10;

        cat.style.transform = "scaleX(1)"; 

    } else {
        
        position -= 10;

        cat.style.transform = "scaleX(-1)";

    }

    cat.style.left = position + "px";

    if (position > window.innerWidth - cat.width) 
        goingRight = false;

    if (position < 0) {
        goingRight = true;
    }

    setTimeout(catWalk, 50);
}

window.onload = function () {
    catWalk();
};