# Arrivals

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Implement the arrivals page of an airport such as [this one](http://www.aeroportoditorino.it/en/tofly/flights/departs-arrivals)

    + Create a complete proper webpage with a title, description and all other HTML tags

    + Add Javascript and CSS files

    + Include as much detail as you can to each flight row

    + Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc

- Simulate a real arrivals list

    + The list should start empty and update every 10 seconds

    + Flights that have arrived should be removed after 60 seconds

    + Flights should change status in time. E.g. departing>on_time>delayed>arrived

    + Flights that are delayed should be displayed in red

    + New flights should be added to the bottom of the list

    + The list should be sorted by date and hour


### Solution Step-by-Step

1. Create the  `05-arrivals` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `05-arrivals` directory

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
            <title>Airport Arrivals</title>
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
            <!-- Content Of The Body -->
            <h1>Live Airport Arrivals</h1>
            <p>Stay updated with the latest flight arrivals.</p>
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

4. Write the scripts

    * The JavaScript code:

    ```javascript
    /**
    * @file: main.js
    * @author: Jacopo Dell'Oste
    * Flight Tracker Simulator
    *
    * This file simulates a flight departure table.
    * It dynamically adds new flights, updates their statuses over time,
    * and displays them in a table in the DOM.
    * 
    * Flights cycle through the following statuses:
    * - DEPARTING → ON_TIME → ARRIVED
    * - Or: DEPARTING → ON_TIME → DELAYED → ARRIVED
    * 
    * Flights disappear from the table 60 seconds after arriving.
    */

    const flightTable = document.querySelector('tbody');

    let flights = [];

    let flightId = 1;

    const origins = ['Torino', 'Milano', 'Roma', 'Napoli', 'Palermo', 'Bologna', 'Firenze'];

    /**
    * Returns a random city from the list of available origins.
    * @returns {string} Random origin city
    */
    function getRandomOrigin() {
        return origins[Math.floor(Math.random() * origins.length)];
    }

    /**
    * Formats the current time (or provided date) as HH:MM.
    * @param {Date} [date=new Date()] Optional date object, defaults to now
    * @returns {string} Formatted time string
    */
    function getCurrentTimeStr() {
        let date = new Date() 
        return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    }

    /**
    * Advances the flight status based on how much time has passed.
    * - After 10s: DEPARTING → ON_TIME
    * - After 20s: ON_TIME → ARRIVED (70%) or DELAYED (30%)
    * - After 40s: DELAYED → ARRIVED
    * 
    * @param {Object} flight - The flight object to update
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
    * Updates the HTML flight table:
    * - Filters out arrived flights older than 60 seconds
    * - Advances flight statuses
    * - Sorts flights by scheduled time
    * - Re-renders all rows in the table
    * @returns {void}
    */
    function updateTable() {
        const now = Date.now();

        // Remove flights that arrived more than 60 seconds ago
        flights = flights.filter(f => !(f.status === 'ARRIVED' && now - f.arrivedAt > 60000));

        // Advance each flight's status
        flights.forEach(advanceFlightStatus);

        // Sort flights by scheduled time (HH:MM)
        flights.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

        // Clear the table
        flightTable.innerHTML = "";

        // Render all flights
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
        });
    }


    /**
    * Creates a new random flight and adds it to the flights array.
    * Flight starts in the "DEPARTING" state.
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

    // Add a new flight every 10 seconds
    setInterval(() => {
        createFlight();
    }, 10000);

    // Update flight statuses and table every 2 seconds
    setInterval(updateTable, 2000);
    ```

    * The CSS code:

    ```css 
    /**
    * style.css
    *
    * This stylesheet defines the layout and visual appearance of the Airport Arrivals page.
    * It provides formatting for the arrivals table, including header styles, data alignment,
    * and flight status color coding for real-time updates.
    */

    /* Base body styling for overall layout and readability */
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f5f5f5;
    }

    /* Main heading style for page title */
    h1 {
        color: #333;
    }

    /* Styling for the flight arrivals table */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Soft shadow for subtle elevation */
    }

    /* Common cell styles: padding, border, and center alignment */
    th, td {
        padding: 12px;
        border: 1px solid #ccc;
        text-align: center;
    }

    /* Light background for table headers for better visibility */
    th {
        background-color: #eaeaea;
    }

    /* === Flight Status Color Coding === */

    /* Red color and bold text for delayed flights */
    .status-delayed {
        color: red;
        font-weight: bold;
    }

    /* Green color for flights that have arrived */
    .status-arrived {
        color: green;
    }

    /* Blue color for flights that are on time */
    .status-on_time {
        color: blue;
    }

    /* Orange color for departing flights */
    .status-departing {
        color: orange;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
