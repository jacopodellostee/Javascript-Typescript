# Greatest Hits - Enhanced Arrivals (Bonus)

**Author**: Jacopo Dell'Oste

### Request From The Client

**Task**:

- Rewrite some previous exercises in modern JS syntax

  - Credit Card Validation

  - Advanced Arrivals

  - Reduce All

- Try to use as many modern features as you can

- In `README.md` document any important changes

**Bonus**:

- Use webpack, make your code compatible with older browsers

#### This directory contains the solution of the 'Enhanced Arrivals' Exercise using Webpack

### Solution Step-by-Step

1.  **Webpack Project Setup**
  
Create a new folder `enchanced-arrivals`.
  
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
            <title>Gratest Hits (Bonus) - Enchanced Arrivals</title>
        </head>
        <body>
            <!-- Content Of The Body -->
            <h1>Gratest Hits (Bonus) - Live Airport Arrivals (Enchanced)</h1>
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
     * This module simulates a dynamic flight departures board. It manages a list of flights,
     * periodically generating new entries and updating their status over time 
     * (DEPARTING, ON_TIME, DELAYED, ARRIVED).
     * Users can view detailed flight information on hover,
     * and toggle a popup showing currently departing flights.
     */

    /**
     * Main departures object handling flights and UI updates.
     * @namespace
     * @property {HTMLElement} flightTable - Table body where flight rows are inserted.
     * @property {Object[]} flights - Array storing current flight data.
     * @property {number} flightId - Unique identifier incrementer for flights.
     * @property {string[]} origins - Array of possible origin cities.
     * @property {HTMLElement} departuresBtn - The "Departures" button element.
     */
    const arrivals = {

    /** @type {HTMLElement} */
    flightTable: document.querySelector("tbody"),

    /** @type {Object[]} */
    flights: [],

    /** @type {number} */
    flightId: 1,

    /** @type {string[]} */
    origins: ["Torino", "Milano", "Roma", "Napoli", "Palermo", "Bologna", "Firenze"],

    /** @type {HTMLElement} */
    departuresBtn: document.getElementById("departures"),

    /**
     * Returns a random city from the origins array.
     * @returns {string} A random origin city.
     */
    getRandomOrigin: () =>
        arrivals.origins[Math.floor(Math.random() * arrivals.origins.length)],

    /**
     * Returns the current time as a formatted string (HH:MM).
     * @param {Date} [date=new Date()] - The date object to format.
     * @returns {string} Formatted current time.
     */
    getCurrentTimeStr: (date = new Date()) =>
        `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,

    /**
     * Advances a flight's status based on elapsed time.
     * @param {Object} flight - The flight object to update.
     * @returns {void}
     */
    advanceFlightStatus: (flight) => {
        const now = Date.now();
        const elapsed = (now - flight.createdAt) / 1000;

        switch (flight.status) {
        case "DEPARTING":
            if (elapsed > 10) flight.status = "ON_TIME";
            break;
        case "ON_TIME":
            if (elapsed > 20) {
            flight.status = Math.random() < 0.3 ? "DELAYED" : "ARRIVED";
            if (flight.status === "ARRIVED") flight.arrivedAt = now;
            }
            break;
        case "DELAYED":
            if (elapsed > 40) {
            flight.status = "ARRIVED";
            flight.arrivedAt = now;
            }
            break;
        case "ARRIVED":
            break;
        }
    },

    /**
     * Displays an extra row with detailed flight information.
     * @param {HTMLTableRowElement} tr - The table row to show details for.
     * @param {Object} flight - The flight object with data.
     * @returns {void}
     */
    showFlightDetails: (tr, flight) => {
        if (tr.nextSibling?.classList?.contains("flightDisplayedRow")) return;

        const { code, airline, origin, gate, scheduledTime, status } = flight;

        const row = document.createElement("tr");
        row.classList.add("flightDisplayedRow");

        const td = document.createElement("td");
        td.colSpan = 6;
        td.innerHTML = `
        <div class="flightDisplayed">
            Flight Code: ${code}<br>
            Airline: ${airline}<br>
            Origin: ${origin}<br>
            Gate: ${gate}<br>
            Scheduled Time: ${scheduledTime}<br>
            Status: ${status}
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
    hideFlightDetails: (tr) => {
        if (tr.nextSibling?.classList?.contains("flightDisplayedRow")) {
        tr.nextSibling.remove();
        }
    },

    /**
     * Toggles a popup showing currently departing flights.
     * @returns {void}
     */
    departuresFlights: () => {
        const popup = document.getElementById("departingPopup");

        if (popup.classList.contains("show")) {
        popup.classList.replace("show", "hidden");
        return;
        }

        const departingFlights = arrivals.flights.filter(
        (f) => f.status === "DEPARTING"
        );

        popup.innerHTML = departingFlights.length
        ? `Departing Flights: <br><br>${departingFlights
            .map(
                (f) =>
                `${f.code} from ${f.origin}<br> Gate: ${f.gate} — ${f.scheduledTime}<br><br>`
            )
            .join("")}`
        : "No departing flights right now";

        popup.classList.replace("hidden", "show");
    },

    /**
     * Updates the flight table:
     * - Removes flights that arrived more than 60 seconds ago.
     * - Advances statuses of all flights.
     * - Sorts flights by scheduled time.
     * - Renders rows and binds hover events.
     * @returns {void}
     */
    updateTable: () => {
        const now = Date.now();

        arrivals.flights = arrivals.flights.filter(
        (f) => !(f.status === "ARRIVED" && now - f.arrivedAt > 60000)
        );

        arrivals.flights.forEach(arrivals.advanceFlightStatus);

        arrivals.flights.sort((a, b) =>
        a.scheduledTime.localeCompare(b.scheduledTime)
        );

        arrivals.flightTable.innerHTML = "";

        arrivals.flights.forEach((flight) => {
        const { code, airline, origin, gate, scheduledTime, status } = flight;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${code}</td>
            <td>${airline}</td>
            <td>${origin}</td>
            <td>${gate}</td>
            <td>${scheduledTime}</td>
            <td class="status-${status.toLowerCase()}">${status}</td>
        `;

        arrivals.flightTable.appendChild(tr);

        tr.addEventListener("mouseenter", () =>
            arrivals.showFlightDetails(tr, flight)
        );
        tr.addEventListener("mouseleave", () =>
            arrivals.hideFlightDetails(tr)
        );
        });
    },

    /**
     * Creates a new flight with randomized values and adds it to the list.
     * @returns {void}
     */
    createFlight: () => {
        const flight = {
        id: arrivals.flightId++,
        code: `IT${Math.floor(100 + Math.random() * 900)}`,
        airline: "ItalAir",
        origin: arrivals.getRandomOrigin(),
        gate: `G${Math.floor(1 + Math.random() * 10)}`,
        scheduledTime: arrivals.getCurrentTimeStr(),
        status: "DEPARTING",
        createdAt: Date.now(),
        arrivedAt: null,
        };

        arrivals.flights.push(flight);
        arrivals.updateTable();
    },
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
     * Entry point for the departures board application. 
     * It imports the `arrivals` module and initializes the UI by:
     * - Adding an event listener to the "Departures" button.
     * - Creating new flights at regular intervals.
     * - Updating the flight table periodically.
     */

    import arrivals from "./helper.js";

    import "../styles/style.css";

    /**
     * Bind event listeners for user interactions and
     * set up recurring updates for the departures board.
     */

    // Show departing flights when the "Departures" button is clicked
    arrivals.departuresBtn.addEventListener("click", () => arrivals.departuresFlights());

    /**
     * Create a new random flight every 3 seconds.
     * @see arrivals.createFlight
     */
    setInterval(() => arrivals.createFlight(), 3000);

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
