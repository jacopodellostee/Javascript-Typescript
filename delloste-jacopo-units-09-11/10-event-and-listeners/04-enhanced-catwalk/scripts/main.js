/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let cat = document.querySelector("img");

let info = document.getElementById("displayInfo");

let start = document.getElementById("start");

let faster = document.getElementById("faster");

let slower = document.getElementById("slower");

let stop = document.getElementById("stop");

let position = 0;

let speed = 10;

let goingRight = true;

let catInterval = null;


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

function showInfo() {
    
    info.textContent = `The cat is going at a speed of ${speed}`;
}

function goFaster() {

    speed += 5;

    showInfo();
}

function goSlower() {

    if (speed > 1) 
        speed -= 5;

    showInfo();
}

stop.addEventListener('click', () => {

    clearInterval(catInterval);

    catInterval = null;

    stop.disabled = true;

    faster.disabled = true;

    slower.disabled = true;

    start.disabled = false;

})

start.addEventListener('click', () => {
    if (!catInterval) {

        catInterval = setInterval(catWalk, 50);

        start.disabled = true;

        faster.disabled = false;

        slower.disabled = false;

        stop.disabled = false;
    }
});

faster.addEventListener('click', goFaster);

slower.addEventListener('click', goSlower);

window.onload = showInfo;

