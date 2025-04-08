/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Word Guesser
 *
 *  this file is a simple project for playing the hangman game
 * 
 *  this file contain 1 function called 'guessLetter' that play
 *  all the game rules with your guess
 * 
 *  the user can commit 6 errores at max 
 *  
 */

const word = ["C", "A", "T"];

let guess = ["_", "_", "_"];

// Have a maximum number of guesses (e.g. 6)
const maxGuess = 6;

let error = 0;



/**
 * plays the rules with your guess
 * @param {string} letter - the user guess 
 * @returns {void}
 */
function guessLetter(letter) {

    console.log("Your Guesses: " + guess + " Try to guess a letter of the word!");

    
    if(word.includes(letter)) {
        let indexCorrectLetter = word.indexOf(letter);
        // Tell the user if they guessed a correct letter
        console.log("You guessed a correct letter!");
        //If the letter matches, add it in the correct position of the guessed array.
        guess[indexCorrectLetter] = word[indexCorrectLetter];
    } else {
        console.log("Wrong guess...");
        error++;
    }

    // Show the user the current guessed letters
    console.log("Current guessed letter: " + guess);

    // Tell the user how many guesses remain
    console.log("Guesses remain: " + (maxGuess - error));

    // Tell the user if they won or lost the game
    if(!guess.includes("_")) {
        console.log("You win!");
        return;
    }

    if(error >= maxGuess) {
        console.log("You lose!");
        return;
    }

}

guessLetter("B");
guessLetter("B");
guessLetter("B");
guessLetter("B");
guessLetter("B");
guessLetter("B");
// guessLetter("C");
// guessLetter("A");
// guessLetter("T");