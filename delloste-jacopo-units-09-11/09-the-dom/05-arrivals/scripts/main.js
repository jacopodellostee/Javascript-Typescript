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
function getCurrentTimeStr(date = new Date()) {
    return date.getHours().toString().padStart(2, '0') + ':' +
           date.getMinutes().toString().padStart(2, '0');
}

/**
 * Advances the flight status based on how much time has passed.
 * - After 10s: DEPARTING → ON_TIME
 * - After 20s: ON_TIME → ARRIVED (70%) or DELAYED (30%)
 * - After 40s: DELAYED → ARRIVED
 * 
 * @param {Object} flight - The flight object to update
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
            // Flight is done updating
            break;
    }
}

/**
 * Updates the HTML flight table:
 * - Filters out arrived flights older than 60 seconds
 * - Advances flight statuses
 * - Sorts flights by scheduled time
 * - Re-renders all rows in the table
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
