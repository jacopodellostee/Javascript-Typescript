# The Hangman Enchanced

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Begin with the 'Word Guesser' exercise from a previous lesson

- Incorporate the following enhancements

    + Implement an interface to allow users to input letters via an HTML `<input>` element

        - Integrate additional necessary HTML elements

        - Validate user input to ensure it consists of a single character and is of the correct type

    + Enhance the visual presentation of game results directly on the page

        - This can include the utilization of images or other graphics to enrich the experience

        - Display previous guesses, the remaining number of guesses, and other pertinent information to the user

    + Add additional features that would augment the game's appeal and interactivity

**Bonus Challenge**: Develop a 2-player version of the game to further engage users in a competitive gameplay experience


### Solution Step-by-Step

1. Create the  `solution` folder,  because this is the script for the basic solution

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `bonus` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Enchanced Word Guesser</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>The Hangman Enchanced</h1>

        <div class="word"></div>

        <input type="text" name="guess" id="guess">

        <div class="result"></div>

        <img id="hangman-image" src="./img/hangman/4.jpg" alt="Hangman Stage">
        
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
    * 
    * @description
    * Classic Hangman game where a player guesses letters to uncover a hidden word.
    * The game ends when the word is revealed or the maximum number of incorrect guesses is reached.
    */

    // === DOM Elements ===

    /** @type {HTMLElement} */
    const wordDisplay = document.querySelector(".word");

    /** @type {HTMLElement} */
    const resultDisplay = document.querySelector(".result");

    /** @type {HTMLImageElement} */
    const hangmanDisplay = document.querySelector("#hangman-image");

    /** @type {HTMLInputElement} */
    const input = document.getElementById("guess");

    // === Game Configuration ===

    /** @type {string[]} */
    const words = ["CAT", "DOG", "FROG", "FOX", "SHIP"];

    /** @type {string[]} */
    let word = [];

    /** @type {string[]} */
    let guess = [];

    /** @type {number} */
    const maxGuess = 6;

    /** @type {number} */
    let error = 0;

    /** @type {number} */
    let reward = 0;

    /** @type {number} */
    let hangmanIndex = 0;

    /** @type {boolean} */
    let gameOver = false;

    /** @type {string[]} */
    const hangmanState = [
        '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
    ];

    // === Core Game Functions ===

    /**
    * Selects a random word from the list.
    * @returns {string[]} The chosen word as an array of uppercase letters.
    */
    function chooseWord() {
        let randomIndex = Math.floor(Math.random() * words.length);

        return words[randomIndex].split("");
    }

    /**
    * Creates an array of underscores for the hidden word.
    * @returns {string[]} Array of underscores.
    */
    function letterToGuess() {
        return Array(word.length).fill("_");
    }

    /**
    * Updates the display for the current word, hangman image, and result message.
    * @returns {void}
    */
    function updateDisplay() {
        wordDisplay.textContent = guess.join(" ");

        hangmanDisplay.src = `./img/hangman/${hangmanState[hangmanIndex]}`;

        if (gameOver) {
            if (!guess.includes("_")) {
                resultDisplay.textContent = `You win! Reward: ${reward}`;
            } else {
                resultDisplay.textContent = `You lose! The word was: ${word.join("")}`;
            }
        } else {
            resultDisplay.textContent = `Guesses left: ${maxGuess - error} | Reward: ${reward}`;
        }
    }

    /**
    * Processes a guessed letter and updates game state.
    * @param {string} letter - The guessed letter.
    * @returns {void}
    */
    function guessLetter(letter) {
        if (gameOver) return;

        let correct = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter && guess[i] === "_") {

                guess[i] = letter;

                correct = true;
            }
        }

        if (correct) {
            reward += Math.floor(Math.random() * 11);
        } else {
            error++;

            hangmanIndex++;

            reward -= Math.floor(Math.random() * 11);
        }

        if (!guess.includes("_") || error >= maxGuess) {
            gameOver = true;
        }

        updateDisplay();
    }

    /**
    * Handles the guess input event.
    * @returns {void}
    */
    function handleGuess() {
        const letter = input.value.toUpperCase();

        input.value = "";

        if (!letter.match(/^[A-Z]$/)) {
            return;
        }

        if (guess.includes(letter)) {
            return;
        }

        guessLetter(letter);
    }

    // === Game Initialization ===

    word = chooseWord();

    guess = letterToGuess();

    updateDisplay();

    // === Event Listeners ===

    input.addEventListener('keypress', e => {
        if (e.key === "Enter") handleGuess();
    });
    ```

    * The CSS code:

    ```css 
    /**
    * style.css
    * 
    * This stylesheet defines the layout and styling for the Enhanced Hangman web game.
    * It ensures a responsive, visually appealing interface that enhances readability,
    * player interaction, and immersive gameplay through styling of headings, game status,
    * hangman image, input forms, and result messages.
    */

    /* === General Reset & Body === */
    /* 
    * Applies a consistent box model and removes default spacing.
    * Styles the body with a clean font, centered layout, and subtle background.
    */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f0f4f8;
        color: #333;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* === Heading === */
    /*
    * Main title styling with bold size and centered alignment.
    */
    h1 {
        font-size: 2.5rem;
        color: #222;
        margin-bottom: 30px;
        text-align: center;
    }

    /* === Word Display === */
    /*
    * Displays the guessed word with spacing and bold appearance.
    */
    .word {
        font-size: 2rem;
        letter-spacing: 12px;
        margin-bottom: 30px;
        font-weight: bold;
        color: #2c3e50;
    }

    /* === Hangman Image === */
    /*
    * Styles the hangman image with fixed width, rounded borders, and soft shadow.
    */
    #hangman-image {
        width: 250px;
        max-width: 90%;
        margin-bottom: 30px;
        border: 5px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    /* === Input Section === */
    /*
    * Flex column layout for player guess inputs.
    * Adds spacing, consistent form control styles, and focus effects.
    */
    .playerGuesses {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        max-width: 400px;
        margin-bottom: 30px;
    }

    /* Player input labels */
    .playerGuesses label {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        color: #555;
    }

    /* Input fields with padding and hover/focus transition */
    .playerGuesses input {
        padding: 10px 15px;
        border-radius: 5px;
        border: 2px solid #ccc;
        font-size: 1rem;
        transition: border-color 0.3s;
    }

    /* Highlight input border on focus */
    .playerGuesses input:focus {
        border-color: #0077cc;
        outline: none;
    }

    /* === Result Display === */
    /*
    * Shows the game result or turn info.
    * Styled for prominence with rounded box, background, and center text.
    */
    .result {
        font-size: 1.2rem;
        font-weight: bold;
        color: #0077cc;
        background-color: #eaf4fd;
        padding: 15px 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 600px;
        box-shadow: 0 4px 10px rgba(0, 119, 204, 0.1);
    }
    ```

5. Check The Result using the DevTool Console of the Browser
