# Enhanced Arrivals (Webpack Friendly)

**Author**: Jacopo Dell'Oste

### Client Request

- Implement some of the exercises from previous units as a webpack project.

- Rewrite the same exercises using modern JavaScript syntax.

- Use webpack and polyfills, if necessary, to make the code compatible with as many browsers as possible.

- Document any important configuration or code changes in `README.md`.

This specific exercise is based on the previous 'Enhanced Arrivals' exercise

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
    "name": "enchanced-arrivals",
    "version": "1.0.0",
    "main": "webpack.config.js",
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Il mio primo sito web">
            <meta name="author" content="Jacopo Dell'Oste">
            <title>Enchanced Arrivals</title>
        </head>
        <body>
            <!-- Content Of The Body -->
            <h1>Live Airport Arrivals (Enchanced)</h1>
            <p>Stay updated with the latest flight arrivals.</p>

            <button id="departures">Departures</button>

            <div id="departingPopup" class="popup hidden"></div>

            <table>
                <thead>
                <tr>
                    <th>Flight</th>
                    <th>Airline</th>
                    <th>Origin</th>
                    <th>Gate</th>
                    <th>Scheduled Time</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
            
                </tbody>
            </table>

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
    * This module simulates a dynamic arrivals and departures board. It manages a list of flights,
    * periodically generating new entries and updating their status over time (DEPARTING, ON_TIME, DELAYED, ARRIVED).
    * Users can view detailed flight information on hover, and toggle a popup showing currently departing flights.
    */

    /**
    * Main arrivals object handling flights and UI updates.
    * @namespace
    * @property {HTMLElement} flightTable - Table body where flight rows are inserted.
    * @property {Flight[]} flights - Array storing current flight data.
    * @property {number} flightId - Unique identifier incrementer for flights.
    * @property {string[]} origins - Array of possible origin cities.
    * @property {HTMLElement} departures - The "Departures" button element.
    */
    const arrivals = {
    /**
    * Table body where flight rows are inserted.
    * @type {HTMLElement}
    */
    flightTable: document.querySelector('tbody'),

    /**
    * Array storing current flight data.
    * @type {Object[]}
    */
    flights: [],

    /**
    * Unique identifier incrementer for flights.
    * @type {number}
    */
    flightId: 1,

    /**
    * Array of possible origin cities.
    * @type {string[]}
    */
    origins: ['Torino', 'Milano', 'Roma', 'Napoli', 'Palermo', 'Bologna', 'Firenze'],

    /**
    * The "Departures" button element.
    * @type {HTMLElement}
    */
    departures: document.getElementById("departures"),

    /**
    * Returns a random city from the origins array.
    * @returns {string} A random origin city.
    */
    getRandomOrigin() {
        return this.origins[Math.floor(Math.random() * this.origins.length)];
    },

    /**
    * Returns the current time as a formatted string (HH:MM).
    * @returns {string} Formatted current time.
    */
    getCurrentTimeStr() {
        let date = new Date();
        return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    },

    /**
    * Advances a flight's status based on how long it has existed.
    * @param {Object} flight - The flight object to update.
    * @returns {void}
    */
    advanceFlightStatus(flight) {
        const now = Date.now();
        const elapsed = (now - flight.createdAt) / 1000;

        switch (flight.status) {
        case 'DEPARTING':
            if (elapsed > 10) flight.status = 'ON_TIME';
            break;
        case 'ON_TIME':
            if (elapsed > 20) {
            flight.status = Math.random() < 0.3 ? 'DELAYED' : 'ARRIVED';
            if (flight.status === 'ARRIVED') flight.arrivedAt = now;
            }
            break;
        case 'DELAYED':
            if (elapsed > 40) {
            flight.status = 'ARRIVED';
            flight.arrivedAt = now;
            }
            break;
        case 'ARRIVED':
            break;
        }
    },

    /**
    * Displays an extra row with detailed flight information.
    * @param {HTMLTableRowElement} tr - The table row to show details for.
    * @param {Object} flight - The flight object with data.
    * @returns {void}
    */
    showFlightDetails(tr, flight) {
        if (tr.nextSibling && tr.nextSibling.classList?.contains("flightDisplayedRow")) return;

        const row = document.createElement("tr");
        row.classList.add("flightDisplayedRow");

        const td = document.createElement("td");
        td.colSpan = 6;
        td.innerHTML = `
        <div class="flightDisplayed">
            Flight Code: ${flight.code}<br>
            Airline: ${flight.airline}<br>
            Origin: ${flight.origin}<br>
            Gate: ${flight.gate}<br>
            Scheduled Time: ${flight.scheduledTime}<br>
            Status: ${flight.status}
        </div>
        `;

        row.appendChild(td);
        tr.parentNode.insertBefore(row, tr.nextSibling);
    },

    /**
    * Removes the flight detail row if it exists.
    * @param {HTMLTableRowElement} tr - The table row to hide details for.
    * @returns {void}
    */
    hideFlightDetails(tr) {
        if (tr.nextSibling && tr.nextSibling.classList?.contains("flightDisplayedRow")) {
        tr.nextSibling.remove();
        }
    },

    /**
    * Toggles a popup showing currently departing flights.
    * @returns {void}
    */
    departuresFlights() {
        const popup = document.getElementById("departingPopup");

        if (popup.classList.contains("show")) {
        popup.classList.remove("show");
        popup.classList.add("hidden");
        return;
        }

        const departingFlights = this.flights?.filter(f => f.status === 'DEPARTING');

        if (departingFlights.length === 0) {
        popup.innerHTML = "No departing flights right now";
        } else {
        popup.innerHTML = "Departing Flights: <br><br>";
        departingFlights.forEach(flight => {
            popup.innerHTML += `
                ${flight.code} from ${flight.origin}<br>
                Gate: ${flight.gate} — ${flight.scheduledTime}<br><br>
            `;
        });
        }

        popup.classList.remove("hidden");
        popup.classList.add("show");
    },

    /**
    * Updates the flight table:
    * - Removes flights that arrived over 60 seconds ago.
    * - Advances statuses of all flights.
    * - Sorts flights by scheduled time.
    * - Renders the flight rows and binds hover events.
    * @returns {void}
    */
    updateTable() {
        const now = Date.now();

        // Remove flights that have arrived more than 60s ago
        this.flights = this.flights.filter(f => !(f.status === 'ARRIVED' && now - f.arrivedAt > 60000));

        this.flights.forEach(this.advanceFlightStatus);

        this.flights.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

        this.flightTable.innerHTML = "";

        this.flights.forEach(flight => {
        const tr = document.createElement('tr');
        const statusClass = `status-${flight.status.toLowerCase()}`;
        tr.innerHTML = `
            <td>${flight.code}</td>
            <td>${flight.airline}</td>
            <td>${flight.origin}</td>
            <td>${flight.gate}</td>
            <td>${flight.scheduledTime}</td>
            <td class="${statusClass}">${flight.status}</td>
        `;

        this.flightTable.appendChild(tr);
        tr.addEventListener('mouseenter', () => this.showFlightDetails(tr, flight));
        tr.addEventListener('mouseleave', () => this.hideFlightDetails(tr));
        });
    },

    /**
    * Creates a new flight with randomized values and adds it to the list.
    * @returns {void}
    */
    createFlight() {
        const flight = {
        id: this.flightId++,
        code: `IT${Math.floor(100 + Math.random() * 900)}`,
        airline: 'ItalAir',
        origin: this.getRandomOrigin(),
        gate: `G${Math.floor(1 + Math.random() * 10)}`,
        scheduledTime: this.getCurrentTimeStr(),
        status: 'DEPARTING',
        createdAt: Date.now(),
        arrivedAt: null
        };

        this.flights.push(flight);
        this.updateTable();
    }
    };

    export default arrivals;
  ```

The Script: `main.js`

  ```js
    /**
     * @file main.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Entry point for the arrivals/departures board application. 
     * It imports the `arrivals` module and initializes the UI by:
     * - Adding an event listener to the "Departures" button.
     * - Creating new flights at regular intervals.
     * - Updating the flight table periodically.
     */

    import arrivals from './helper.js';

    // Import the style
    import '../styles/style.css';

    /**
     * Bind event listeners for user interactions and
     * set up recurring updates for the arrivals board.
     */

    // Show departing flights when the "Departures" button is clicked
    arrivals.departures.addEventListener('click', () => arrivals.departuresFlights());

    /**
     * Create a new random flight every 10 seconds.
     * @see arrivals.createFlight
     */
    setInterval(() => {
        arrivals.createFlight();
    }, 10000);

    /**
     * Update the flight table every 2 seconds to reflect
     * status changes and remove old arrivals.
     * @see arrivals.updateTable
     */
    setInterval(() => arrivals.updateTable(), 2000);
  ```

  - Now, create the `styles` folders where all the CSS file will be

    + Inside of it write the necessary file for the project:

  ```css
    /**
    * style.css
    * 
    * This stylesheet defines the layout and styling of the Enhanced Arrivals page,
    * including table formatting, flight status color coding, popup display, and
    * flight detail presentation. It provides responsive styling for real-time flight
    * updates and user interactions.
    */

    /* Base body styling for layout and readability */
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f5f5f5;
    }

    /* Heading appearance */
    h1 {
        color: #333;
    }

    /* Flight table layout and style */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Adds soft outer shadow for depth */
    }

    /* Cell padding, borders, and alignment */
    th, td {
        padding: 12px;
        border: 1px solid #ccc;
        text-align: center;
    }

    /* Header background for clarity */
    th {
        background-color: #eaeaea;
    }

    /* Status-specific styles for visual feedback */
    .status-delayed {
        color: red;
        font-weight: bold;
    }

    .status-arrived {
        color: green;
    }

    .status-on_time {
        color: blue;
    }

    .status-departing {
        color: orange;
    }

    /* Style for detailed flight info row */
    .flightDisplayed {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        padding: 10px;
        background-color: #e7eaed;
    }

    /* Popup container for departing flights info */
    .popup {
        position: fixed; /* Ensures the popup stays in place even when scrolling */
        bottom: 30px; /* Positions the popup 30px from the bottom of the viewport */
        right: 30px; /* Positions the popup 30px from the right edge */
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* Creates a lifted, shadowed appearance */
        width: 300px;
        max-height: 400px;
        overflow-y: auto; /* Allows vertical scrolling when content exceeds 400px */
        z-index: 9999; /* Ensures popup appears above all other elements */
        opacity: 0; /* Initially hidden with full transparency */
        transform: translateY(20px); /* Starts slightly lower (for animation effect) */
        transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth fade and movement animation */
    }

    /* Visible popup state */
    .popup.show {
        opacity: 1; /* Fully visible */
        transform: translateY(0); /* Move into place */
    }

    /* Hidden popup state */
    .popup.hidden {
        opacity: 0; /* Invisible */
        transform: translateY(20px); /* Shifted down */
        pointer-events: none; /* Prevents interaction while hidden */
    }

    /* Text style inside the popup for departing flights */
    .departingFlights {
        font-size: 14px;
        line-height: 1.4; /* Increases line spacing for readability */
    }
  ```    

    + **IMPORTANT!** The CSS files will be imported By the JavaScript file, so it's not needed to link it in the `index.html`

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`

  - See the Result

