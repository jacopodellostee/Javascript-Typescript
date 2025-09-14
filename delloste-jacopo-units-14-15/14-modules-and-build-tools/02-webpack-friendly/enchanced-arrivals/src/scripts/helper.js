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
