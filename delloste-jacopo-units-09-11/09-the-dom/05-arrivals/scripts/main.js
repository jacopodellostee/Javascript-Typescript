/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

const arrivalsBody = document.getElementById("arrivals-body");

let flights = [];
let flightId = 0;

function generateRandomFlight() {
  const airlines = ["Delta", "United", "American Airlines", "Southwest", "JetBlue"];
  const origins = ["New York", "Chicago", "Los Angeles", "Dallas", "Atlanta"];
  const gates = ["A1", "B2", "C3", "D4", "E5"];
  const statuses = ["DEPARTING", "ON_TIME", "DELAYED", "ARRIVED"];

  const airline = airlines[Math.floor(Math.random() * airlines.length)];
  const origin = origins[Math.floor(Math.random() * origins.length)];
  const gate = gates[Math.floor(Math.random() * gates.length)];
  const time = new Date(Date.now() + Math.random() * 3600000);

  return {
    id: flightId++,
    flight: `FL${Math.floor(1000 + Math.random() * 9000)}`,
    airline,
    origin,
    gate,
    time,
    status: "DEPARTING",
    addedAt: Date.now(),
  };
}

function updateFlightStatuses() {
  const now = Date.now();

  flights.forEach(flight => {
    const timeElapsed = now - flight.addedAt;

    if (timeElapsed > 50000 && flight.status !== "ARRIVED") {
      flight.status = "ARRIVED";
    } else if (timeElapsed > 30000 && flight.status !== "ARRIVED") {
      flight.status = "DELAYED";
    } else if (timeElapsed > 15000 && flight.status === "DEPARTING") {
      flight.status = "ON_TIME";
    }
  });

  // Remove flights that have arrived more than 60 seconds ago
  flights = flights.filter(flight => {
    return flight.status !== "ARRIVED" || now - flight.addedAt < 60000;
  });

  renderFlights();
}

function renderFlights() {
  arrivalsBody.innerHTML = "";

  flights.sort((a, b) => a.time - b.time);

  flights.forEach(flight => {
    const row = document.createElement("tr");
    if (flight.status === "DELAYED") {
      row.style.color = "red";
    }
    row.innerHTML = `
      <td>${flight.flight}</td>
      <td>${flight.airline}</td>
      <td>${flight.origin}</td>
      <td>${flight.gate}</td>
      <td>${flight.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
      <td>${flight.status}</td>
    `;
    arrivalsBody.appendChild(row);
  });
}

function addFlight() {
  const flight = generateRandomFlight();
  flights.push(flight);
  renderFlights();
}

setInterval(addFlight, 10000);
setInterval(updateFlightStatuses, 5000);

// Initial load
addFlight();