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
