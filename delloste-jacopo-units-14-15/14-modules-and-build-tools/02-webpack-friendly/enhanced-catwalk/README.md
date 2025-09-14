# Enhanced Catwalk (Webpack Friendly)

**Author**: Jacopo Dell'Oste

### Client Request

- Implement some of the exercises from previous units as a webpack project.

- Rewrite the same exercises using modern JavaScript syntax.

- Use webpack and polyfills, if necessary, to make the code compatible with as many browsers as possible.

- Document any important configuration or code changes in `README.md`.

This specific exercise is based on the previous 'Enhanced Catwalk' exercise

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
    "name": "enhanced-catwalk",
    "version": "1.0.0",
    "main": "main.js",
    "scripts": {
        "dev": "webpack serve --mode development", // run the project in development mode
        "build": "webpack --mode production" // build the project for distibrution
    },
    "keywords": [],
    "author": "Jacopo Dell'Oste",
    "license": "ISC",
    "description": "",
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
        <title>Enchanced Catwalk</title>
    </head>
    <body>
        <!-- Content of The Body  -->
        <div id="displayInfo"></div>

        <div>
            <input type="button" value="Start" id="start">
            <input type="button" value="Faster" id="faster">
            <input type="button" value="Slower" id="slower">
            <input type="button" value="Stop" id="stop">
        </div>

        <div>
            <img id="cat" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
        </div>

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
     * This module animates a walking cat on the screen. The cat can start walking, 
     * stop, and change its speed (faster or slower). Its movement direction changes 
     * when reaching the window boundaries. The current speed is displayed on screen, 
     * and interactive buttons allow user control.
     */

    /**
     * Main walkingcat object handling the cat animation and UI interactions.
     * @namespace
     * @property {HTMLImageElement} cat - The cat image element.
     * @property {HTMLElement} info - Display element for showing current speed info.
     * @property {HTMLButtonElement} start - "Start" button element.
     * @property {HTMLButtonElement} faster - "Faster" button element.
     * @property {HTMLButtonElement} slower - "Slower" button element.
     * @property {HTMLButtonElement} stop - "Stop" button element.
     * @property {number} position - Current horizontal position (in pixels) of the cat.
     * @property {number} speed - Current walking speed (pixels per frame).
     * @property {boolean} goingRight - Direction flag, true if moving right.
     * @property {?number} catInterval - Interval ID used to control walking animation.
     */
    const walkingcat = {
        /**
         * The cat image element.
         * @type {HTMLImageElement}
         */
        cat: document.querySelector("img"),

        /**
         * Element displaying current speed info.
         * @type {HTMLElement}
         */
        info: document.getElementById("displayInfo"),

        /**
         * "Start" button element.
         * @type {HTMLButtonElement}
         */
        start: document.getElementById("start"),

        /**
         * "Faster" button element.
         * @type {HTMLButtonElement}
         */
        faster: document.getElementById("faster"),

        /**
         * "Slower" button element.
         * @type {HTMLButtonElement}
         */
        slower: document.getElementById("slower"),

        /**
         * "Stop" button element.
         * @type {HTMLButtonElement}
         */
        stop: document.getElementById("stop"),

        /**
         * Current horizontal position (in pixels) of the cat.
         * @type {number}
         */
        position: 0,

        /**
         * Current walking speed (pixels per frame).
         * @type {number}
         */
        speed: 10,

        /**
         * Direction flag: true if cat is moving right.
         * @type {boolean}
         */
        goingRight: true,

        /**
         * Interval ID controlling the walking animation.
         * @type {?number}
         */
        catInterval: null,

        /**
         * Moves the cat one step, updates direction at boundaries,
         * and refreshes speed info on screen.
         * @returns {void}
         */
        catWalk: function () {
            if (this.goingRight) {
                this.position += this.speed;
                this.cat.style.transform = "scaleX(1)";
            } else {
                this.position -= this.speed;
                this.cat.style.transform = "scaleX(-1)";
            }

            this.cat.style.left = this.position + "px";

            if (this.position > window.innerWidth - this.cat.width) {
                this.goingRight = false;
            }

            if (this.position < 0) {
                this.goingRight = true;
            }

            this.showInfo();
        },

        /**
         * Updates the info display with the current speed.
         * @returns {void}
         */
        showInfo: function () {
            this.info.textContent = `The cat is going at a speed of ${this.speed}`;
        },

        /**
         * Increases the walking speed by 5 units.
         * @returns {void}
         */
        goFaster: function () {
            this.speed += 5;
            this.showInfo();
        },

        /**
         * Decreases the walking speed by 5 units if above minimum.
         * @returns {void}
         */
        goSlower: function () {
            if (this.speed > 5) {
                this.speed -= 5;
            }
            this.showInfo();
        },

        /**
         * Stops the walking animation and disables/enables relevant buttons.
         * @returns {void}
         */
        stopCatWalking: function () {
            clearInterval(this.catInterval);
            this.catInterval = null;

            this.stop.disabled = true;
            this.faster.disabled = true;
            this.slower.disabled = true;
            this.start.disabled = false;
        },

        /**
         * Starts the walking animation if not already running,
         * and updates button states accordingly.
         * @returns {void}
         */
        startCatWalking: function () {
            if (!this.catInterval) {
                this.catInterval = setInterval(this.catWalk.bind(this), 50);

                this.start.disabled = true;
                this.faster.disabled = false;
                this.slower.disabled = false;
                this.stop.disabled = false;
            }
        },

        /**
         * Initializes the program: shows initial speed info
         * and attaches event listeners to control buttons.
         * @returns {void}
         */
        startProgram: function () {
            window.onload = () => this.showInfo();

            // Event listeners
            this.start.addEventListener('click', this.startCatWalking.bind(this));
            this.stop.addEventListener('click', this.stopCatWalking.bind(this));
            this.faster.addEventListener('click', this.goFaster.bind(this));
            this.slower.addEventListener('click', this.goSlower.bind(this));
        }
    };

    export default walkingcat;
  ```

The Script: `main.js`

    ```js
    /**
     * @file main.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Entry point for the walking cat animation application.
     * It imports the `walkingCat` module and the required CSS, then
     * initializes the animation by calling `startProgram`.
     */

    import walkingCat from './helper';

    // Import the Styles
    import '../styles/style.css';

    /**
     * Initialize and start the walking cat program.
     */
    walkingCat.startProgram();
    ```

  - Now, create the `styles` folders where all the CSS file will be

    + Inside of it write the necessary file for the project:

  ```css
    /**
    * style.css
    * 
    * This stylesheet positions the cat image absolutely on the page using its ID selector.
    * The image is aligned to the left edge of the screen and offset 0 pixels from the top.
    * This setup allows the JavaScript logic to move the cat horizontally across the screen
    * while preserving its vertical alignment.
    */

    /* Positions the cat image absolutely for horizontal movement */
    #cat {
        position: absolute;
        left: 0;
    }
  ```    

    + **IMPORTANT!** The CSS files will be imported By the JavaScript file, so it's not needed to link it in the `index.html`

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`

  - See the Result

