# Word Guesser 

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

1. Create the  `solution` folder, because this is the script for the basic solution

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `solution` directory

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
        <title>Word Guesser</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Word Guesser</h1>
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
    * solutionWord Guesser
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
    ```

5. Check The Result using the DevTool Console of the Browser
