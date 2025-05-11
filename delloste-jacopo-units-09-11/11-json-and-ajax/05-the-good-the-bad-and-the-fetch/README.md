# The good, the bad and the fetch

**Author**: Jacopo Dell'Oste 

### Request From The Client

- This exercise is optional

- Rewrite all the code examples in this unit that use XMLHttpRequest using the modern fetch method

- Ensure the rewritten code replicates the exact same behavior

- **Bonus**:
    
    + Read the following articles to understand the limitations of fetch
    
    + These references include advanced coding practices
    
    + You may encounter unfamiliar code syntax that will be explained in future lessons
    
    + [Fetch: Download progress](https://javascript.info/fetch-progress)

    
    + [How to monitor the progress of a Javascript fetch](https://dev.to/tqbit/how-to-monitor-the-progress-of-a-javascript-fetch-request-and-cancel-it-on-demand-107f)
    
    + [Show a Progress Indicator for a Fetch Request with the Streams API](https://www.bram.us/2021/12/25/show-a-progress-indicator-for-a-fetch-request-with-the-streams-api/)
    
    + [Fetch & Tracking Download Progress](https://www.javascripttutorial.net/web-apis/fetch-tracking-download-progress/)


### Solution Step-by-Step

1. Create the  `05-the-good-the-bad-and-the-fetch` folder

2. Rewrite the entire code using `fetch()` in the respective directories

    - `parallel-factory`:

        ```javascript
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
                            return;
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
        ```
    - `parallel-factory`:

        + `factory.js`:

            ```javascript
            /**
            * @file factory.js
            * @author Jacopo Dell'Oste
            * 
            * @description
            * This file retrieves factory data from a remote API endpoint and dynamically
            * creates and appends HTML elements to display the factory's details, including
            * name, foundation year, bank transfer acceptance, website presence, employee list,
            * and address.
            */

            /**
            * The main container where factory information will be rendered.
            * @type {HTMLElement}
            */
            const factoryDiv = document.querySelector(".factory");

            /**
            * The API endpoint from which factory data is requested.
            * @type {string}
            */
            const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1370458495740207104";

            /**
            * Creates a new list item (`<li>`) element with the given text.
            * 
            * @param {string} text - The text content to insert into the list item.
            * @returns {HTMLLIElement} The created list item element.
            */
            function createLi(text) {
                const li = document.createElement("li");

                li.textContent = text;

                return li;
            }

            /**
            * Creates a new unordered list (`<ul>`) element.
            * 
            * @returns {HTMLUListElement} The created unordered list element.
            */
            function createUl() {
                return document.createElement("ul");
            }

            // Fetch data from the API endpoint
            fetch(factoryEndpoint, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    console.error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(factory => {
                // Create and populate basic factory info
                const factoryInfo = createUl();

                factoryInfo.append(
                    createLi(`Name: ${factory.name}`),
                    createLi(`Year Of Foundation: ${factory.yearOfFoundation}`),
                    createLi(`Accepts Bank Transfers: ${factory.acceptsBankTransfers ? "Yes" : "No"}`),
                    createLi(`Website: ${factory.website ? "Yes" : "No"}`)
                );

                // Create and populate employee list
                const factoryEmployeesWrapper = createLi("Employees:");

                const factoryEmployees = createUl();

                if (Array.isArray(factory.employees)) {
                    factoryEmployees.append(...factory.employees.map(emp => createLi(emp)));
                } else {
                    factoryEmployees.append(createLi("No Employees"));
                }

                factoryEmployeesWrapper.append(factoryEmployees);

                // Create and populate address details
                const addressWrapper = createLi("Address:");
                
                const factoryAddress = createUl();

                factoryAddress.append(
                    createLi(`Street Name: ${factory.address.streetName}`),
                    createLi(`House Number: ${factory.address.houseNumber}`),
                    createLi(`CAP: ${factory.address.CAP}`)
                );

                addressWrapper.append(factoryAddress);

                // Append all sections to the main factory container
                factoryDiv.append(factoryInfo, factoryEmployeesWrapper, addressWrapper);
            })
            .catch(error => {
                console.error("Failed to fetch factory data:", error);
            });
            ```

        + `cars.js`:

            ```javascript
            /**
            * @file cars.js
            * @author Jacopo Dell'Oste
            * @description
            * This file fetches a list of cars from a remote API and dynamically displays each car 
            * as a collapsible panel with detailed information and a pre-filled form for potential editing.
            * Each car section includes brand, model, year, optional features, and engine specs.
            */

            document.addEventListener("DOMContentLoaded", () => {

                /**
                * Container element where all car panels will be appended.
                * @type {HTMLElement}
                */
                const carsWrapper = document.querySelector(".carsWrapper");

                /**
                * Endpoint from which car data is retrieved.
                * @type {string}
                */
                const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1370457368546172928";

                /**
                * Creates a clickable collapsible header element.
                * @param {string} label - The text displayed on the collapsible header.
                * @returns {HTMLAnchorElement}
                */
                function createCollapsible(label) {
                    const a = document.createElement("a");
                    
                    a.href = "#";

                    a.classList.add("collapsible");

                    a.textContent = label;

                    return a;
                }

                /**
                * Creates a hidden div to act as the collapsible content container.
                * @returns {HTMLDivElement}
                */
                function createContent() {
                    const div = document.createElement("div");

                    div.classList.add("content");

                    div.style.display = "none";

                    return div;
                }

                /**
                * Creates a list item (`<li>`) with specified text.
                * @param {string} text - The text content for the list item.
                * @returns {HTMLLIElement}
                */
                function createLi(text) {
                    const li = document.createElement("li");

                    li.textContent = text;

                    return li;
                }

                /**
                * Creates an empty unordered list.
                * @returns {HTMLUListElement}
                */
                function createUl() {
                    return document.createElement("ul");
                }

                /**
                * Creates a label associated with an input.
                * @param {HTMLInputElement} input - The input element to associate the label with.
                * @param {string} text - The label's text.
                * @returns {HTMLLabelElement}
                */
                function createLabel(input, text) {
                    const label = document.createElement("label");

                    label.htmlFor = input.id;

                    label.textContent = text;

                    return label;
                }

                /**
                * Creates an input element with the specified name and type.
                * @param {string} name - The name/id for the input.
                * @param {string} type - The input type (e.g., text, number).
                * @returns {HTMLInputElement}
                */
                function createInput(name, type) {
                    const input = document.createElement("input");

                    input.type = type;

                    input.id = name;

                    return input;
                }

                /**
                * Creates a form element for editing a car's details.
                * Pre-fills fields with the current car data.
                * @param {Object} car - Car object to populate the form with.
                * @returns {HTMLFormElement}
                */
                function createFormEdit(car) {
                    const form = document.createElement("form");

                    form.classList.add("formEdit");

                    const h3 = document.createElement("h3");

                    h3.textContent = "Car Modification Form";

                    const brand = createInput("brand", "text");

                    const brandLabel = createLabel(brand, "Brand:");

                    const model = createInput("model", "text");

                    const modelLabel = createLabel(model, "Model:");

                    const yearOfRegistration = createInput("yearOfRegistration", "number");

                    const yearOfRegistrationLabel = createLabel(yearOfRegistration, "Year of Registration:");

                    const automatic = createInput("automatic", "checkbox");

                    const automaticLabel = createLabel(automatic, "Automatic:");

                    const optional = createInput("optional", "text");

                    optional.value = Array.isArray(car.optional) ? car.optional.join(", ") : "";

                    const optionalLabel = createLabel(optional, "Optional (comma-separated):");

                    const engineType = createInput("engineType", "text");

                    engineType.value = car.engine?.type || "";

                    const engineTypeLabel = createLabel(engineType, "Engine Type:");

                    const horsePower = createInput("horsePower", "number");

                    horsePower.value = car.engine?.horsePower || "";

                    const horsePowerLabel = createLabel(horsePower, "Horse Power:");

                    const emissionStandard = createInput("emmissionStandard", "text");

                    emissionStandard.value = car.engine?.emmissionStandard || "";

                    const emissionStandardLabel = createLabel(emissionStandard, "Emission Standard:");

                    const submit = createInput("submit", "submit");

                    form.append(
                        h3,
                        brandLabel, brand,
                        modelLabel, model,
                        yearOfRegistrationLabel, yearOfRegistration,
                        automaticLabel, automatic,
                        optionalLabel, optional,
                        engineTypeLabel, engineType,
                        horsePowerLabel, horsePower,
                        emissionStandardLabel, emissionStandard,
                        submit
                    );

                    return form;
                }

                /**
                * Global array to store the list of cars for further manipulation.
                * @global
                * @type {Object[]}
                */
                window.cars = [];

                /**
                * Fetches car data from the remote endpoint and renders the UI.
                */
                fetch(carsEndpoint, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        console.error(`HTTP error! Status: ${response.status}`);
                        return;
                    }
                    return response.json();
                })
                .then(data => {
                    window.cars = data;

                    data.forEach(car => {
                        const collapsible = createCollapsible(`Car ${car.id}`);

                        const content = createContent();

                        const carInfo = createUl();

                        carInfo.append(
                            createLi(`Brand: ${car.brand}`),
                            createLi(`Model: ${car.model}`),
                            createLi(`Year Of Registration: ${car.yearOfRegistration}`),
                            createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`),
                            createLi(`Owner: ${Array.isArray(car.owner) ? car.owner.join(", ") : (car.owner ?? "None")}`)
                        );

                        const optionalWrapper = createLi("Optional:");

                        const optionalList = createUl();

                        if (Array.isArray(car.optional)) {
                            optionalList.append(...car.optional.map(opt => createLi(opt)));
                        } else {
                            optionalList.append(createLi("No optionals available"));
                        }

                        optionalWrapper.append(optionalList);

                        const engineWrapper = createLi("Engine:");

                        const engineList = createUl();

                        engineList.append(
                            createLi(`Type: ${car.engine.type}`),
                            createLi(`Horse Power: ${car.engine.horsePower}`),
                            createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
                        );

                        engineWrapper.append(engineList);

                        carInfo.append(optionalWrapper, engineWrapper);

                        content.append(carInfo);

                        const formEdit = createFormEdit(car);

                        content.append(formEdit);

                        carsWrapper.append(collapsible, content);

                        collapsible.addEventListener("click", function (event) {
                            event.preventDefault();

                            this.classList.toggle("active");

                            const isVisible = content.style.display === "block";

                            content.style.display = isVisible ? "none" : "block";
                        });
                    });

                    /**
                    * Initializes logic for form interaction (placeholder for external implementation).
                    * @function
                    */
                    setupEditForms();

                })
                .catch(error => {
                    console.error("Failed to fetch car data:", error);
                });

            });
            ```

        + `cars-edit.js`:

            ```javascript
            /**
            * @file cars-edit.js
            * @author Jacopo Dell'Oste
            * 
            * @description
            * This file enables the editing and updating of car information dynamically.
            * It attaches form submission handlers to each car edit form, processes the updated input,
            * updates the UI accordingly, and synchronizes the changes with a remote API endpoint using fetch().
            */

            /**
            * Updates the UI list for a specific car with its new data.
            *
            * @param {HTMLElement} formEdit - The form element associated with the car.
            * @param {Object} car - The updated car object containing the latest values.
            * @returns {void}
            */
            function updateCarUI(formEdit, car) {
                
                const content = formEdit.closest(".content");

                const ul = content.querySelector("ul");

                ul.innerHTML = "";

                ul.append(
                    createLi(`Brand: ${car.brand}`),
                    createLi(`Model: ${car.model}`),
                    createLi(`Year Of Registration: ${car.yearOfRegistration}`),
                    createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`),
                    createLi(`Owner: ${Array.isArray(car.owner) ? car.owner.join(", ") : (car.owner ?? "None")}`)
                );

                const optionalWrapper = createLi("Optional:");

                const optionalList = createUl();

                if (Array.isArray(car.optional) && car.optional.length) {
                    optionalList.append(...car.optional.map(opt => createLi(opt)));
                } else {
                    optionalList.append(createLi("No optionals available"));
                }

                optionalWrapper.append(optionalList);
                ul.append(optionalWrapper);

                const engineWrapper = createLi("Engine:");

                const engineList = createUl();

                engineList.append(
                    createLi(`Type: ${car.engine.type}`),
                    createLi(`Horse Power: ${car.engine.horsePower}`),
                    createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
                );

                engineWrapper.append(engineList);

                ul.append(engineWrapper);
            }

            /**
            * Attaches submit event listeners to all car edit forms on the page.
            * On submission, it updates the relevant car object in the global `cars` array,
            * updates the UI, and sends a PUT request to persist changes to the remote server.
            *
            * @returns {void}
            */
            function setupEditForms() {

                const formEditList = document.querySelectorAll(".formEdit");

                formEditList.forEach((formEdit, index) => {
                    const car = cars[index];

                    // Pre-fill form fields (already set during creation as well)
                    formEdit.querySelector("#brand").value = car.brand;

                    formEdit.querySelector("#model").value = car.model;

                    formEdit.querySelector("#yearOfRegistration").value = car.yearOfRegistration;

                    formEdit.querySelector("#automatic").checked = car.automatic;

                    formEdit.addEventListener("submit", function(event) {
                        event.preventDefault();

                        // Update car object with new values
                        car.brand = formEdit.querySelector("#brand").value;

                        car.model = formEdit.querySelector("#model").value;

                        car.yearOfRegistration = parseInt(formEdit.querySelector("#yearOfRegistration").value);

                        car.automatic = formEdit.querySelector("#automatic").checked;

                        car.optional = formEdit.querySelector("#optional").value
                            .split(",")
                            .map(opt => opt.trim())
                            .filter(opt => opt !== "");

                        car.engine = {
                            type: formEdit.querySelector("#engineType").value,
                            horsePower: parseInt(formEdit.querySelector("#horsePower").value),
                            emmissionStandard: formEdit.querySelector("#emmissionStandard").value
                        };

                        const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1370457368546172928";

                        fetch(carsEndpoint, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(cars)
                        })
                        .then(response => {
                            if (!response.ok) {
                                console.error(`Request failed: ${response.statusText}`);

                                return;
                            }

                            console.log("Data Updated Successfully!");

                            updateCarUI(formEdit, car);
                        })
                        .catch(error => {
                            console.error("Network Error or Fetch Failed:", error);
                        });
                    });
                });
            }
            ```

3. Check The Result loading the HTML page in the respective directories