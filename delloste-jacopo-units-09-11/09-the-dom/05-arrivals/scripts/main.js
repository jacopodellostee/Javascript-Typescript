/**
* @file: main.js
* @author: Jacopo Dell'Oste
* title
*
* what this file do
*/

const flightTable = document.querySelector('tbody');

let flights = [];
let flightId = 1;

const origins = ['Torino', 'Milano', 'Roma', 'Napoli', 'Palermo', 'Bologna', 'Firenze'];

function getRandomOrigin() {
    return origins[Math.floor(Math.random() * origins.length)];
}

function getCurrentTimeStr(date = new Date()) {
    return date.getHours().toString().padStart(2, '0') + ':' +
           date.getMinutes().toString().padStart(2, '0');
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


setInterval(() => {
    createFlight();
}, 10000);


setInterval(updateTable, 2000);
