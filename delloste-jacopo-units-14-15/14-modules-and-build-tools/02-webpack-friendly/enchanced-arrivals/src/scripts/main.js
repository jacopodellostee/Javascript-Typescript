/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the arrivals/departures board application. 
 * It imports the `arrivals` module and initializes the UI by:
 * - Adding an event listener to the "Departures" button.
 * - Creating new flights at regular intervals.
 * - Updating the flight table periodically.
 */

import arrivals from './helper.js';

// Import the style
import '../styles/style.css';

/**
 * Bind event listeners for user interactions and
 * set up recurring updates for the arrivals board.
 */

// Show departing flights when the "Departures" button is clicked
arrivals.departures.addEventListener('click', () => arrivals.departuresFlights());

/**
 * Create a new random flight every 10 seconds.
 * @see arrivals.createFlight
 */
setInterval(() => {
    arrivals.createFlight();
}, 10000);

/**
 * Update the flight table every 2 seconds to reflect
 * status changes and remove old arrivals.
 * @see arrivals.updateTable
 */
setInterval(() => arrivals.updateTable(), 2000);
