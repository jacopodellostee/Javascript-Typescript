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
