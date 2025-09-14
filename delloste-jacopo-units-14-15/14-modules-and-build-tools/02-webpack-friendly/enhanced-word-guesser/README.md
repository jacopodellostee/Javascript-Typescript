# Enhanced Word Guesser (Webpack Friendly)

**Author**: Jacopo Dell'Oste

### Client Request

- Implement some of the exercises from previous units as a webpack project.

- Rewrite the same exercises using modern JavaScript syntax.

- Use webpack and polyfills, if necessary, to make the code compatible with as many browsers as possible.

- Document any important configuration or code changes in `README.md`.

This specific exercise is based on the previous 'Enhanced Word Guesser' exercise

### Solution Step-by-Step

1.  **Webpack Project Setup**
  
Create a new folder `enchanced-arrivals` inside `02-webpack-friendly`.
  
Initialize a new Node.js project 
  
    `npm init -y`.
  
Install Webpack and the necessary loaders using 
  
    `npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env css-loader style-loader --save-dev`

Then, create a `webpack.config.js` file for Webpack's configuration.

  ```js
    const path = require('path');

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const TerserPlugin = require('terser-webpack-plugin');

    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

    module.exports = {
        mode: 'production',
        entry: './src/scripts/main.js',
        output: { filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist') },
        devServer: {
            static: {
                directory: path.join(__dirname, 'static'),
                publicPath: '/static',
                serveIndex: true
            }
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [
                { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [[
                                '@babel/preset-env',
                                {
                                    targets: { edge: '127', firefox: '128', chrome: '127', safari: '17.5', ie: '11' },
                                    useBuiltIns: 'usage',
                                    corejs: '3.21.1'
                                }
                            ]]
                        }
                    }
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin()
            ],
        }
    };
  ```

Add scripts in the **`package.json`** file to start the development server and build the project.

  ```json
    {
    "name": "enhanced-word-guesser",
    "version": "1.0.0",
    "description": "",
    "main": "webpack.config.js",
    "scripts": {
        "dev": "webpack serve --mode development", // run the project in development mode
        "build": "webpack --mode production" // build the project for distibrution
    },
    "keywords": [],
    "author": "Jacopo Dell'Oste",
    "license": "ISC",
    "devDependencies": {
        "@babel/core": "^7.28.0",
        "@babel/preset-env": "^7.28.0",
        "babel-loader": "^10.0.0",
        "css-loader": "^7.1.2",
        "css-minimizer-webpack-plugin": "^7.0.2",
        "html-webpack-plugin": "^5.6.3",
        "mini-css-extract-plugin": "^2.9.2",
        "terser-webpack-plugin": "^5.3.14",
        "webpack": "^5.100.2",
        "webpack-cli": "^6.0.1",
        "webpack-dev-server": "^5.2.2"
    },
    "dependencies": {
        "core-js": "^3.44.0"
    }
    }
  ```

Here you can also see the dependecies of the project

2. **The Code**