## Key Differences and Refactoring Changes

The transition from a single script to a Webpack-powered modular approach involves several significant changes that enhance code quality, maintainability, and scalability.

### 1. Code Structure and Modularity

- **Standard Version (Single File):**
    - All JavaScript code, including state variables (`flights`, `flightId`), DOM element references (`flightTable`), and all functions (`createFlight`, `updateTable`, etc.), resides in a single global scope within one file.
    - This monolithic structure can lead to a cluttered global namespace, increasing the risk of naming collisions and making the code harder to manage and debug as the application grows.

- **Webpack Version (Modular):**
    - The code is split into logical modules with clear responsibilities.
    - **`helper.js`**: This module encapsulates all the core logic and state related to the flight board. It contains the data (`flights`, `origins`), DOM element references, and all related methods (`createFlight`, `updateTable`, `advanceFlightStatus`, etc.). This entire functionality is organized within a single object named `arrivals`.
    - **`main.js`**: This file acts as the application\\'s entry point. Its sole responsibility is to import the `arrivals` module and initialize the application by setting up the event listeners and intervals.
    - **Change**: The most significant change is the refactoring of the entire logic into the `arrivals` object, which is then exported as a default module using `export default arrivals;`. This encapsulates the functionality, preventing pollution of the global scope.

### 2. Dependency Management

