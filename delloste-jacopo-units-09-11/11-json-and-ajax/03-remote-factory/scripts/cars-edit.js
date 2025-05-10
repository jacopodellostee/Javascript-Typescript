/**
 * @file: cars-edit.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

function setupEditForms() {
    const formEditList = document.querySelectorAll(".formEdit");

    formEditList.forEach((formEdit, index) => {
        const car = cars[index];

        formEdit.querySelector("#brand").value = car.brand;
        formEdit.querySelector("#model").value = car.model;
        formEdit.querySelector("#yearOfRegistration").value = car.yearOfRegistration;
        formEdit.querySelector("#automatic").checked = car.automatic;

        formEdit.addEventListener("submit", function(event) {
            event.preventDefault();
        
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
        
            const request = new XMLHttpRequest();
            const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1370457368546172928";
        
            request.open("PUT", carsEndpoint, true);
            request.setRequestHeader("Content-Type", "application/json");
        
            request.onload = function () {
                if (request.status === 200) {
                    console.log("Data Updated Succesfully!");
                    location.reload();
                } else {
                    console.error("Request didn't load successfully. Error code: " + request.statusText);
                }
            };
        
            request.onerror = function () {
                console.error("Network Error");
            };
        
            request.send(JSON.stringify(cars));
        });
        
    });
}

