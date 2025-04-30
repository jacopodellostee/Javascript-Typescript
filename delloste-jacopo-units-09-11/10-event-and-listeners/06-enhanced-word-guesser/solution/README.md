# 

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 



### Solution Step-by-Step

1. Create the  `` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 

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

5. Check The Result using the DevTool Console of the Browser