- **Standard Version:**
    - Dependencies are managed implicitly. The script assumes that the necessary HTML structure is present and that a separate `<link>` tag in the HTML file loads the CSS stylesheet.

- **Webpack Version:**
    - Dependencies are managed explicitly using ES6 `import` statements.
    - **JavaScript Modules**: `main.js` explicitly imports the `arrivals` object from `./helper.js` with `import arrivals from \'./helper.js\';`.
    - **CSS**: The CSS is imported directly into the JavaScript entry point (`main.js`) with `import \'../styles/style.css\';`. Webpack, configured with `style-loader` and `css-loader`, handles the injection of this CSS into the DOM at runtime. This co-locates the styles with the component logic that uses them, improving maintainability.

### 3. Code Organization and Encapsulation

- **Standard Version:**
    - Functions and variables are declared in the global scope. For example, `flightTable`, `flights`, `createFlight`, and `updateTable` are all global.

- **Webpack Version:**
    - All related properties and methods are encapsulated within the `arrivals` object. For instance, what was a global `flightTable` variable is now `arrivals.flightTable`. Global functions like `createFlight()` become methods of the object, accessed via `arrivals.createFlight()`.
    - **Change**: This encapsulation is a core principle of good software design. It makes the code more predictable, as the state is contained within a specific module rather than scattered globally. It also clarifies the public API of the module (the `arrivals` object) versus its internal implementation details.

