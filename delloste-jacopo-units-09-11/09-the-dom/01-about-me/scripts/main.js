/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * @description
 * About Me
 * 
 *  This script customizes the provided HTML template by:
 *  - Changing the font family of the body to "Arial, sans-serif"
 *  - Replacing the content of specific spans (nickname, favorites, hometown) with personal data
 *  - Iterating through all <li> elements and adding a class "list-item"
 *  - Dynamically creating and appending an image
 *  - Dynamically adding an external CSS file after a 4-second delay
 */

// Change the body style so it has a font-family of "Arial, sans-serif"

let body = document.body;

// Change the body style so it has a font-family of "Arial, sans-serif"

body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) with your own information

let nickname = document.getElementById("nickname");

nickname.textContent = "dellwolf25";

let favorites = document.getElementById("favorites");

favorites.textContent = "Videogames, Comics, Music";

let hometown = document.getElementById("hometown");

hometown.textContent = "Casale Monferrato";

// Iterate through each li and change the class to "list-item"

let allListItems = document.getElementsByTagName("li");

for (let i = 0; i < allListItems.length; i++) {

    allListItems[i].classList.add("list-item");
}

// Create a new img element and set its src attribute to a picture of you
let img = document.createElement("img");

img.src = "https://picsum.photos/200/300";

// Append that element to the page

body.appendChild(img);

let head = document.head;

let link = document.createElement("link");

link.rel = "stylesheet";

link.href = "css/style.css";

// The external css file should be applied after 4 second

setTimeout(() => {
    head.appendChild(link);
}, 4000);
