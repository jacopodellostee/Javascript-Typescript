// main.js

import game from './helper.js';

import '../styles/style.css';

// === DOM Elements ===
const wordDisplay = document.querySelector(".word");

const resultDisplay = document.querySelector(".result");

const hangmanDisplay = document.querySelector("#hangman-image");

const input = document.getElementById("guess");

// === UI Update Function ===
function updateDisplay() {
  wordDisplay.textContent = game.guess.join(" ");
  hangmanDisplay.src = `../../static/images/${game.hangmanState[game.hangmanIndex]}`;

  if (game.gameOver) {
    if (!game.guess.includes("_")) {
      resultDisplay.textContent = `You win! Reward: ${game.reward}`;
    } else {
      resultDisplay.textContent = `You lose! The word was: ${game.word.join("")}`;
    }
  } else {
    resultDisplay.textContent = `Guesses left: ${game.maxGuess - game.error} | Reward: ${game.reward}`;
  }
}

// === Handle Input Guess ===
function handleGuess() {
  const letter = input.value.toUpperCase();
  input.value = "";

  if (!letter.match(/^[A-Z]$/)) return;
  if (game.guess.includes(letter)) return;

  game.processGuess(letter);
  updateDisplay();
}

// === Game Init ===
game.word = game.chooseWord();

game.guess = game.letterToGuess();

updateDisplay();

// === Event Listener ===
input.addEventListener('keypress', e => {
  if (e.key === "Enter") handleGuess();
});
