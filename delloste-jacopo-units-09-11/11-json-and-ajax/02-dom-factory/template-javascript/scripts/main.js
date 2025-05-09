/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script dynamically renders a detailed list of cars on the webpage.
 * Each car displays information such as brand, model, registration year,
 * transmission type, optional features, engine specs, and ownership status.
 */

/**
 * JSON string representing an array of car objects.
 * Each object contains metadata and nested engine and optional info.
 * @type {string}
 */
let carsJSON = `[
    {
        "id": 1,
        "brand": "Citroen",
        "model": "C3 Picasso",
        "yearOfRegistration": 2012,
        "automatic": false,
        "optional": ["LED headlights", "Cruise Control", "Air Conditioning"],
        "engine": {
            "type": "diesel",
            "horsePower": 95,
            "emmissionStandard": "Euro 5"
        },
        "owner": null
    },
    {
        "id": 2,
        "brand": "Peugeot",
        "model": "207",
        "yearOfRegistration": 2002,
        "automatic": false,
        "optional": null,
        "engine": {
            "type": "gasoline",
            "horsePower": 75,
            "emmissionStandard": "Euro 4"
        },
        "owner": ["Jacopo Dell'Oste", "Sandro Dell'Oste"]
    },
    {
        "id": 3,
        "brand": "KIA",
        "model": "Stonic",
        "yearOfRegistration": 2024,
        "automatic": true,
        "optional": ["LED headlights", "Adaptive Cruise Control", "Air Conditioning", "Start and Stop", "Reverse Camera"],
        "engine": {
            "type": "gasoline",
            "horsePower": 115,
            "emmissionStandard": "Euro 6E"
        },
        "owner": null
    },
    {
        "id": 4,
        "brand": "Volkswagen",
        "model": "Golf 8",
        "yearOfRegistration": 2021,
        "automatic": true,
        "optional": ["LED Matrix headlights", "Keyless Entry", "Heated Seats", "Digital Cockpit"],
        "engine": {
            "type": "mild hybrid",
            "horsePower": 150,
            "emmissionStandard": "Euro 6D"
        },
        "owner": null
    },
    {
        "id": 5,
        "brand": "Fiat",
        "model": "500e",
        "yearOfRegistration": 2023,
        "automatic": true,
        "optional": ["Panoramic Roof", "Wireless Apple CarPlay", "Fast Charging", "Lane Assist"],
        "engine": {
            "type": "electric",
            "horsePower": 118,
            "emmissionStandard": "Zero Emissions"
        },
        "owner": null
    }
]`;

/**
 * Creates a list item element (<li>) with the provided text content.
 *
 * @param {string} text - The text to display inside the list item.
 * @returns {HTMLLIElement} The newly created list item.
 */
function createLi(text) {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
}

/**
 * Parsed car data from the JSON string.
 * @type {Array<Object>}
 */
let cars = JSON.parse(carsJSON);

/**
 * Reference to the body element for appending the main list.
 * @type {HTMLBodyElement}
 */
let body = document.body;

/**
 * Unordered list that will contain each car's details.
 * @type {HTMLUListElement}
 */
let ul = document.createElement("ul");
ul.classList.add("carList");

cars.forEach(car => {
    /**
     * List item for an individual car.
     * @type {HTMLLIElement}
     */
    let carLi = document.createElement("li");
    carLi.classList.add("carItem");

    /**
     * Sub-list containing details for one car.
     * @type {HTMLUListElement}
     */
    let carDetails = document.createElement("ul");
    carDetails.classList.add("carList");

    // Basic info
    carDetails.append(
        createLi(`ID: ${car.id}`),
        createLi(`Brand: ${car.brand}`),
        createLi(`Model: ${car.model}`),
        createLi(`Year of Registration: ${car.yearOfRegistration}`),
        createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`)
    );

    // Optionals
    let optionalWrapper = createLi("Optional:");
    optionalWrapper.classList.add("carItem");

    let optionalList = document.createElement("ul");
    optionalList.classList.add("carList");

    if (Array.isArray(car.optional)) {
        optionalList.append(...car.optional.map(opt => createLi(opt)));
    } else {
        optionalList.append(createLi("No optionals available"));
    }

    optionalWrapper.append(optionalList);
    carDetails.append(optionalWrapper);

    // Engine details
    let engineWrapper = createLi("Engine:");
    engineWrapper.classList.add("carItem");

    let engineList = document.createElement("ul");
    engineList.classList.add("carList");

    engineList.append(
        createLi(`Type: ${car.engine.type}`),
        createLi(`Horse Power: ${car.engine.horsePower}`),
        createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
    );

    engineWrapper.append(engineList);
    carDetails.append(engineWrapper);

    // Owner info
    carDetails.append(createLi(`Owner: ${car.owner ? car.owner : "None"}`));

    carLi.append(carDetails);
    ul.append(carLi);
});

// Append final list to the document body
body.append(ul);
