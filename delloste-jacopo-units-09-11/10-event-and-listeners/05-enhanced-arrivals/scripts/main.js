/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 *
 */

const flightTable = document.querySelector('tbody');

let flights = [];

let flightId = 1;

const origins = ['Torino', 'Milano', 'Roma', 'Napoli', 'Palermo', 'Bologna', 'Firenze'];

let departures = document.getElementById("departures");

function getRandomOrigin() {
    return origins[Math.floor(Math.random() * origins.length)];
}


function getCurrentTimeStr() {
    let date = new Date() 
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
}


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

function hideFlightDetails(tr) {
    if (tr.nextSibling && tr.nextSibling.classList?.contains("flightDisplayedRow")) {
        tr.nextSibling.remove();
    }
}

function updateTable() {
    const now = Date.now();

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

departures.addEventListener('click', departuresFlights);

setInterval(() => {
    createFlight();
}, 10000);


setInterval(updateTable, 2000);
