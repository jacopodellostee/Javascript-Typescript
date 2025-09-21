# Greatest Hits - Enhanced Arrivals

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

#### This directory contains the solution of the 'Enhanced Arrivals' Exercise Without Webpack

### Solution Step-by-Step

1. Create the `enhanced-arrivals` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

   - the `index.html` file will be in the `enhanced-arrivals` directory

   - the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

   - the `style.css` file will be in a directory called `css` containing only CSS file

3. Write the HTML code and link the script

   - The HTML code:

   ```HTML
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta name="description" content="Il mio primo sito web">
           <meta name="author" content="Jacopo Dell'Oste">
           <title>Gratest Hits - Enchanced Arrivals</title>
           <link rel="stylesheet" href="./css/style.css">
       </head>
       <body>
           <!-- Content Of The Body -->
           <h1>Gratest Hits - Live Airport Arrivals (Enchanced)</h1>
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

           <!-- End Of The Body -->
           <script src="./scripts/main.js"></script>
       </body>
   </html>
   ```

4. Write the script

   - The JavaScript code:

   ```javascript
   /**
    * @file main.js
    * @author Jacopo Dell'Oste
    *
    * @description
    * This script simulates a dynamic flight departure board using The Modern Javascript's ES6+ Syntax.
    * It periodically creates new flight entries and updates their status
    * over time (DEPARTING, ON_TIME, DELAYED, ARRIVED).
    * Users can hover over flights to view extra details and toggle a popup with currently departing flights.
    */

   /**
    * Table body where flight rows are inserted.
    * @type {HTMLElement}
    */
   const flightTable = document.querySelector("tbody");

   /**
    * Array storing current flight data.
    * @type {Object[]}
    */
   let flights = [];

   /**
    * Unique identifier incrementer for flights.
    * @type {number}
    */
   let flightId = 1;

   /**
    * Array of possible origin cities.
    * @type {string[]}
    */
   const origins = [
     "Torino",
     "Milano",
     "Roma",
     "Napoli",
     "Palermo",
     "Bologna",
     "Firenze",
   ];

   /**
    * The "Departures" button element.
    * @type {HTMLElement}
    */
   const departuresBtn = document.getElementById("departures");

   /**
    * Returns a random city from the origins array.
    * @returns {string} A random origin city.
    */
   const getRandomOrigin = () =>
     origins[Math.floor(Math.random() * origins.length)];

   /**
    * Returns the current time as a formatted string (HH:MM).
    * @param {Date} [date=new Date()] - The date object to format.
    * @returns {string} Formatted current time.
    */
   const getCurrentTimeStr = (date = new Date()) =>
     `${date.getHours().toString().padStart(2, "0")}:${date
       .getMinutes()
       .toString()
       .padStart(2, "0")}`;

   /**
    * Advances a flight's status based on how long it has existed.
    * @param {Object} flight - The flight object to update.
    * @returns {void}
    */
   const advanceFlightStatus = (flight) => {
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
   };

   /**
    * Displays an extra row with detailed flight information.
    * @param {HTMLTableRowElement} tr - The table row to show details for.
    * @param {Object} [flight={}] - The flight object with data.
    * @returns {void}
    */
   const showFlightDetails = (tr, flight = {}) => {
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
   };

   /**
    * Removes the flight detail row if it exists.
    * @param {HTMLTableRowElement} tr - The table row to hide details for.
    * @returns {void}
    */
   const hideFlightDetails = (tr) => {
     if (tr.nextSibling?.classList?.contains("flightDisplayedRow"))
       tr.nextSibling.remove();
   };

   /**
    * Toggles a popup showing currently departing flights.
    * @returns {void}
    */
   const departuresFlights = () => {
     const popup = document.getElementById("departingPopup");

     const isVisible = popup.classList.contains("show");

     if (isVisible) return popup.classList.replace("show", "hidden");

     const departingFlights = flights.filter((f) => f.status === "DEPARTING");

     popup.innerHTML = departingFlights.length
       ? `Departing Flights: <br><br>${departingFlights
           .map(
             (f) =>
               `${f.code} from ${f.origin} <br> Gate: ${f.gate} — ${f.scheduledTime}<br><br>`
           )
           .join("")}`
       : "No departing flights right now";

     popup.classList.replace("hidden", "show");
   };

   /**
    * Updates the flight table:
    * - Removes flights that arrived more than 60 seconds ago.
    * - Advances statuses of all flights.
    * - Sorts flights by scheduled time.
    * - Renders rows and binds hover events.
    * @returns {void}
    */
   const updateTable = () => {
     const now = Date.now();

     flights = flights.filter(
       (f) => !(f.status === "ARRIVED" && now - f.arrivedAt > 60000)
     );

     flights.forEach(advanceFlightStatus);

     flights.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

     flightTable.innerHTML = "";

     flights.forEach((flight) => {
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

       flightTable.appendChild(tr);

       tr.addEventListener("mouseenter", () => showFlightDetails(tr, flight));

       tr.addEventListener("mouseleave", () => hideFlightDetails(tr));
     });
   };

   /**
    * Creates a new flight with randomized values and adds it to the list.
    * @returns {void}
    */
   const createFlight = () => {
     const flight = {
       id: flightId++,
       code: `IT${Math.floor(100 + Math.random() * 900)}`,
       airline: "ItalAir",
       origin: getRandomOrigin(),
       gate: `G${Math.floor(1 + Math.random() * 10)}`,
       scheduledTime: getCurrentTimeStr(),
       status: "DEPARTING",
       createdAt: Date.now(),
       arrivedAt: null,
     };

     flights.push(flight);
     updateTable();
   };

   /**
    * Asynchronously creates a flight after a specified delay.
    * @param {number} [delay=0] - The delay in milliseconds before creating the flight.
    * @returns {Promise<void>} Resolves once the flight is created.
    */
   const createFlightAsync = (delay = 0) =>
     new Promise((resolve) =>
       setTimeout(() => {
         createFlight();
         resolve();
       }, delay)
     );

   // Event listeners and intervals
   departuresBtn.addEventListener("click", departuresFlights);

   // Create a new flight every 3 seconds
   setInterval(() => createFlightAsync(), 3000);

   // Update the table every 2 seconds
   setInterval(updateTable, 2000);
   ```

   - The CSS code:

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
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adds soft outer shadow for depth */
   }

   /* Cell padding, borders, and alignment */
   th,
   td {
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
     transform: translateY(
       20px
     ); /* Starts slightly lower (for animation effect) */
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

5. Check The Result using the DevTool Console of the Browser

### Key Difference

| Feature | Traditional Syntax | Modern (ES6+) Syntax | Description of Change |
|---|---|---|---|
| **Function Declaration** | `function myFunc() { ... }` | `const myFunc = () => { ... };` | Transition from `function` declarations to **arrow functions** (`=>`) and `const` declarations for functions. Arrow functions provide a more concise syntax and lexical `this` binding. |
| **Variable Declaration** | `let flights = [];` `let departures = ...;` | `let flights = [];` `const departuresBtn = ...;` | Consistent use of `const` for variables that are not reassigned, and `let` for those that are. This improves code clarity and prevents accidental reassignments. |
| **Default Parameters** | `function getCurrentTimeStr() { ... }` (no explicit default) | `const getCurrentTimeStr = (date = new Date()) => ...;` | **Default parameters** allow assigning predefined values to function parameters directly in their signature, making the code cleaner and more readable. |
| **String Literals (Template Literals)** | Concatenation with `+` and multi-line strings with `\n` (e.g., `td.innerHTML = `...` `) | Template literals using backticks (`` ` ``) for multi-line strings and embedded expressions (e.g., `td.innerHTML = ``...`` `). | This significantly improves readability for complex string constructions.|
| **Object Destructuring** | Accessing properties directly (e.g., `flight.code`, `flight.airline`) | `const { code, airline, origin, gate, scheduledTime, status } = flight;` | **Object destructuring** allows extracting properties from objects into distinct variables, making code more concise and readable, especially when using multiple properties from an object. |
| **Optional Chaining** | Manual checks for `nextSibling` existence (e.g., `tr.nextSibling && tr.nextSibling.classList?.contains(...)`) | `tr.nextSibling?.classList?.contains(...)` | **Optional chaining (`?.`)** provides a safer way to access properties of an object that might be `null` or `undefined` without causing an error, simplifying conditional checks. |
| **Conditional Class Manipulation** | `popup.classList.remove("show"); popup.classList.add("hidden");` | `popup.classList.replace("show", "hidden");` | The `classList.replace()` method offers a more concise way to swap one class for another on an element, improving readability over separate `remove()` and `add()` calls. |
| **Implicit Return in Arrow Functions** | N/A (functions are typically multi-line) | `const getRandomOrigin = () => origins[Math.floor(Math.random() * origins.length)];` | Arrow functions with a single expression can implicitly return the result without the `return` keyword, leading to more compact code for simple functions. |
| **Asynchronous Operations** | `setInterval` for periodic updates, no explicit async functions | `setInterval(() => createFlightAsync(), 3000);` `const createFlightAsync = (delay = 0) => new Promise(...)` | Introduction of `Promise` and `async` patterns (though `async/await` isn't fully used for the main logic, `createFlightAsync` demonstrates a modern async approach). This hints at better handling of asynchronous tasks. |
| **Array `map` for HTML Generation** | Manual loop or `forEach` to build HTML string | `departingFlights.map(f => ``...``).join(\'\')` | Using `Array.prototype.map()` with template literals to transform an array of data into an array of HTML strings, then `join(\'\')` to concatenate them, is a common modern pattern for dynamic HTML generation. |
