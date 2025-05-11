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
