/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

let button = document.getElementById("gen-button");

function makeStory() {

    let story = document.getElementById("story");

    let noun = document.getElementById("noun").value;

    let adjective = document.getElementById("adjective").value;
    
    let person = document.getElementById("person").value;

    story.textContent = `${person} really likes ${adjective} ${noun}`;
}

button.addEventListener('click', makeStory);