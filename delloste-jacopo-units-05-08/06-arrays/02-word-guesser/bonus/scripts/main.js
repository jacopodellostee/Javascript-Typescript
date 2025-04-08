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
