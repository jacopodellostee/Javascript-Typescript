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

let isEating = false;


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

window.onload = function () {
    catWalk();
};