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
request.open('GET', factoryEndpoint);

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