- Create the directory `src` where all the code will be

  + Inside of it, create the `index.html` file and write the code

  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Enchanced Word Guesser</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>The Hangman Enchanced</h1>

        <div class="word"></div>

        <input type="text" name="guess" id="guess">

        <div class="result"></div>

        <img id="hangman-image" src="./img/hangman/4.jpg" alt="Hangman Stage">
    </body>
    </html>
  ```

  - Now, create the `scripts` folders where all the JavaScript file will be

    + Inside of it write the necessary file for the project:

The Module: `helper.js`

  ```js
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
  ```

The Script: `main.js`

    ```js
    /**
     * @file main.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Entry point for the Hangman game UI. 
     * It manages DOM elements, updates the display based on game state,
     * handles user input for guesses, and initializes a new game.
     */

    import game from './helper.js';

    // Import the styles
    import '../styles/style.css';

    // === DOM Elements ===

    /**
     * Element displaying the current word progress (with underscores for unknown letters).
     * @type {HTMLElement}
     */
    const wordDisplay = document.querySelector(".word");

    /**
     * Element displaying game results or messages.
     * @type {HTMLElement}
     */
    const resultDisplay = document.querySelector(".result");

    /**
     * Image element showing the current hangman state.
     * @type {HTMLImageElement}
     */
    const hangmanDisplay = document.querySelector("#hangman-image");

    /**
     * Input element where the player types their guesses.
     * @type {HTMLInputElement}
     */
    const input = document.getElementById("guess");

    // === UI Update Function ===

    /**
     * Updates the game display:
     * - Shows current guessed letters
     * - Updates the hangman image
     * - Displays result or remaining guesses/reward
     * @returns {void}
     */
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

    /**
     * Handles a player's letter guess:
     * - Converts input to uppercase
     * - Validates single-letter input
     * - Updates game state and UI
     * @returns {void}
     */
    function handleGuess() {
    const letter = input.value.toUpperCase();
    input.value = "";

    if (!letter.match(/^[A-Z]$/)) return;
    if (game.guess.includes(letter)) return;

    game.processGuess(letter);
    updateDisplay();
    }

    // === Game Initialization ===

    // Choose a new word for the game
    game.word = game.chooseWord();

    // Initialize guessed letters array
    game.guess = game.letterToGuess();

    // Initial display update
    updateDisplay();

    // === Event Listener ===

    // Listen for "Enter" key to submit guess
    input.addEventListener('keypress', e => {
    if (e.key === "Enter") handleGuess();
    });
    ```

  - Now, create the `styles` folders where all the CSS file will be

    + Inside of it write the necessary file for the project:

  ```css
    /**
    * style.css
    * 
    * This stylesheet defines the layout and styling for the Enhanced Hangman web game.
    * It ensures a responsive, visually appealing interface that enhances readability,
    * player interaction, and immersive gameplay through styling of headings, game status,
    * hangman image, input forms, and result messages.
    */

    /* === General Reset & Body === */
    /* 
    * Applies a consistent box model and removes default spacing.
    * Styles the body with a clean font, centered layout, and subtle background.
    */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f0f4f8;
        color: #333;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* === Heading === */
    /*
    * Main title styling with bold size and centered alignment.
    */
    h1 {
        font-size: 2.5rem;
        color: #222;
        margin-bottom: 30px;
        text-align: center;
    }

    /* === Word Display === */
    /*
    * Displays the guessed word with spacing and bold appearance.
    */
    .word {
        font-size: 2rem;
        letter-spacing: 12px;
        margin-bottom: 30px;
        font-weight: bold;
        color: #2c3e50;
    }

    /* === Hangman Image === */
    /*
    * Styles the hangman image with fixed width, rounded borders, and soft shadow.
    */
    #hangman-image {
        width: 250px;
        max-width: 90%;
        margin-bottom: 30px;
        border: 5px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    /* === Input Section === */
    /*
    * Flex column layout for player guess inputs.
    * Adds spacing, consistent form control styles, and focus effects.
    */
    .playerGuesses {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        max-width: 400px;
        margin-bottom: 30px;
    }

    /* Player input labels */
    .playerGuesses label {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        color: #555;
    }

    /* Input fields with padding and hover/focus transition */
    .playerGuesses input {
        padding: 10px 15px;
        border-radius: 5px;
        border: 2px solid #ccc;
        font-size: 1rem;
        transition: border-color 0.3s;
    }

    /* Highlight input border on focus */
    .playerGuesses input:focus {
        border-color: #0077cc;
        outline: none;
    }

    /* === Result Display === */
    /*
    * Shows the game result or turn info.
    * Styled for prominence with rounded box, background, and center text.
    */
    .result {
        font-size: 1.2rem;
        font-weight: bold;
        color: #0077cc;
        background-color: #eaf4fd;
        padding: 15px 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 600px;
        box-shadow: 0 4px 10px rgba(0, 119, 204, 0.1);
    }
  ```    

    + **IMPORTANT!** The CSS files will be imported By the JavaScript file, so it's not needed to link it in the `index.html`

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`

  - See the Result

## Key Differences and Refactoring Changes

The Hangman game was refactored from a **single monolithic script** into a **Webpack-powered modular structure**, improving maintainability, scalability, and code clarity.

### 1. Code Structure and Modularity

- **Standard Version (Single File):**
  - All game logic (word selection, guesses, scoring, display updates) and state variables (`word`, `guess`, `error`, etc.) live in one file (`main.js`) in the global scope.
  - Functions like `chooseWord`, `letterToGuess`, `guessLetter`, and `updateDisplay` are defined globally and directly modify global variables.
  - UI logic and core game mechanics are mixed together.

