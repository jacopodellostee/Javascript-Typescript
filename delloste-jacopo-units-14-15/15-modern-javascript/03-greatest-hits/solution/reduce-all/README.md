# Greatest Hits - Reduce All 

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Rewrite some previous exercises in modern JS syntax

    + Credit Card Validation

    + Advanced Arrivals

    + Reduce All

- Try to use as many modern features as you can

- In `README.md` document any important changes

**Bonus**:

  + Use webpack, make your code compatible with older browsers

#### This directory contains the solution of the'Reduce All' Exercise Without Webpack  

### Solution Step-by-Step

1. Create the  `reduce-all` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `reduce-all` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jacopo Dell'Oste">
        <title>Greatest Hits - Reduce All</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Greatest Hits - Reduce All</h1>
        <p>open the console (F12) to see the output</p>

        <!-- End of Body-->
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
    * This script implements custom versions of common array methods using 
    * `Array.prototype.reduce` and The Modern Javascript's ES6+ Syntax.
    * The functions include: myForEach, myMap, myFilter, myIndexOf, and mySlice.
    * The script then compares the outputs of these custom functions with the built-in JavaScript methods.
    */

    /**
    * A group of test arrays used to demonstrate the asynchronous array utility functions.
    * @type {number[][]}
    */
    const testGroup = [
        [1, 2, 3, 4, 5],
        [0, 0, 3, 4, 5],
        [7, 0, 9, 74, 85, 1, 42, 3, 88]
    ];

    /**
    * Asynchronous version of `Array.forEach`.
    * Iterates over each element of an array and executes the provided callback.
    *
    * @async
    * @param {Array} [array=[]] - The array to iterate over.
    * @param {function(*, number, Array): Promise<void>} [callback=async()=>{}] - 
    *        The async callback executed for each element, receiving element, index, and array.
    * @returns {Promise<void>} Resolves when iteration is complete.
    */
    const myForEach = async (array = [], callback = async () => {}) => {

        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }

    };

    /**
    * Asynchronous version of `Array.map`.
    * Creates a new array populated with the results of calling the provided async function on every element.
    *
    * @async
    * @param {Array} [array=[]] - The array to map over.
    * @param {function(*, number, Array): Promise<*>} [callback=async()=>{}] - 
    *        The async callback applied to each element, receiving element, index, and array.
    * @returns {Promise<Array>} A new array with the results.
    */
    const myMap = async (array = [], callback = async () => {}) => {

        const result = [];

        for (let index = 0; index < array.length; index++) {
            result.push(await callback(array[index], index, array));
        }

        return result;

    };

    /**
    * Asynchronous version of `Array.filter`.
    * Creates a new array with elements that pass the async test implemented by the provided function.
    *
    * @async
    * @param {Array} [array=[]] - The array to filter.
    * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>{}] - 
    *        The async predicate function, receiving element, index, and array.
    * @returns {Promise<Array>} A new array with elements that satisfy the condition.
    */
    const myFilter = async (array = [], callback = async () => {}) => {

        const result = [];

        for (let index = 0; index < array.length; index++) {

            if (await callback(array[index], index, array)) {
            result.push(array[index]);
            }

        }

        return result;
    };

    /**
    * Asynchronous version of `Array.findIndex`.
    * Returns the index of the first element that satisfies the provided async testing function.
    *
    * @async
    * @param {Array} [array=[]] - The array to search.
    * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>false] - 
    *        The async predicate function, receiving element, index, and array.
    * @returns {Promise<number>} The index of the first matching element, or -1 if none found.
    */
    const myIndexOf = async (array = [], callback = async () => false) => {

        for (let index = 0; index < array.length; index++) {

            if (await callback(array[index], index, array)) {
            return index;
            }

        }

        return -1;
    };

    /**
    * Asynchronous version of `Array.slice`.
    * Returns a shallow copy of a portion of an array into a new array object.
    *
    * @async
    * @param {Array} [array=[]] - The array to slice.
    * @param {number} [start=0] - The beginning index (inclusive).
    * @param {number} [end=array.length] - The ending index (exclusive).
    * @returns {Promise<Array>} A new array containing the extracted elements.
    */
    const mySlice = async (array = [], start = 0, end = array.length) => {

        const len = array.length;

        start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);

        end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

        const result = [];

        for (let index = start; index < end; index++) {
            result.push(array[index]);
        }

        return result;
    };

    /**
    * Main demonstration function.
    * Runs native array methods and their asynchronous counterparts side by side,
    * printing results to the console for comparison.
    *
    * @async
    * @returns {Promise<void>} Resolves when demonstrations are complete.
    */
    async function main () {

        console.log('==== Array.forEach() ====');

        testGroup.forEach(function(arr) {

            arr.forEach((num) => {
            console.log(num);
            });

        });

        console.log("==== myForEach ====");

        await myForEach(testGroup, async arr => {

            await myForEach(arr, async num => console.log(num));

        });

        console.log('==== Array.map() ====');

        testGroup.forEach(function (arr) {

            console.log(arr.map((num) => num * 2));

        });

        console.log("\n==== myMap ====");

        for (const arr of testGroup) {

            const mapped = await myMap(arr, async num => num * 2);

            console.log(mapped);
        }

        console.log('==== Array.filter() ====');

        testGroup.forEach(function (arr) {

            console.log(arr.filter((num) => num % 2 === 0));
        });

        console.log("\n==== myFilter ====");

        for (const arr of testGroup) {

            const filtered = await myFilter(arr, async num => num % 2 === 0);

            console.log(filtered);
        }

        console.log('==== Array.indexOf() ====');

        testGroup.forEach(function (arr) {

            console.log(arr.indexOf(4));

        });

        console.log("\n==== myIndexOf ====");

        for (const arr of testGroup) {

            const idx = await myIndexOf(arr, async num => num === 4);

            console.log(idx);
        }

        console.log('==== Testing Array.slice() method ====');

        testGroup.forEach(function (arr) {
            console.log(arr.slice(2));
        });

        console.log("\n==== mySlice ====");

        for (const arr of testGroup) {
            
            const sliced = await mySlice(arr, 2);

            console.log(sliced);
        }
    }

    main();
    ```

5. Check The Result using the DevTool Console of the Browser

### Key Difference

| Feature | Traditional Syntax | Modern (ES6+) Syntax | Description of Change |
|---|---|---|---|
| **Function Declaration** | `function myFunc(arg1, arg2) { ... }` | `const myFunc = (arg1, arg2) => { ... };` or `async (arg1, arg2) => { ... }` | Transition from `function` declarations to **arrow functions** (`=>`) and `const` declarations. Arrow functions offer a more concise syntax and lexical `this` binding. |
| **Variable Declaration** | `var myVar = value;` | `const myVar = value;` or `let myVar = value;` | Replacement of `var` with `const` and `let`. `const` declares a block-scoped constant, `let` declares a block-scoped variable. Both resolve `var`'s hoisting and scoping issues. |
| **Default Parameters** | Manually handled within the function (e.g., `start = (start === undefined) ? 0 : start;`) | `function myFunc(param1 = defaultValue) { ... }` or `(param1 = defaultValue) => { ... }` | **Default parameters** allow assigning predefined values to function parameters directly in their signature, making the code cleaner and more readable. |
| **Strings (Template Literals)** | Concatenation with `+` (e.g., `\'Hello \' + name + \'!'`) | `` `Hello ${name}!` `` | **Template literals** enable expression interpolation and multi-line strings using backticks (`` ` ``), improving readability compared to traditional concatenation. |
| **Asynchronous Programming** | Not present or handled with callbacks/Promise `.then().catch()` | `async/await` | Introduction of `async` and `await` for managing asynchronous operations. `async` makes a function asynchronous, and `await` allows synchronously waiting for a Promise to complete, making asynchronous code easier to read and write. |
| **Iterative Loops** | `for (let i = 0; i < array.length; i++) { ... }` or `array.forEach(...)` | `for (const item of array) { ... }` | The **`for...of` loop** provides a simpler and more direct way to iterate over the values of iterable objects (like arrays, strings, Maps, Sets), compared to the traditional index-based `for` or `forEach`. |
| **Code Structure** | Global functions, `reduce` to implement array methods | Arrow functions, `async/await`, `for...of`, `const` for functions and `testGroup` | Modern code tends to be more modular, with more frequent use of `const` for functions and variables, and the adoption of asynchronous constructs for better handling of non-blocking operations. The implementation of array methods has been rewritten to be asynchronous. |
