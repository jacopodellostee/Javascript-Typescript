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
const departuresBtn = document.getElementById("departures");

/**
 * Returns a random city from the origins array.
 * @returns {string} A random origin city.
 */
const getRandomOrigin = () => origins[Math.floor(Math.random() * origins.length)];

/**
 * Returns the current time as a formatted string (HH:MM).
 * @param {Date} [date=new Date()] - The date object to format.
 * @returns {string} Formatted current time.
 */
const getCurrentTimeStr = (date = new Date()) => 
  `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

/**
 * Advances a flight's status based on how long it has existed.
 * @param {Object} flight - The flight object to update.
 * @returns {void}
 */
const advanceFlightStatus = flight => {

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
const hideFlightDetails = tr => {
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

  const departingFlights = flights.filter(f => f.status === 'DEPARTING');

  popup.innerHTML = departingFlights.length
    ? `Departing Flights: <br><br>${departingFlights
        .map(f => `${f.code} from ${f.origin} <br> Gate: ${f.gate} — ${f.scheduledTime}<br><br>`)
        .join('')}`
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

  flights = flights.filter(f => !(f.status === 'ARRIVED' && now - f.arrivedAt > 60000));

  flights.forEach(advanceFlightStatus);

  flights.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

  flightTable.innerHTML = '';

  flights.forEach(flight => {

    const { code, airline, origin, gate, scheduledTime, status } = flight;

    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td>${code}</td>
      <td>${airline}</td>
      <td>${origin}</td>
      <td>${gate}</td>
      <td>${scheduledTime}</td>
      <td class="status-${status.toLowerCase()}">${status}</td>
    `;

    flightTable.appendChild(tr);

    tr.addEventListener('mouseenter', () => showFlightDetails(tr, flight));

    tr.addEventListener('mouseleave', () => hideFlightDetails(tr));
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
    airline: 'ItalAir',
    origin: getRandomOrigin(),
    gate: `G${Math.floor(1 + Math.random() * 10)}`,
    scheduledTime: getCurrentTimeStr(),
    status: 'DEPARTING',
    createdAt: Date.now(),
    arrivedAt: null
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
  new Promise(resolve => setTimeout(() => {
    createFlight();
    resolve();
  }, delay));

// Event listeners and intervals
departuresBtn.addEventListener('click', departuresFlights);

// Create a new flight every 3 seconds
setInterval(() => createFlightAsync(), 3000);

// Update the table every 2 seconds
setInterval(updateTable, 2000);