- **Webpack Version (Modular):**
  - The logic is split into **two modules**:
    - **`helper.js`**: Encapsulates the Hangman **game state** (`word`, `guess`, `error`, `reward`, etc.) and **core mechanics** (`chooseWord`, `letterToGuess`, `processGuess`). Everything is wrapped in a `game` object, which is exported with `export default game;`.
    - **`main.js`**: Acts as the **entry point**, handling:
      - DOM elements (`wordDisplay`, `resultDisplay`, `hangmanDisplay`, `input`).
      - Updating the UI (`updateDisplay`).
      - Handling user input (`handleGuess`).
      - Initializing the game (`game.word = game.chooseWord();` etc.).
  - **Change**: The refactoring separates **game logic** from **UI logic**, making responsibilities clear and the code more modular.

### 2. Dependency Management

- **Standard Version:**
  - CSS and HTML are assumed to be loaded separately via `<link>` and `<script>` tags.
  - No explicit dependency tracking.

- **Webpack Version:**
  - **Explicit imports** are used:
    - Game logic: `import game from './helper.js';`
    - Styles: `import '../styles/style.css';` (Webpack injects via `style-loader` and `css-loader`).
  - Dependencies are now tracked directly in the JavaScript entry point, improving clarity and portability.

### 3. Encapsulation and State Management

- **Standard Version:**
  - State (`word`, `guess`, `reward`, `error`, `gameOver`, etc.) is declared as independent global variables.
  - Game state is scattered, and there is no central abstraction for the Hangman logic.

- **Webpack Version:**
  - State and logic are encapsulated inside a single `game` object in `helper.js`.
  - All state is accessed via `game.word`, `game.guess`, `game.error`, etc.
  - Methods (`chooseWord`, `letterToGuess`, `processGuess`) operate directly on the `game` object’s state.
  - **Change**: This reduces namespace pollution, improves predictability, and creates a clear API for interacting with the game.

### 4. Display and Input Handling

- **Standard Version:**
  - UI update logic is inside `updateDisplay`, which references global variables (`word`, `guess`, `reward`, etc.).
  - Input handling is done by `handleGuess`, which calls `guessLetter` and then `updateDisplay`.

- **Webpack Version:**
  - `updateDisplay` in `main.js` now pulls all state from the `game` object (`game.guess`, `game.error`, `game.reward`, etc.).
  - `handleGuess` validates input, calls `game.processGuess(letter)`, and updates the UI.
  - **Change**: UI functions no longer directly manipulate global state but instead consume the encapsulated `game` module.

### 5. Initialization Flow

- **Standard Version:**
  - At the bottom of the script, the game starts by setting:
    ```js
    word = chooseWord();
    guess = letterToGuess();
    updateDisplay();
    ```
  - Then, an event listener is attached to the input field.

- **Webpack Version:**
  - Initialization is explicit and modular:
    ```js
    game.word = game.chooseWord();
    game.guess = game.letterToGuess();
    updateDisplay();
    ```
  - Then, an event listener is attached in `main.js`.
  - **Change**: This separation makes it easier to reset or restart the game later, since the initialization logic is centralized.


## Summary of Advantages of the Webpack Approach

| Feature             | Standard JavaScript (Single File)        | Webpack Modular Version (helper.js + main.js) | Advantage of Webpack |
|---------------------|------------------------------------------|-----------------------------------------------|-----------------------|
| **Organization**    | Game logic and UI mixed in one file.     | Logic in `helper.js`, UI in `main.js`.        | **Separation of Concerns**: Easier to navigate and extend. |
| **Scope**           | Global variables/functions.              | State and methods encapsulated in `game`.      | **Robustness**: Avoids global namespace pollution. |
| **Dependencies**    | Implicit via `<script>`/`<link>`.        | Explicit `import` for game logic and styles.   | **Clarity**: Clear tracking of dependencies. |
| **Encapsulation**   | Scattered state, multiple globals.       | All state centralized in `game` object.        | **Maintainability**: Easier debugging and testing. |
| **Scalability**     | Hard to extend without clutter.          | New features can be added as modules.          | **Flexibility**: Supports growth of the project. |
| **Initialization**  | Inline at the bottom of the file.        | Explicit setup in `main.js`.                   | **Extensibility**: Easier to restart or reinitialize. |

