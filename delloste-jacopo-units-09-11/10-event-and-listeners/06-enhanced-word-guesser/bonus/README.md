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

5. Check The Result using the DevTool Console of the Browser
