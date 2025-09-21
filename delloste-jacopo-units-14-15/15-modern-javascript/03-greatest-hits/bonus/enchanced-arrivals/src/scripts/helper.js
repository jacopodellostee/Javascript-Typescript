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
