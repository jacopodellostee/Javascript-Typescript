/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 *  
 */

const wordDisplay = document.querySelector(".word");

const resultDisplay = document.querySelector(".result");

const hangmanDisplay = document.querySelector("#hangman-image");

const input = document.getElementById("guess");

const words = ["CAT", "DOG", "FROG", "FOX", "SHIP"];

let word = [];

let guess = [];

const maxGuess = 6;

let error = 0;

let reward = 0;

let hangmanIndex = 0;

let gameOver = false;

const hangmanState = [
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
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
            resultDisplay.textContent = `You win! Reward: ${reward}`;
        } else {
            resultDisplay.textContent = `You lose! The word was: ${word.join("")}`;
        }
    } else {
        resultDisplay.textContent = `Guesses left: ${maxGuess - error} | Reward: ${reward}`;
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
        error++;
        hangmanIndex++;
        reward -= Math.floor(Math.random() * 11);
    }

    if (!guess.includes("_")) {
        gameOver = true;
    }

    if (error >= maxGuess) {
        gameOver = true;
    }

    updateDisplay();
}

function handleGuess() {

    const letter = input.value.toUpperCase();

    input.value = "";

    if (!letter.match(/^[A-Z]$/)) {
        alert("Insert a valid letter (A-Z).");
        return;
    }

    if (guess.includes(letter)) {
        alert("You've already guessed that letter.");
        return;
    }

    guessLetter(letter);
}

word = chooseWord();

guess = letterToGuess();

updateDisplay();

input.addEventListener('keypress', e => {
    if (e.key === "Enter") 
        handleGuess();
});