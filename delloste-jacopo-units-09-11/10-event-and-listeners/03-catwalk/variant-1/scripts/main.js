/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let cat = document.querySelector("img");

let position = 0;

function catWalk() {

    position += 10;
    
    cat.style.left = position + "px";

    if (position > window.innerWidth - cat.width) {
        position = 0;
    }

    setTimeout(catWalk, 50);
}

window.onload = function () {
    catWalk();
};