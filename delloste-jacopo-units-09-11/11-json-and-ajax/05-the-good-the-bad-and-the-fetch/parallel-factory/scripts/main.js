/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This script loads multiple car objects from remote JSON endpoints in parallel using the Fetch API.
 * While loading, it shows a loader message. Once all data is retrieved successfully,
 * it renders the results to the DOM. Errors are logged to the console.
 */

/**
 * The main HTML body element where content will be appended.
 * @type {HTMLBodyElement}
 */
const body = document.body;

/**
 * Array of JSONBlob API endpoints, each containing one car object.
 * @type {string[]}
 */
const carEndpoints = [
    'https://jsonblob.com/api/jsonBlob/1371034507947466752',
    'https://jsonblob.com/api/jsonBlob/1371034901985550336',
    'https://jsonblob.com/api/jsonBlob/1371035331100598272',
    'https://jsonblob.com/api/jsonBlob/1371035595291418624',
    'https://jsonblob.com/api/jsonBlob/1371035850028277760',
];

/**
 * Loader element displayed while car data is loading.
 * @type {HTMLHeadingElement}
 */
const loader = document.createElement("h2");

loader.textContent = "Loading Cars Details...";

body.append(loader);

/**
 * Creates an <li> element with provided text content.
 * 
 * @param {string} text - The text to display inside the list item.
 * @returns {HTMLLIElement} - The created list item.
 */
function createLi(text) {
    const li = document.createElement("li");

    li.textContent = text;

    return li;
}

/**
 * Builds a list item element representing a single car and its nested details.
 * 
 * @param {Object} car - The car object from JSON response.
 * @returns {HTMLLIElement} - A list item containing all structured car info.
 */
function createCarElement(car) {
    const carLi = document.createElement("li");

    carLi.classList.add("carItem");

    const carDetails = document.createElement("ul");

    carDetails.classList.add("carList");

    // Basic car information
    carDetails.append(
        createLi(`ID: ${car.id}`),
        createLi(`Brand: ${car.brand}`),
        createLi(`Model: ${car.model}`),
        createLi(`Year of Registration: ${car.yearOfRegistration}`),
        createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`)
    );

    // Optional features (if available)
    const optionalWrapper = createLi("Optional:");

    const optionalList = document.createElement("ul");

    optionalList.classList.add("carList");

    if (Array.isArray(car.optional)) {
        optionalList.append(...car.optional.map(opt => createLi(opt)));
    } else {
        optionalList.append(createLi("No optionals available"));
    }

    optionalWrapper.append(optionalList);

    carDetails.append(optionalWrapper);

    // Engine specifications
    const engineWrapper = createLi("Engine:");

    const engineList = document.createElement("ul");

    engineList.classList.add("carList");

    engineList.append(
        createLi(`Type: ${car.engine.type}`),
        createLi(`Horse Power: ${car.engine.horsePower}`),
        createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
    );

    engineWrapper.append(engineList);

    carDetails.append(engineWrapper);

    // Ownership status
    carDetails.append(createLi(`Owner: ${car.owner ? car.owner : "None"}`));

    // Append car details to the main <li> and return
    carLi.append(carDetails);

    return carLi;
}

/**
 * Fetches and renders car data from all endpoints using Promise.all.
 *
 * @returns {void}
 */
function loadCars() {
    // Create a container list for all cars
    const ul = document.createElement("ul");

    ul.classList.add("carList");

    // Create an array of fetch promises for each endpoint
    const fetchPromises = carEndpoints.map(url =>
        fetch(url)
            .then(response => {
                // Check for HTTP errors
                if (!response.ok) {
                    console.error(`Failed to load from ${url}: status ${response.status}`);
                    return null;
                }
                // Parse JSON response
                return response.json();
            })
            .then(data => createCarElement(data)) // Convert car data into DOM elements
            .catch(error => {
                // Log any network or parsing errors
                console.error(error);

                return null; // Avoid inserting undefined into results
            })
    );

    // Wait for all fetches to complete
    Promise.all(fetchPromises).then(results => {
        loader.remove(); // Remove the loading message

        // Append only successfully loaded car elements to the list
        results.filter(Boolean).forEach(carEl => ul.appendChild(carEl));

        // Add the full list to the page
        body.appendChild(ul);
    });
}

// Start the loading process
loadCars();
