// helper.js

const game = {
  // === Game Configuration ===
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
    "GHOST", "FLOOD", "WIND", "RAIN", "STONE", "FIRE", "ICE", "NOISE", "VOICE", "NIGHT"],
  maxGuess: 6,
  hangmanState: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],

  // === Game State ===
  word: [],
  guess: [],
  error: 0,
  reward: 0,
  hangmanIndex: 0,
  gameOver: false,

  /**
   * Selects a random word from the list.
   * @returns {string[]} The chosen word as an array of uppercase letters.
   */
  chooseWord() {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index].split("");
  },

  /**
   * Creates an array of underscores for the hidden word.
   * @returns {string[]} Array of underscores.
   */
  letterToGuess() {
    return Array(this.word.length).fill("_");
  },

  /**
   * Processes a guessed letter and updates game state.
   * @param {string} letter
   * @returns {boolean} true if correct, false otherwise
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
