# Story

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Start with the following HTML:

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Story</title>
    </head>
    <body>
        <h1>Story</h1>
    
        <ul>
            <li>Noun: <input type="text" id="noun"></li>
            <li>Adjective: <input type="text" id="adjective"></li>
            <li>Someone's Name: <input type="text" id="person"></li>
        </ul>

        <button id="gen-button">Lib it!</button>

        <div id="story"></div>
    </body>
    </html>
```

- Add an event listener to the button so that it calls a makeStory function when clicked.

- In the makeStory function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Joseph really likes pink cucumbers.")


### Solution Step-by-Step

1. Create the  `01-story` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-story` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Story</title>
    </head>
    <body>
        <!-- Content Of The Body -->
        <h1>Story</h1>
        
        <ul>
            <li>Noun: <input type="text" id="noun"></li>
            <li>Adjective: <input type="text" id="adjective"></li>
            <li>Someone's Name: <input type="text" id="person"></li>
        </ul>

        <button id="gen-button">Lib it!</button>

        <div id="story"></div>

        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>

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
    * This file handles generating a short dynamic story
    * using user input from an HTML form.
    */

    /**
    * Button to generate the story.
    * @type {HTMLButtonElement}
    */
    let button = document.getElementById("gen-button");

    /**
    * Generates a story using user-provided values and
    * displays it in an HTML element.
    * 
    * - Reads the person's name, an adjective, and a noun from input fields.
    * - Displays the result in the format: "{person} really likes {adjective} {noun}"
    * - Inserts the sentence into the element with ID "story".
    * 
    * @returns {void}
    */
    function makeStory() {
        /** 
        * @type {HTMLElement} 
        */
        let story = document.getElementById("story");

        /** 
        * @type {string} 
        */
        let noun = document.getElementById("noun").value;

        /** 
        * @type {string} 
        */
        let adjective = document.getElementById("adjective").value;
        
        /** 
        * @type {string} 
        */
        let person = document.getElementById("person").value;

        story.textContent = `${person} really likes ${adjective} ${noun}`;

    }

    // Adds the click event listener to the button
    button.addEventListener('click', makeStory);

    ```

5. Check The Result using the DevTool Console of the Browser