### 4. Initialization and Execution Flow

- **Standard Version:**
    - The script execution is linear. After all functions and variables are declared, the event listeners and `setInterval` calls are registered at the end of the file in the global scope.

- **Webpack Version:**
    - The execution flow is more structured. The `helper.js` module only defines the `arrivals` object but does not execute anything on its own. The `main.js` entry point is responsible for starting the application logic by importing the module and calling its methods or accessing its properties to set up the intervals and event listeners.

## Summary of Advantages of the Webpack Approach

| Feature | Standard JavaScript | Webpack Module | Advantage of Webpack | 
| :--- | :--- | :--- | :--- |
| **Organization** | Monolithic; all code in one global file. | Modular; code split into files with specific roles. | **Improved Maintainability & Readability**: Easier to navigate, understand, and debug. |
| **Scope** | Pollutes the global namespace. | Encapsulated within modules; avoids global conflicts. | **Robustness**: Reduces the risk of naming collisions and unintended side effects. |
| **Dependencies** | Implicit (e.g., `<script>` and `<link>` tags in HTML). | Explicit (`import`/`export` statements for JS and CSS). | **Clarity & Portability**: Clear which dependencies a module needs. Easier to reuse modules. |
| **Scalability** | Difficult to scale; becomes unmanageable quickly. | Highly scalable; new features can be added as new modules. | **Long-Term Viability**: Provides a solid foundation for growing applications. |
| **Tooling** | No build process; relies on native browser features. | Enables a powerful build process (transpilation, bundling, minification). | **Compatibility & Performance**: Ensures code works on older browsers and is optimized for production. |
