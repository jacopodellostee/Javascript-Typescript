# DOM Factory

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Write your cars and factory objects as JSON strings in a variable

- Parse them with JSON.parse();

- Write each of them to the DOM in a list

    + You should use a styled CSS `<ul>` `<li>` list with no bullets

    + Don’t use `<table>`


### Solution Step-by-Step

1. Create the  `02-dom-factory` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the root

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DOM Factory</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>DOM Factory</h1>
        
        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    *
    * @description
    * This script dynamically renders a detailed list of cars on the webpage.
    * Each car displays information such as brand, model, registration year,
    * transmission type, optional features, engine specs, and ownership status.
    */

    /**
    * JSON string representing an array of car objects.
    * Each object contains metadata and nested engine and optional info.
    * @type {string}
    */
    let carsJSON = `[
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
    ]`;

    /**
    * Creates a list item element (<li>) with the provided text content.
    *
    * @param {string} text - The text to display inside the list item.
    * @returns {HTMLLIElement} The newly created list item.
    */
    function createLi(text) {
        let li = document.createElement("li");

        li.textContent = text;

        return li;
    }

    /**
    * Parsed car data from the JSON string.
    * @type {Array<Object>}
    */
    let cars = JSON.parse(carsJSON);

    /**
    * Reference to the body element for appending the main list.
    * @type {HTMLBodyElement}
    */
    let body = document.body;

    /**
    * Unordered list that will contain each car's details.
    * @type {HTMLUListElement}
    */
    let ul = document.createElement("ul");

    ul.classList.add("carList");

    // Loop through all cars and generate their HTML structure
    cars.forEach(car => {
        /**
        * List item for an individual car.
        * @type {HTMLLIElement}
        */
        let carLi = document.createElement("li");

        carLi.classList.add("carItem");

        /**
        * Sub-list containing details for one car.
        * @type {HTMLUListElement}
        */
        let carDetails = document.createElement("ul");

        carDetails.classList.add("carList");

        // Basic info
        carDetails.append(
            createLi(`ID: ${car.id}`),
            createLi(`Brand: ${car.brand}`),
            createLi(`Model: ${car.model}`),
            createLi(`Year of Registration: ${car.yearOfRegistration}`),
            createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`)
        );

        /**
        * Wrapper <li> for optionals.
        * @type {HTMLLIElement}
        */
        let optionalWrapper = createLi("Optional:");

        optionalWrapper.classList.add("carItem");

        /**
        * List of optional features.
        * @type {HTMLUListElement}
        */
        let optionalList = document.createElement("ul");

        optionalList.classList.add("carList");

        if (Array.isArray(car.optional)) {
            optionalList.append(...car.optional.map(opt => createLi(opt)));
        } else {
            optionalList.append(createLi("No optionals available"));
        }

        optionalWrapper.append(optionalList);

        carDetails.append(optionalWrapper);

        /**
        * Wrapper <li> for engine information.
        * @type {HTMLLIElement}
        */
        let engineWrapper = createLi("Engine:");

        engineWrapper.classList.add("carItem");

        /**
        * List of engine properties.
        * @type {HTMLUListElement}
        */
        let engineList = document.createElement("ul");

        engineList.classList.add("carList");

        engineList.append(
            createLi(`Type: ${car.engine.type}`),
            createLi(`Horse Power: ${car.engine.horsePower}`),
            createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
        );

        engineWrapper.append(engineList);

        carDetails.append(engineWrapper);

        // Owner info
        carDetails.append(createLi(`Owner: ${car.owner ? car.owner : "None"}`));

        // Nest all car details inside main list item
        carLi.append(carDetails);
        
        ul.append(carLi);
    });

    /**
    * Appends the constructed car list to the document body.
    */
    body.append(ul);
    ```
5. Write the style

    * The CSS code:

    ```css 
    /**
    * style.css
    * 
    * This stylesheet defines the layout and appearance of car data rendered by the script.
    * It removes bullet points from car lists, adds spacing between individual cars,
    * and ensures nested lists are clean and uniformly styled.
    */

    /* Removes bullet points from car detail lists */
    ul.carList {
        list-style-type: none;
    }

    /* Adds vertical spacing between car items */
    li.carItem {
        margin-bottom: 1rem;
    }

    /* Removes bullet points from any nested lists inside list items */
    li > ul {
        list-style-type: none;
    }
    ```

6. Check The Result using the DevTool Console of the Browser
