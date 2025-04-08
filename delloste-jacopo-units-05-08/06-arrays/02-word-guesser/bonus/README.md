# Word Guesser (Bonus)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create two arrays:

  + one for the letters of the word (e.g. 'C', 'A', 'T')

  + Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).

- Write a function called guessLetter that should:

  + Take one parameter, a letter.

  + Have a maximum number of guesses (e.g. 6)

  + Check if the letter is in the word array.

  + If the letter matches, add it in the correct position of the guessed array.

  + Show the user the current guessed letters.

  + Tell the user if they guessed a correct letter.

  + Tell the user how many guesses remain.

  + Tell the user if they won or lost the game.

- Call your function to make guesses:

  + guessLetter('G');

  + guessLetter('I');

  + guessLetter('O');

  + guessLetter('A');

  + guessLetter('T');

- Bonus

  + Add a random reward for correct guesses and subtract a random amount for failed guesses.

  + Show the user the total reward (positive or negative).

  + Draw a hangman image to the console log after each guess.

  + Add a function that generates the letters to guess randomly.

  + Add a function that chooses the initial word to guess from an array of words.

### Solution Step-by-Step

1. Create the  `bonus` folder, because this is the script for the bonus solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `bonus` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

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
        <title>Word Guesser (Bonus)</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Word Guesser (Bonus)</h1>
        <p>open the console (F12) to see the output</p>
        
        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file: main.js
    * @author: Jacopo Dell'Oste
    * Word Guesser (Bonus)
    *
    *  this file is a simple project for playing the hangman game
    * 
    *  this file contain 1 function called 'guessLetter' that play
    *  all the game rules with your guess
    * 
    *  the user can commit 6 errores at max 
    *  
    */

    const words = ["CAT", "DOG", "FROG", "FOX", "SHIP"];

    let word = [];

    let guess = [];

    const maxGuess = 6;

    let error = 0;

    let reward = 0;

    let hangmanIndex = 0;

    let gameOver = false;


    const hangmanState = [
        ` 
        +---+
        |   |
            |
            |
            |
            |
        =========`,
        `
        +---+
        |   |
        O   |
            |
            |
            |
        =========`,
        `
        +---+
        |   |
        O   |
        |   |
            |
            |
        =========`,
        `
        +---+
        |   |
        O   |
        /|   |
            |
            |
        =========`,
        `
        +---+
        |   |
        O   |
        /|\\  |
            |
            |
        =========`,
        `
        +---+
        |   |
        O   |
        /|\\  |
        /    |
            |
        =========`,
        `
        +---+
        |   |
        O   |
        /|\\  |
        / \\  |
            |
        =========`
    ];

    /**
    * return a random word to guess splitted
    * @returns {Array}
    */
    function chooseWord() {
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].split("");
    }

    word = chooseWord();

    /**
    * return the array with a random ammount to guqess 
    * @returns {Array}
    */
    function letterToGuess() {
        return Array(word.length).fill("_");
    }

    guess = letterToGuess();

    /**
    * play the hangman's game with the user guess
    * @param {string} letter
    * @returns {void}
    */
    function guessLetter(letter) {
        if (gameOver) {
            return;
        }

        console.log("\nYour Guesses: " + guess.join(" ") + " | Try to guess a letter!");

        if (word.includes(letter)) {
            console.log("You guessed a correct letter!");
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    guess[i] = letter;
                }
            }
            reward += Math.floor(Math.random() * 11);
        } else {
            console.log("Wrong guess...");
            error++;
            hangmanIndex++;
            reward -= Math.floor(Math.random() * 11);
        }

        console.log(hangmanState[hangmanIndex]);
        console.log("Current guessed letters: " + guess.join(" "));
        console.log("Guesses remaining: " + (maxGuess - error));
        console.log("Total reward: " + reward);

        if (!guess.includes("_")) {
            console.log("You win!");
            gameOver = true;
        }

        if (error >= maxGuess) {
            console.log("You lose! The word was: " + word.join(""));
            gameOver = true;
        }
    }

    guessLetter("B");
    guessLetter("O");
    guessLetter("X");
    guessLetter("F");
    guessLetter("R");
    guessLetter("G");
    ```

5. Check The Result using the DevTool Console of the Browser
