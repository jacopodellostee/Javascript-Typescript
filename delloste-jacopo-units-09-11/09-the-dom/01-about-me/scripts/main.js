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

/**
 * @type {HTMLBodyElement}
 * @description The body element of the HTML document.
 */
let body = document.body;

// Change the body style so it has a font-family of "Arial, sans-serif"
body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) with your own information

/**
 * @type {HTMLElement}
 * @description The span element that holds the nickname.
 */
let nickname = document.getElementById("nickname");

/**
 * @description Replaces the content of the nickname span with a personal nickname.
 */
nickname.textContent = "dellwolf25";

/**
 * @type {HTMLElement}
 * @description The span element that holds the favorite items.
 */
let favorites = document.getElementById("favorites");

/**
 * @description Replaces the content of the favorites span with a list of personal favorites.
 */
favorites.textContent = "Videogames, Comics, Music";

/**
 * @type {HTMLElement}
 * @description The span element that holds the hometown information.
 */
let hometown = document.getElementById("hometown");

/**
 * @description Replaces the content of the hometown span with the personal hometown.
 */
hometown.textContent = "Casale Monferrato";

// Iterate through each li and change the class to "list-item"

/**
 * @type {HTMLCollectionOf<HTMLLIElement>}
 * @description All <li> elements on the page.
 */
let allListItems = document.getElementsByTagName("li");

/**
 * @description Iterates through each <li> element and adds a "list-item" class to it.
 */
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].classList.add("list-item");
}


// Create a new img element and set its src attribute to a picture of you

/**
 * @type {HTMLImageElement}
 * @description The image element to be added to the page.
 */
let img = document.createElement("img");

/**
 * @description Sets the source URL of the image to a random picture from Picsum.
 */
img.src = "https://picsum.photos/200/300";

// Append that element to the page

/**
 * @description Appends the image element to the body of the document.
 */
body.appendChild(img);

/**
 * @type {HTMLHeadElement}
 * @description The <head> element of the HTML document where we append the external CSS.
 */
let head = document.head;

/**
 * @type {HTMLLinkElement}
 * @description The link element to load the external CSS file.
 */
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/style.css";

// The external css file should be applied after 4 second

/**
 * @function
 * @description Adds the external CSS file to the document head after 4 seconds.
 */
setTimeout(() => {
    head.appendChild(link);
}, 4000);
