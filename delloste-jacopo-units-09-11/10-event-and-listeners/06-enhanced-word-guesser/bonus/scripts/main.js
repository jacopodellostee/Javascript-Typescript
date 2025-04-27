/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 *  
 */

const wordDisplay = document.querySelector(".word");

const resultDisplay = document.querySelector(".result");

const hangmanDisplay = document.querySelector("#hangman-image");

const P1Guess = document.getElementById("P1guess");

const P2Guess = document.getElementById("P2guess");

const words = ["CAT", "DOG", "FROG", "FOX", "SHIP"];

let word = [];

let guess = [];

const maxGuess = 6;

let P1Guesses = maxGuess;

let P2Guesses = maxGuess;

let error = 0;

let reward = 0;

let hangmanIndex = 0;

let gameOver = false;

// 1 = Player 1, 2 = Player 2
let currentPlayer = 1; 

const hangmanState = [
    '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
];

function chooseWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].split("");
}

function letterToGuess() {
    return Array(word.length).fill("_");
}

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
        if (currentPlayer === 1) {
            P1Guesses--;
        } else {
            P2Guesses--;
        }
    }

    if (!guess.includes("_")) {
        gameOver = true;
    }

    if (P1Guesses <= 0 && P2Guesses <= 0) {
        gameOver = true;
    }

    if (!correct) {
        currentPlayer = currentPlayer === 1 ? 2 : 1; 
    }

    updateDisplay();
}

function handleGuess(playerInput) {

    const letter = playerInput.value.toUpperCase();
    
    playerInput.value = "";

    if (!letter.match(/^[A-Z]$/)) 
        return;

    if (guess.includes(letter)) 
        return;

    guessLetter(letter);
}

word = chooseWord();

guess = letterToGuess();

updateDisplay();

function checkTurn(inputElement, playerNum) {
    if (currentPlayer !== playerNum || gameOver) {
        inputElement.blur();
        return;
    }
}

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
