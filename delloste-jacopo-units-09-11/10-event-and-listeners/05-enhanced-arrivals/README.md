# Enhanced Arrivals

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Start with the ‘Arrivals’ exercise from a previous lesson

- Add the following features:

    + When the user clicks a row, it should expand to show more information about the flight

    + When the user clicks an open row it should close again

    + If the user clicks a row, any other open rows should close

        - Like in this [example of an accordion](https://jqueryui.com/accordion/#collapsible).

    + Add a ‘Departures’ section with departing flights

    + The user should be able to switch between Arrivals and Departures with a fade-in/fade-out animation


### Solution Step-by-Step

1. Create the  `05-enhanced-arrivals` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `05-enhanced-arrivals` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Il mio primo sito web">
            <meta name="author" content="Jacopo Dell'Oste">
            <title>Enchanced Arrivals</title>
            <link rel="stylesheet" href="./css/style.css">
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

            <!-- End Of The Body -->
            <script src="./scripts/main.js"></script>
        </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * 
    * @description
    * This script simulates a dynamic flight departure board. It periodically generates
    * new flight entries and updates their status over time (DEPARTING, ON_TIME, DELAYED, ARRIVED).
    * Users can view additional flight details on hover and see all current departing flights in a popup.
    */

    /**
    * Table body where flight rows are inserted.
    * @type {HTMLElement}
    */
    const flightTable = document.querySelector('tbody');

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
    const origins = ['Torino', 'Milano', 'Roma', 'Napoli', 'Palermo', 'Bologna', 'Firenze'];

    /**
    * The "Departures" button element.
    * @type {HTMLElement}
    */
    let departures = document.getElementById("departures");

    /**
    * Returns a random city from the origins array.
    * @returns {string} A random origin city.
    */
    function getRandomOrigin() {
        return origins[Math.floor(Math.random() * origins.length)];
    }

    /**
    * Returns the current time as a formatted string (HH:MM).
    * @returns {string} Formatted current time.
    */
    function getCurrentTimeStr() {

        let date = new Date();

        return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    }

    /**
    * Advances a flight's status based on how long it has existed.
    * @param {Object} flight - The flight object to update.
    * @returns {void}
    */
    function advanceFlightStatus(flight) {

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
    }

    /**
    * Displays an extra row with detailed flight information.
    * @param {HTMLTableRowElement} tr - The table row to show details for.
    * @param {Object} flight - The flight object with data.
    * @returns {void}
    */
    function showFlightDetails(tr, flight) {

        if (tr.nextSibling && tr.nextSibling.classList?.contains("flightDisplayedRow"))
            return;

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
    }

    /**
    * Toggles a popup showing currently departing flights.
    * @returns {void}
    */
    function departuresFlights() {

        const popup = document.getElementById("departingPopup");

        if (popup.classList.contains("show")) {

            popup.classList.remove("show");

            popup.classList.add("hidden");

            return;
        }

        const departingFlights = flights.filter(f => f.status === 'DEPARTING');

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
    }

    /**
    * Removes the flight detail row if it exists.
    * @param {HTMLTableRowElement} tr - The table row to hide details for.
    * @returns {void}
    */
    function hideFlightDetails(tr) {
        if (tr.nextSibling && tr.nextSibling.classList?.contains("flightDisplayedRow")) {
            tr.nextSibling.remove();
        }
    }

    /**
    * Updates the flight table, filters out old arrivals, advances flight statuses,
    * and binds hover events for each row.
    * @returns {void}
    */
    function updateTable() {
        const now = Date.now();

        // Remove flights that have arrived over 60s ago
        flights = flights.filter(f => !(f.status === 'ARRIVED' && now - f.arrivedAt > 60000));

        flights.forEach(advanceFlightStatus);

        flights.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

        flightTable.innerHTML = "";

        flights.forEach(flight => {

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

            flightTable.appendChild(tr);

            tr.addEventListener('mouseenter', () => showFlightDetails(tr, flight));

            tr.addEventListener('mouseleave', () => hideFlightDetails(tr));
        });
    }

    /**
    * Creates a new flight with randomized values and adds it to the list.
    * @returns {void}
    */
    function createFlight() {
        const now = new Date();

        const flight = {
            id: flightId++,
            code: `IT${Math.floor(100 + Math.random() * 900)}`,
            airline: 'ItalAir',
            origin: getRandomOrigin(),
            gate: `G${Math.floor(1 + Math.random() * 10)}`,
            scheduledTime: getCurrentTimeStr(now),
            status: 'DEPARTING',
            createdAt: Date.now(),
            arrivedAt: null
        };

        flights.push(flight);
        
        updateTable();
    }

    // Event listeners and intervals
    departures.addEventListener('click', departuresFlights);

    // Create a new flight every 10 seconds
    setInterval(() => {
        createFlight();
    }, 10000);

    // Update the table every 2 seconds
    setInterval(updateTable, 2000);
    ```

    * The CSS code:

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

5. Check The Result using the DevTool Console of the Browser
