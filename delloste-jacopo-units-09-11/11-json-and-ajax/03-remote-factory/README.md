# Remote factory

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Use jsonblob to store JSON data about cars and a car factory

- You can use as many blobs as you need. Decide the structure in a way to reduce the amount of data you modify with HTTP requests

- Write an application that displays a factory with a list of cars

- Clicking on each car should display a collapsible panel with more information about the car

- It should be possible to edit the car details

- Save the modified data to jsonblob with an HTTP request

- Whenever data is modified you should reload the new data from jsonblob once the writing has finished

- You should handle all error cases in your application. If an HTTP request fails, you should display a message to the user

- Your project should include a folder called ‘json’ with all the initial json files that you upload to jsonblob (the initial state of your DB)

- Your readme (markdown) should include links to all the jsonblobs that you are using as well as a list of their IDs


### Solution Step-by-Step

1. Create The `JSONBlob` needed for the exercise:

- we created 2 `Blob`
    
    + 1 blob for the `cars.json` file and 1 for the `factory-references.json`, both files created in a previous exercise, here the ID and link of each blob

        - Factory's BLOB

            + Link: [Factory (References) BLOB](http://jsonblob.com/1370458495740207104) 

            + ID: `1370458495740207104`

        - Car's BLOB

            + Link: [Cars BLOB](http://jsonblob.com/1370457368546172928) 

            + ID: `1370457368546172928`


2. Create the  `03-remote-factory` folder

3. Create the the `index.html`, `style.css` and the JavaScript and JSON files in the appropriate directories

    * the `index.html` file will be in the root

    * the all the javascript files will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file 

    * the JSON file will be in a directory called `json` containing the original state of our 'DB' 

4. Save the JSON file in the `json` folder:
    
    * The JSON files:

        - `factory-references.json`:

            ```json
            {
                "name": "GO Motori",
                "yearOfFoundation": 1990,
                "acceptsBankTransfers": true,
                "employees": ["Beppe", "Lucia", "Marco"],
                "address": {
                    "streetName": "SP50",
                    "houseNumber": 13,
                    "CAP": 15033
                },
                "website": null,
                "carsId": [1, 2, 3, 4, 5]
            }
            ```

        - `cars.json`:

            ```json
            [
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
            ]
            ```

5. Write the HTML code and link the scripts
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Remote Factory</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Remote Factory</h1>

        <h2>Factory: </h2>
        <div class="factory"></div>

        <h2>Factory Car's: </h2>
        <div class="carsWrapper"></div>

        <!-- End of The Body -->
        <script defer src="./scripts/factory.js" crossorigin="anonymous"></script>
        <script defer src="./scripts/cars.js" crossorigin="anonymous"></script>
        <script defer src="./scripts/cars-edit.js" crossorigin="anonymous"></script>
    </body>
    </html>
    ```

6. Write the scripts 

    To ensure better and cleaner task distribution, three files have been created for this project:

    - **`factory.js`** – Responsible for rendering the factory data.

    - **`cars.js`** – Handles the display of cars as collapsible panels.

    - **`cars-edit.js`** – Used for editing the values of the car entries.

    Here Following The JavaScript codes:

    - `factory.js`:

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
        * XMLHttpRequest used to fetch data from the factory API.
        * @type {XMLHttpRequest}
        */
        const request = new XMLHttpRequest();

        /**
        * The API endpoint from which factory data is requested.
        * @type {string}
        */
        const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1370458495740207104";

        // Open a GET request to the endpoint
        request.open('GET', factoryEndpoint, true);

        // Set content type to JSON
        request.setRequestHeader('Content-type', 'application/json');

        /**
        * Creates a new list item (`<li>`) element with the given text.
        * 
        * @param {string} text - The text content to insert into the list item.
        * @returns {HTMLLIElement} The created list item element.
        */
        function createLi(text) {
            let li = document.createElement("li");

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

        // Handle the response once the request is successfully completed
        request.onload = function () {
            if (request.status === 200) {

                /** @type {Object} */
                let factory = JSON.parse(request.responseText);

                // Create and populate basic factory info
                let factoryInfo = createUl();
                factoryInfo.append(
                    createLi(`Name: ${factory.name}`),
                    createLi(`Year Of Foundation: ${factory.yearOfFoundation}`),
                    createLi(`Accepts Bank Transfers: ${factory.acceptsBankTransfers ? "Yes" : "No"}`),
                    createLi(`Website: ${factory.website ? "Yes" : "No"}`)
                );

                // Create and populate employee list
                let factoryEmployeesWrapper = createLi("Employees:");

                let factoryEmployees = createUl();

                if (Array.isArray(factory.employees)) {
                    factoryEmployees.append(...factory.employees.map(opt => createLi(opt)));
                } else {
                    factoryEmployees.append(createLi("No Employees"));
                }

                factoryEmployeesWrapper.append(factoryEmployees);

                // Create and populate address details
                let addressWrapper = createLi("Address:");

                let factoryAddress = createUl();
                
                factoryAddress.append(
                    createLi(`Street Name: ${factory.address.streetName}`),
                    createLi(`House Number: ${factory.address.houseNumber}`),
                    createLi(`CAP: ${factory.address.CAP}`)
                );

                addressWrapper.append(factoryAddress);

                // Append all sections to the main factory container
                factoryDiv.append(factoryInfo, factoryEmployeesWrapper, addressWrapper);

            } else {
                console.error("Request didn't load successfully. Error code: " + request.statusText);
            }
        };

        // Handle network errors
        request.onerror = function () {
            console.error('Network error');
        };

        // Send the request
        request.send();
        ```
    - `cars.js`:

        ```javascript
        /**
        * @file cars.js
        * @author Jacopo Dell'Oste
        * 
        * 
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
            * XMLHttpRequest object to request car data.
            * @type {XMLHttpRequest}
            */
            const request = new XMLHttpRequest();

            request.open('GET', carsEndpoint, true);

            request.setRequestHeader('Content-type', 'application/json');

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
            * @param {string} text
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
            * @param {HTMLInputElement} input
            * @param {string} text
            * @returns {HTMLLabelElement}
            */
            function createLabel(input, text) {
                let label = document.createElement("label");

                label.htmlFor = input.id;

                label.textContent = text;

                return label;
            }

            /**
            * Creates an input element with the specified name and type.
            * @param {string} name
            * @param {string} type
            * @returns {HTMLInputElement}
            */
            function createInput(name, type) {
                let input = document.createElement("input");

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
                let form = document.createElement("form");

                form.classList.add("formEdit");

                let h3 = document.createElement("h3");

                h3.textContent = "Car Modification Form";

                let brand = createInput("brand", "text");

                let brandLabel = createLabel(brand, "Brand:");

                let model = createInput("model", "text");

                let modelLabel = createLabel(model, "Model:");

                let yearOfRegistration = createInput("yearOfRegistration", "number");

                let yearOfRegistrationLabel = createLabel(yearOfRegistration, "Year of Registration:");

                let automatic = createInput("automatic", "checkbox");

                let automaticLabel = createLabel(automatic, "Automatic:");

                let optional = createInput("optional", "text");

                optional.value = Array.isArray(car.optional) ? car.optional.join(", ") : "";

                let optionalLabel = createLabel(optional, "Optional (comma-separated):");

                let engineType = createInput("engineType", "text");

                engineType.value = car.engine?.type || "";

                let engineTypeLabel = createLabel(engineType, "Engine Type:");

                let horsePower = createInput("horsePower", "number");

                horsePower.value = car.engine?.horsePower || "";

                let horsePowerLabel = createLabel(horsePower, "Horse Power:");

                let emissionStandard = createInput("emmissionStandard", "text");

                emissionStandard.value = car.engine?.emmissionStandard || "";

                let emissionStandardLabel = createLabel(emissionStandard, "Emission Standard:");

                let submit = createInput("submit", "submit");

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
            * Makes the `cars` array accessible globally for interaction in other scripts.
            * @global
            * @type {Object[]}
            */
            window.cars = [];

            // Load and display car data
            request.onload = function () {
                if (request.status === 200) {

                    cars = JSON.parse(request.responseText);

                    cars.forEach(car => {
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

                        // Optionals
                        const optionalWrapper = createLi("Optional:");

                        const optionalList = createUl();

                        if (Array.isArray(car.optional)) {
                            optionalList.append(...car.optional.map(opt => createLi(opt)));
                        } else {
                            optionalList.append(createLi("No optionals available"));
                        }

                        optionalWrapper.append(optionalList);

                        // Engine
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

                        // Append form
                        let formEdit = createFormEdit(car);

                        content.append(formEdit);

                        // Append collapsible + content to wrapper
                        carsWrapper.append(collapsible, content);

                        // Toggle collapsible visibility
                        collapsible.addEventListener("click", function (event) {
                            // prevent the 'a' Tag to reload the page
                            event.preventDefault();

                            this.classList.toggle("active");

                            const isVisible = content.style.display === "block";

                            content.style.display = isVisible ? "none" : "block";
                        });
                    });

                    setupEditForms();

                } else {
                    console.error("Request didn't load successfully. Error code:" + request.statusText);
                }
            };

            // Handle network error
            request.onerror = function () {
                console.error("Network Error");
            };

            // Send the request
            request.send();
        });
        ```
    - `cars-edit.js`:

        ```javascript
        /**
        * @file cars-edit.js
        * @author Jacopo Dell'Oste
        * 
        * @description
        * This file enables the editing and updating of car information dynamically.
        * It attaches form submission handlers to each car edit form, processes the updated input,
        * updates the UI accordingly, and synchronizes the changes with a remote API endpoint.
        */

        /**
        * Attaches submit event listeners to all car edit forms on the page.
        * On submission, it updates the relevant car object in the global `cars` array,
        * updates the UI, and sends a PUT request to persist changes to the remote server.
        *
        * @returns {void}
        */
        function setupEditForms() {
            
            // Get all forms meant for editing cars
            const formEditList = document.querySelectorAll(".formEdit");

            formEditList.forEach((formEdit, index) => {
                // Reference the corresponding car object
                const car = cars[index];

                // Pre-fill the form fields with existing car values
                formEdit.querySelector("#brand").value = car.brand;

                formEdit.querySelector("#model").value = car.model;

                formEdit.querySelector("#yearOfRegistration").value = car.yearOfRegistration;

                formEdit.querySelector("#automatic").checked = car.automatic;

                // Handle form submission
                formEdit.addEventListener("submit", function(event) {
                    event.preventDefault(); // Prevent page reload

                    // Update car object with values from form
                    car.brand = formEdit.querySelector("#brand").value;

                    car.model = formEdit.querySelector("#model").value;

                    car.yearOfRegistration = parseInt(formEdit.querySelector("#yearOfRegistration").value);

                    car.automatic = formEdit.querySelector("#automatic").checked;

                    // Split optional features into array, removing empty entries
                    car.optional = formEdit.querySelector("#optional").value
                        .split(",")
                        .map(opt => opt.trim())
                        .filter(opt => opt !== "");

                    // Update engine details
                    car.engine = {
                        type: formEdit.querySelector("#engineType").value,
                        horsePower: parseInt(formEdit.querySelector("#horsePower").value),
                        emmissionStandard: formEdit.querySelector("#emmissionStandard").value
                    };

                    // Create request to update remote car data
                    const request = new XMLHttpRequest();

                    const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1370457368546172928";

                    request.open("PUT", carsEndpoint, true);

                    request.setRequestHeader("Content-Type", "application/json");

                    request.onload = function () {
                        if (request.status === 200) {
                            console.log("Data Updated Successfully!");

                            // Update the visual list under each form with the new values
                            const content = formEdit.closest(".content");

                            const ul = content.querySelector("ul");

                            ul.innerHTML = ""; // Clear current list

                            // Add updated values to the list
                            ul.append(
                                createLi(`Brand: ${car.brand}`),
                                createLi(`Model: ${car.model}`),
                                createLi(`Year Of Registration: ${car.yearOfRegistration}`),
                                createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`),
                                createLi(`Owner: ${Array.isArray(car.owner) ? car.owner.join(", ") : (car.owner ?? "None")}`)
                            );

                            // Handle optional features
                            const optionalWrapper = createLi("Optional:");

                            const optionalList = createUl();

                            if (Array.isArray(car.optional) && car.optional.length) {
                                optionalList.append(...car.optional.map(opt => createLi(opt)));
                            } else {
                                optionalList.append(createLi("No optionals available"));
                            }

                            optionalWrapper.append(optionalList);

                            ul.append(optionalWrapper);

                            // Handle engine info
                            const engineWrapper = createLi("Engine:");

                            const engineList = createUl();

                            engineList.append(
                                createLi(`Type: ${car.engine.type}`),
                                createLi(`Horse Power: ${car.engine.horsePower}`),
                                createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
                            );

                            engineWrapper.append(engineList);
                            
                            ul.append(engineWrapper);

                        } else {
                            console.error("Request failed: " + request.statusText);
                        }
                    };

                    request.onerror = function () {
                        console.error("Network Error");
                    };

                    // Send updated car data as JSON
                    request.send(JSON.stringify(cars));
                });
            });
        }
        ```
    
7. Write the style

    * The CSS code:

    ```css 
    /**
    * style.css
    * 
    * This stylesheet manages the layout and appearance of form elements
    * used for editing car data. It defines widths, spacing, flex layouts,
    * visibility toggling, and collapsible section appearance to ensure
    * a clean and user-friendly UI.
    */

    /* Sets a consistent width for input fields */
    input {
        width: 150px;
    }

    /* Removes default bullet points from all lists */
    ul, li {
        list-style-type: none;
    }

    /* Hides content blocks by default (e.g., car details or forms) */
    .content {
        display: none;
    }

    /* Aligns elements in a vertical column within car containers and edit forms */
    .carsWrapper, .formEdit {
        display: flex;
        flex-direction: column;
    }

    /* Adds padding around collapsible sections for better readability */
    .collapsible {
        padding: 1rem;
    }

    /* Makes form elements stack vertically */
    form {
        display: flex;
        flex-direction: column;
    }

    /* Adds internal padding to form input fields */
    form > input {
        padding: 15px;
    }

    /* Adds vertical spacing between form headings and inputs */
    form > input, form > h3 {
        margin-bottom: 10px;
    }
    ```

8. Check The Result loading the HTML page
