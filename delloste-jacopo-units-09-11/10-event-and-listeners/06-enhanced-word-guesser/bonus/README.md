# The Hangman Enchanced (Bonus)

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

1. Create the  `bonus` folder,  because this is the script for the bonus solution

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
        <title>The Hangman Enchanced (Bonus)</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>The Hangman Enchanced (Bonus)</h1>

        <div class="word"></div>

        <img id="hangman-image" src="./img/hangman/4.jpg" alt="Hangman Stage">

        <div class="playerGuesses">
            <label for="P1guess">Player 1 Guess: </label>
            <input type="text" name="P1guess" id="P1guess">
            
            <label for="P2guess">Player 2 Guess: </label>
            <input type="text" name="P2guess" id="P2guess">
        </div>

        <div class="result"></div>
        
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
    * A turn-based Hangman game where two players guess letters to uncover a hidden word.
    * Players take turns, gain or lose points based on guesses, and the game ends when the word is completed or guesses run out.
    */

    // === DOM Elements ===

    /** @type {HTMLElement} */
    const wordDisplay = document.querySelector(".word");

    /** @type {HTMLElement} */
    const resultDisplay = document.querySelector(".result");

    /** @type {HTMLImageElement} */
    const hangmanDisplay = document.querySelector("#hangman-image");

    /** @type {HTMLInputElement} */
    const P1Guess = document.getElementById("P1guess");

    /** @type {HTMLInputElement} */
    const P2Guess = document.getElementById("P2guess");

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
    let P1Guesses = maxGuess;

    /** @type {number} */
    let P2Guesses = maxGuess;

    /** @type {number} */
    let hangmanIndex = 0;

    /** @type {number} */
    let reward = 0;

    /** @type {boolean} */
    let gameOver = false;

    /** @type {number} */
    let currentPlayer = 1; // 1 = Player 1, 2 = Player 2

    /** @type {string[]} */
    const hangmanState = [
        '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
    ];

    // === Core Game Functions ===

    /**
    * Randomly selects a word from the list.
    * @returns {string[]} The chosen word as an array of letters.
    */
    function chooseWord() {
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].split("");
    }

    /**
    * Creates an array of underscores for the word length.
    * @returns {string[]} Array of underscores representing the unguessed word.
    */
    function letterToGuess() {
        return Array(word.length).fill("_");
    }

    /**
    * Updates the visual display of the word, game status, and hangman image.
    * @returns {void}
    */
    function updateDisplay() {

        wordDisplay.textContent = guess.join(" ");

        hangmanDisplay.src = `./img/hangman/${hangmanState[hangmanIndex]}`;

        if (gameOver) {
            if (!guess.includes("_")) {
                resultDisplay.textContent = `Player ${currentPlayer} wins! Reward: ${reward}`;
            } else {
                resultDisplay.textContent = `Game Over! The word was: ${word.join("")}`;
            }
        } else {
            resultDisplay.textContent = `Player ${currentPlayer}'s turn | P1 Guesses left: ${P1Guesses} | P2 Guesses left: ${P2Guesses} | Reward: ${reward}`;
        }
    }

    /**
    * Processes a guessed letter, updates score and game state.
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
            reward -= Math.floor(Math.random() * 11);

            hangmanIndex++;

            if (currentPlayer === 1) 
                P1Guesses--;
            else
                P2Guesses--;
        }

        if (!guess.includes("_") || (P1Guesses <= 0 && P2Guesses <= 0)) {
            gameOver = true;
        }

        if (!correct) {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
        }

        updateDisplay();
    }

    /**
    * Handles guess input from players.
    * @param {HTMLInputElement} playerInput - Input element for the current player.
    * @returns {void}
    */
    function handleGuess(playerInput) {

        const letter = playerInput.value.toUpperCase();

        playerInput.value = "";

        if (!letter.match(/^[A-Z]$/)) 
            return;

        if (guess.includes(letter)) 
            return;

        guessLetter(letter);
    }

    /**
    * Checks if it’s the correct player's turn and blocks input otherwise.
    * @param {HTMLInputElement} inputElement - Input box.
    * @param {number} playerNum - Player number (1 or 2).
    * @returns {void}
    */
    function checkTurn(inputElement, playerNum) {

        if (currentPlayer !== playerNum || gameOver) {

            inputElement.blur();

            return;
        }
    }

    // === Game Initialization ===

    word = chooseWord();

    guess = letterToGuess();

    updateDisplay();

    // === Event Listeners ===

    P1Guess.addEventListener('focus', () => checkTurn(P1Guess, 1));

    P2Guess.addEventListener('focus', () => checkTurn(P2Guess, 2));

    P1Guess.addEventListener('keypress', e => {
        if (e.key === "Enter" && currentPlayer === 1) {
            handleGuess(P1Guess);
        }
    });

    P2Guess.addEventListener('keypress', e => {
        if (e.key === "Enter" && currentPlayer === 2) {
            handleGuess(P2Guess);
        }
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
