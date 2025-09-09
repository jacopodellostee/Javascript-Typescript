import arrivals from './helper.js';

import '../styles/style.css';

// Event listeners and intervals
arrivals.departures.addEventListener('click', () => arrivals.departuresFlights());

// Create a new flight every 10 seconds
setInterval(() => {
    arrivals.createFlight();
}, 10000);

// Update the table every 2 seconds
setInterval(() => arrivals.updateTable(), 2000);
