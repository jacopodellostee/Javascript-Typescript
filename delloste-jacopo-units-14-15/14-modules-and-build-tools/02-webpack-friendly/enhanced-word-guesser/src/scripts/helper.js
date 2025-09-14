/**
 * @file helper.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This module provides the logic for a Hangman-style word guessing game.
 * It stores the game configuration, current state, and methods to handle
 * word selection, guessing, and game progression.
 */

/**
 * Main game object handling the Hangman game state and logic.
 * @namespace
 * @property {string[]} words - List of possible words to guess.
 * @property {number} maxGuess - Maximum allowed incorrect guesses.
 * @property {string[]} hangmanState - Filenames of hangman images for visual feedback.
 * @property {string[]} word - The current word as an array of uppercase letters.
 * @property {string[]} guess - Current guessed letters (with "_" for unknown letters).
 * @property {number} error - Number of incorrect guesses made.
 * @property {number} reward - Points accumulated for correct guesses.
 * @property {number} hangmanIndex - Current index for hangman image state.
 * @property {boolean} gameOver - Flag indicating if the game has ended.
 */
const game = {
  /**
   * List of words to guess in the game.
   * @type {string[]}
   */
  words: [
    "CAT", "DOG", "FROG", "FOX", "LION", "BEAR", "WOLF", "DEER", "GOAT", "MOUSE",
    "HORSE", "DUCK", "ZEBRA", "SNAKE", "CRAB", "CROW", "SWAN", "BIRD", "MULE", "PUMA",
    "TOAD", "HAWK", "OWL", "BEE", "ANT", "RAT", "EAGLE", "SHARK", "TIGER", "BISON",
    "CHAIR", "PLANE", "SWORD", "CLOCK", "BRUSH", "CLOUD", "SPOON", "RADIO", "CABLE", "ROBOT",
    "TABLE", "PHONE", "LAMP", "PEN", "PENCIL", "MIRROR", "SCALE", "BOTTLE", "COIN", "TOOL",
    "BOX", "BAG", "GLOVE", "WHEEL", "BRIDGE", "ROPE", "SHOE", "CUP", "CHAIN", "FORK",
    "EARTH", "PARIS", "LONDON", "TOKYO", "OCEAN", "ASIA", "AFRICA", "EUROPE", "CAVE", "ISLAND",
    "FOREST", "MOUNTAIN", "RIVER", "DESERT", "BEACH", "CITY", "VILLAGE", "VALLEY", "CASTLE", "PORT",
    "CHINA", "ITALY", "FRANCE", "SPAIN", "NILE",
    "MONEY", "TRUTH", "LIGHT", "DREAM", "HONOR", "PEACE", "POWER", "HOPE", "LOVE", "GLORY",
    "PRIDE", "JUSTICE", "FAITH", "WISDOM", "SILENCE", "FEAR", "ANGER", "CHAOS", "FREEDOM", "MAGIC",
    "LUCK", "FATE", "GRACE", "SPIRIT", "TRUST",
    "DOCTOR", "TEACHER", "FARMER", "PILOT", "ACTOR", "DANCER", "PAINTER", "WRITER", "SINGER", "CHEF",
    "NURSE", "STUDENT", "LAWYER", "JUDGE", "DRIVER", "GUARD", "KING", "QUEEN", "THIEF", "PRIEST",
    "RUN", "JUMP", "SWIM", "READ", "WRITE", "SLEEP", "EAT", "FLY", "SING", "BUILD",
    "GHOST", "FLOOD", "WIND", "RAIN", "STONE", "FIRE", "ICE", "NOISE", "VOICE", "NIGHT"
  ],

  /**
   * Maximum number of incorrect guesses allowed.
   * @type {number}
   */
  maxGuess: 6,

  /**
   * Array of hangman image filenames for visual feedback.
   * @type {string[]}
   */
  hangmanState: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],

  /**
   * The current word as an array of letters.
   * @type {string[]}
   */
  word: [],

  /**
   * Current guesses for the word (underscores for unknown letters).
   * @type {string[]}
   */
  guess: [],

  /**
   * Number of incorrect guesses made.
   * @type {number}
   */
  error: 0,

  /**
   * Player's accumulated reward points.
   * @type {number}
   */
  reward: 0,

  /**
   * Current index in the hangmanState array.
   * @type {number}
   */
  hangmanIndex: 0,

  /**
   * Flag indicating if the game has ended.
   * @type {boolean}
   */
  gameOver: false,

  /**
   * Selects a random word from the words array.
   * @returns {string[]} The chosen word as an array of uppercase letters.
   */
  chooseWord() {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index].split("");
  },

  /**
   * Creates an array of underscores representing letters to guess.
   * @returns {string[]} Array of underscores matching the word length.
   */
  letterToGuess() {
    return Array(this.word.length).fill("_");
  },

  /**
   * Processes a guessed letter and updates the game state.
   * @param {string} letter - The guessed letter (uppercase).
   * @returns {boolean} True if the guess was correct, false otherwise.
   */
  processGuess(letter) {
    let correct = false;

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter && this.guess[i] === "_") {
        this.guess[i] = letter;
        correct = true;
      }
    }

    if (correct) {
      this.reward += Math.floor(Math.random() * 11);
    } else {
      this.error++;
      this.hangmanIndex++;
      this.reward -= Math.floor(Math.random() * 11);
    }

    if (!this.guess.includes("_") || this.error >= this.maxGuess) {
      this.gameOver = true;
    }

    return correct;
  }
};

export default game;
