# About me

**Author**: Jacopo Dell'Oste 

### Request From The Client

Start with this HTML

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
        <title>About Me</title>
    </head>
    <body>
        <h1>About Me</h1>
        <ul>
            <li>Nickname: <span id="nickname"></span></li>
            <li>Favorites: <span id="favorites"></span></li>
            <li>Hometown: <span id="hometown"></span></li>
        </ul>
    </body>
    </html>
 ```

- Add an external javascript file called main.js

- In JavaScript:

    + Change the body style so it has a font-family of "Arial, sans-serif"

    + Replace each of the spans (nickname, favorites, hometown) with your own information

    + Iterate through each li and change the class to "list-item"

    + Create a new img element and set its src attribute to a picture of you

    + Append that element to the page

- Add an external css file using Javascript

    + The external css file should make items with the .list-item class white, bold and with an orange background

    + The external css file should be applied after 4 seconds


### Solution Step-by-Step

1. Create the  `01-about-me` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `01-about-me` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>About Me</title>
        </head>
        <body>
            <!-- Content Of The Body -->
            <h1>About Me</h1>
            <ul>
                <li>Nickname: <span id="nickname"></span></li>
                <li>Favorites: <span id="favorites"></span></li>
                <li>Hometown: <span id="hometown"></span></li>
            </ul>

            <!-- End of Body -->
            <script src="scripts/main.js"></script>
        </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
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
    ```

    * The CSS code:

    ```css 
    /**
    * === List Item Styling ===
    * 
    * Styles all <li> elements that are dynamically given the "list-item" class
    * via JavaScript in the About Me page. This improves readability and adds
    * a visually distinct appearance to user-specific content such as nickname,
    * favorites, and hometown.
    * 
    * - White text for high contrast
    * - Bold font for emphasis
    * - Bright orange background for a vibrant look
    */
    .list-item {
        color: white;
        font-weight: bold;
        background-color: orange;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
