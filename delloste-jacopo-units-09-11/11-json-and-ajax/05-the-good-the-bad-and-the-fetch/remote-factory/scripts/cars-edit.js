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
