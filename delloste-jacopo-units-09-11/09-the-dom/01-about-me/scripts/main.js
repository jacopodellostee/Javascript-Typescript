/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * @description
 * About Me Script
 * 
 * This script customizes the provided HTML by:
 * - Setting the font of the entire page
 * - Replacing the content of specific spans with personal data
 * - Adding a class to all <li> elements
 * - Dynamically inserting an image
 * - Dynamically loading an external CSS file after a delay
 */

// === Change Body Font ===

/** @type {HTMLBodyElement} Sets the font family of the entire page */
let body = document.body;
body.style.fontFamily = "Arial, sans-serif";

// === Replace Span Contents ===

/** @type {HTMLElement} The element showing the user's nickname */
let nickname = document.getElementById("nickname");
nickname.textContent = "dellwolf25";

/** @type {HTMLElement} The element showing the user's favorite things */
let favorites = document.getElementById("favorites");
favorites.textContent = "Videogames, Comics, Music";

/** @type {HTMLElement} The element showing the user's hometown */
let hometown = document.getElementById("hometown");
hometown.textContent = "Casale Monferrato";

// === Update <li> Elements ===

/** @type {HTMLCollectionOf<HTMLLIElement>} All <li> elements to style */
let allListItems = document.getElementsByTagName("li");

/**
 * Adds the class "list-item" to every <li> in the document
 */
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].classList.add("list-item");
}

// === Add an Image ===

/** @type {HTMLImageElement} A new image element added to the page */
let img = document.createElement("img");
img.src = "https://picsum.photos/200/300";
body.appendChild(img);

// === Dynamically Load CSS After 4 Seconds ===

/** @type {HTMLHeadElement} The <head> element where the stylesheet will be appended */
let head = document.head;

/** @type {HTMLLinkElement} The link element for the external CSS */
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/style.css";

/**
 * Appends the external CSS to the document head after a 4-second delay
 */
setTimeout(() => {
    head.appendChild(link);
}, 4000);
