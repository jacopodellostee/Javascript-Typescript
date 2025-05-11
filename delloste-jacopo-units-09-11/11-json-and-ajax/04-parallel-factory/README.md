# Parallel factory

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Create another version of the factory that uses the same jsonblobs that you created for the previous exercise

- Make sure that each car information is stored in a different jsonblob

- The page should display the list of cars with detailed information about each car directly visible without a collapsible panel

- Make sure that you request all jsonblobs in parallel (at the same time) not in sequence (one after another)

- Show a loader or a loading message while loading and show the list only when data has returned from all jsonblobs and all requests finished

- Make sure that your code handles all **errors**

### Solution Step-by-Step

1. Create The `JSONBlob` needed for the exercise:

- we created 5 `Blob`
    
    + 1 blob for each car of the file `cars.json` created in a previous exercise, here the ID of each blob

        - First Car's ID: `1371034507947466752` 

        - Second Car's ID: `1371034901985550336` 

        - Third Car's ID: `1371035331100598272` 

        - Fourth Car's ID: `1371035595291418624` 

        - Fifth Car's ID: `1371035850028277760` 

2. Create the  `04-parallel-factory` folder

3. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the root

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

4. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Parallel factory</title>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Parallel factory</h1>
        
        <!-- End of The Body -->
        <script src="./scripts/main.js" crossorigin="anonymous"></script>
    </body>
    </html>
    ```

5. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * 
    * @description
    * This script loads multiple car objects from remote JSON endpoints in parallel using XMLHttpRequest.
    * While loading, it shows a loader message, and once all data is retrieved, it renders
    * the results. Parsing and network errors are logged to the console.
    */

    /**
    * The main HTML body element where content will be appended.
    * @type {HTMLBodyElement}
    */
    const body = document.body;

    /**
    * Array of JSONBlob API endpoints, each containing one car object.
    * @type {string[]}
    */
    const carEndpoints = [
        'https://jsonblob.com/api/jsonBlob/1371034507947466752',
        'https://jsonblob.com/api/jsonBlob/1371034901985550336',
        'https://jsonblob.com/api/jsonBlob/1371035331100598272',
        'https://jsonblob.com/api/jsonBlob/1371035595291418624',
        'https://jsonblob.com/api/jsonBlob/1371035850028277760',
    ];

    /**
    * Loader element displayed while car data is loading.
    * @type {HTMLHeadingElement}
    */
    const loader = document.createElement("h2");
    loader.textContent = "Loading Cars Details...";
    body.append(loader);

    /**
    * Creates an <li> element with provided text content.
    * 
    * @param {string} text - The text to display inside the list item.
    * @returns {HTMLLIElement} - The created list item.
    */
    function createLi(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    /**
    * Builds a list item element representing a single car and its nested details.
    * 
    * @param {Object} car - The car object from JSON response.
    * @returns {HTMLLIElement} - A list item containing all structured car info.
    */
    function createCarElement(car) {
        const carLi = document.createElement("li");
        
        carLi.classList.add("carItem");

        const carDetails = document.createElement("ul");

        carDetails.classList.add("carList");

        // Basic info
        carDetails.append(
            createLi(`ID: ${car.id}`),
            createLi(`Brand: ${car.brand}`),
            createLi(`Model: ${car.model}`),
            createLi(`Year of Registration: ${car.yearOfRegistration}`),
            createLi(`Automatic: ${car.automatic ? "Yes" : "No"}`)
        );

        // Optionals
        const optionalWrapper = createLi("Optional:");

        const optionalList = document.createElement("ul");

        optionalList.classList.add("carList");

        if (Array.isArray(car.optional)) 
            optionalList.append(...car.optional.map(opt => createLi(opt)));
        else
            optionalList.append(createLi("No optionals available"));

        optionalWrapper.append(optionalList);

        carDetails.append(optionalWrapper);

        // Engine info
        const engineWrapper = createLi("Engine:");

        const engineList = document.createElement("ul");

        engineList.classList.add("carList");

        engineList.append(
            createLi(`Type: ${car.engine.type}`),
            createLi(`Horse Power: ${car.engine.horsePower}`),
            createLi(`Emission Standard: ${car.engine.emmissionStandard}`)
        );

        engineWrapper.append(engineList);

        carDetails.append(engineWrapper);

        // Owner
        carDetails.append(createLi(`Owner: ${car.owner ? car.owner : "None"}`));

        carLi.append(carDetails);

        return carLi;
    }

    /**
    * Stores all successfully loaded car elements.
    * @type {HTMLLIElement[]}
    */
    let loadedCars = [];

    /**
    * Counter to track how many requests have completed (success or failure).
    * @type {number}
    */
    let completedRequests = 0;

    /**
    * Container list for displaying all cars.
    * @type {HTMLUListElement}
    */
    const ul = document.createElement("ul");

    ul.classList.add("carList");

    /**
    * Sends one parallel XMLHttpRequest for each car URL.
    * When all are completed, removes the loader and appends the results.
    */
    carEndpoints.forEach((url) => {
        const request = new XMLHttpRequest();

        request.open("GET", url, true);

        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                completedRequests++;

                if (request.status === 200) {
                    try {
                        const car = JSON.parse(request.responseText);

                        const carEl = createCarElement(car);

                        loadedCars.push(carEl);
                    } catch (e) {
                        console.error(`Error parsing JSON from ${url}:`, e);
                    }
                } else {
                    console.error(`Failed to load from ${url}: status ${request.status}`);
                }

                // Final rendering when all requests are done
                if (completedRequests === carEndpoints.length) {
                    loader.remove();

                    loadedCars.forEach(carEl => ul.append(carEl));

                    body.append(ul);
                }
            }
        };

        request.onerror = function () {
            completedRequests++;
            console.error(`Network error with ${url}`);
        };

        request.send();
    });
    ```
6. Write the style

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

7. Check The Result loading the HTML page 
