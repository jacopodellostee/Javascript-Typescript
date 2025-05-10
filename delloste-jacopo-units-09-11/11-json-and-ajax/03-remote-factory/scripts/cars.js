/**
 * @file: cars.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

document.addEventListener("DOMContentLoaded", () => {

    const carsWrapper = document.querySelector(".carsWrapper");

    const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1370457368546172928";

    const request = new XMLHttpRequest();

    request.open('GET', carsEndpoint, true);

    request.setRequestHeader('Content-type', 'application/json');

    function createCollapsible(label) {
        const a = document.createElement("a");
        a.href = "#";
        a.classList.add("collapsible");
        a.textContent = label;
        return a;
    }

    function createContent() {
        const div = document.createElement("div");
        div.classList.add("content");
        div.style.display = "none";
        return div;
    }

    function createLi(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    function createUl() {
        return document.createElement("ul");
    }

    function createLabel(input, text) {
        let label = document.createElement("label");
        label.htmlFor = input.id;  
        label.textContent = text;  
        return label;
    }
    
    function createInput(name, type) {
        let input = document.createElement("input");
        input.type = type;
        input.id = name;
        return input;
    }

    function createFormEdit(car) {
        let form = document.createElement("form");
        form.classList.add("formEdit");
    
        // Campi già esistenti
        let brand = createInput("brand", "text");
        let brandLabel = createLabel(brand, "Brand:");
    
        let model = createInput("model", "text");
        let modelLabel = createLabel(model, "Model:");
    
        let yearOfRegistration = createInput("yearOfRegistration", "number");
        let yearOfRegistrationLabel = createLabel(yearOfRegistration, "Year of Registration:");
    
        let automatic = createInput("automatic", "checkbox");
        let automaticLabel = createLabel(automatic, "Automatic:");
    
        // 
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

    // needed for make cars visible to other file (cars-edit.js)
    window.cars = [];    

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

                // Engine details
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

                let formEdit = createFormEdit(car);

                content.append(formEdit);

                // Append collapsible + content
                carsWrapper.append(collapsible, content);

                // Event binding specific to this collapsible
                collapsible.addEventListener("click", function (event) {

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

    request.onerror = function () {
        console.error("Network Error");
    };

    request.send();

});