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