## Key Differences and Refactoring Changes

The transition from a **single script** to a **Webpack-powered modular approach** for the walking cat animation brings several improvements in terms of code quality, maintainability, and scalability.

### 1. Code Structure and Modularity

- **Standard Version (Single File):**
  - All variables (`cat`, `position`, `speed`, etc.) and functions (`catWalk`, `showInfo`, etc.) exist in the **global scope** of one file.
  - Event listeners are attached directly in the same script, mixing logic and initialization.
  - This design leads to a cluttered global namespace, increasing the likelihood of naming conflicts as the app grows.

- **Webpack Version (Modular):**
  - Code is split into **logical modules**:
    - **`helper.js`**: Encapsulates the cat animation logic and UI handling in a single object (`walkingcat`). It contains state, DOM references, and all related methods (`catWalk`, `goFaster`, `goSlower`, etc.).
    - **`main.js`**: Acts as the application entry point. Its role is to **import** the `walkingcat` object and start the program by calling `walkingcat.startProgram()`.
  - **Change**: The refactoring wraps everything inside the `walkingcat` object, exported with `export default walkingcat;`. This prevents polluting the global scope and clarifies responsibilities.

### 2. Dependency Management

- **Standard Version:**
  - Assumes HTML and CSS are available globally via `<script>` and `<link>` tags.
  - No explicit handling of dependencies—everything is "just there" in the browser.

- **Webpack Version:**
  - Dependencies are explicitly managed with **ES6 `import` statements**:
    - JavaScript modules: `main.js` imports `walkingcat` from `./helper.js`.
    - CSS: Imported directly into the entry point (`main.js`) via `import '../styles/style.css';`.  
      Webpack injects the styles at runtime using loaders (`style-loader`, `css-loader`).
  - This makes dependencies transparent and portable.

### 3. Code Organization and Encapsulation

- **Standard Version:**
  - Functions like `catWalk`, `goFaster`, and variables like `speed` are global.
  - Harder to manage as the number of features increases.

- **Webpack Version:**
  - Everything is encapsulated in the `walkingcat` object:
    - State (`position`, `speed`, `goingRight`) is private to the object.
    - Methods (`catWalk`, `startCatWalking`, `stopCatWalking`) operate on the object’s state.
  - **Change**: This encapsulation improves **predictability** and **clarity**, separating public APIs (`walkingcat.startProgram()`) from internal details.

### 4. Initialization and Execution Flow

- **Standard Version:**
  - Script runs top-to-bottom. Functions and variables are declared, then event listeners and intervals are initialized at the end of the file.

- **Webpack Version:**
  - **`helper.js`** defines the object and its methods but does not run them immediately.
  - **`main.js`** is responsible for application startup, calling `walkingcat.startProgram()` to attach listeners and initialize info display.
  - **Change**: This separation makes the flow more explicit and easier to extend.

## Summary of Advantages of the Webpack Approach

| Feature             | Standard JavaScript               | Webpack Module (helper.js + main.js) | Advantage of Webpack |
|---------------------|-----------------------------------|---------------------------------------|-----------------------|
| **Organization**    | All code in one global file.      | Modular; split into files by concern. | **Maintainability & Readability**: Easier to navigate and debug. |
| **Scope**           | Polluted global namespace.        | Encapsulated in `walkingcat` object.  | **Robustness**: Avoids naming conflicts and side effects. |
| **Dependencies**    | Implicit via `<script>`/`<link>`. | Explicit `import`/`export`.           | **Clarity & Portability**: Clear dependency tracking. |
| **Scalability**     | Hard to expand cleanly.           | New features can be added as modules. | **Long-Term Viability**: Supports growing apps. |
| **Tooling**         | Relies only on browser features.  | Uses Webpack build pipeline.          | **Compatibility & Performance**: Bundling, transpilation, optimization. |


