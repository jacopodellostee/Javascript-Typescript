/**
 * @file: factory.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

const factoryDiv = document.querySelector(".factory");

const request = new XMLHttpRequest();

const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1370458495740207104";

request.open('GET', factoryEndpoint, true);

request.setRequestHeader('Content-type', 'application/json'); 

function createLi(text) {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
}

function createUl() {
    let ul = document.createElement("ul");
    return ul;
}

request.onload = function () {
    if (request.status === 200) {

        let factory = JSON.parse(request.responseText);

        let factoryInfo = createUl();
    
        factoryInfo.append(
            createLi(`Name: ${factory.name}`),
            createLi(`Year Of Foundation: ${factory.yearOfFoundation}`),
            createLi(`Accepts Bank Transfers: ${factory.acceptsBankTransfers ? "Yes" : "No"}`),
            createLi(`Website: ${factory.website ? "Yes" : "No"}`),
        );
    
        let factoryEmployeesWrapper = createLi("Employees: ");
    
        let factoryEmployees = createUl();
    
        // Employees
        if (Array.isArray(factory.employees)) {
            factoryEmployees.append(...factory.employees.map(opt => createLi(opt)));
        } else {
            factoryEmployees.append(createLi("No Employees"));
        }
    
        factoryEmployeesWrapper.append(factoryEmployees);
    
        // Address
        let addressWrapper = createLi("Address:");
    
        let factoryAddress = document.createElement("ul");
    
        factoryAddress.append(
            createLi(`Street Name: ${factory.address.streetName}`),
            createLi(`House Number: ${factory.address.houseNumber}`),
            createLi(`CAP: ${factory.address.CAP}`)
        );
    
        addressWrapper.append(factoryAddress);
    
        factoryDiv.append(factoryInfo, factoryEmployeesWrapper, addressWrapper);
    } else {
        console.error("Request didn't load successfully. Error code:" + request.statusText);
    }
}

request.onerror = function () {
    console.error('Network error');
}

request.send();
