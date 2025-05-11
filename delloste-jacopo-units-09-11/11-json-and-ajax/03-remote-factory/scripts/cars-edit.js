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

            request.open("PUT", carsEndpoint);

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
