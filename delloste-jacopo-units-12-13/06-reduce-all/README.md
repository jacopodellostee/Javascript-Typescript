# Reduce All 

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Make sure that you fully understand the [Array reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Write functions that use the reduce method to implement your version of the following Array methods:
[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) , [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) , [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) , [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


For each method, implement parameters and return values as in the documentation:

- do not use Array.prototype

- your functions receive as a first parameter the array on which to operate

- all other parameters should be identical to the documentation

- except for the thisArg parameter, you don't have to implement it

For example your implementation of forEach could be something like this:

```js
function myForEach(arr, ... ) {

}
```

Testing:

- write tests that compare the output of your functions to those of the Array methods

- write several and comprehensive tests for each method

- make sure that your methods give the same output as the originals

```js
// Example of testing myMap
// group of arrays used for testing
let testGroup = [
[ 1, 2, 3, 4, 5 ],
[ 0, 0, 3, 4, 5 ],
[ 7, 0, 9, 74, 85, 1, 42, 3, 88 ]
];

// test function for testing map - can be any function as long as the parameters are what map expects
let testFunc = function(num) {
return num * 2;
};

// replace this with your implementation of map using reduce
function myMap(arr, ... ) {
}

console.log('==== Testing Array.map() method ====');

testGroup.forEach(function(arr) {
    console.log(arr.map(testFunc));
});

console.log('\n==== Testing the function myMap() ====');

testGroup.forEach(function(arr) {
    console.log(myMap(arr, testFunc));
});
// note that tests for forEach, indexOf, filter and slice will be different because the methods behave differently
```

### Solution Step-by-Step

1. Create the  `06-reduce-all` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `06-reduce-all` directory

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
        <title>Reduce All</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Reduce All</h1>
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
    * This script implements custom versions of common array methods using `Array.prototype.reduce`.
    * The functions include: myForEach, myMap, myFilter, myIndexOf, and mySlice.
    * The script then compares the outputs of these custom functions with the built-in JavaScript methods.
    */

    /**
    * Executes a provided function once for each array element.
    *
    * @param {Array} array - The array to iterate over.
    * @param {Function} callback - The function to execute on each element.
    */
    function myForEach(array, callback) {
        array.reduce((_, current, index) => {
            callback(current, index, array);
            return undefined; 
        }, undefined);
    }

    /**
    * Creates a new array with the results of calling a provided function on every element.
    *
    * @param {Array} array - The array to map.
    * @param {Function} callback - The function to apply to each element.
    * @returns {Array} A new array with the mapped values.
    */
    function myMap(array, callback) {
        return array.reduce((acc, current, index) => {
            acc.push(callback(current, index, array));
            return acc;
        }, []);
    }

    /**
    * Creates a new array with all elements that pass the test implemented by the provided function.
    *
    * @param {Array} array - The array to filter.
    * @param {Function} callback - The function to test each element.
    * @returns {Array} A new array with elements that passed the test.
    */
    function myFilter(array, callback) {
        return array.reduce((acc, current, index) => {
            if (callback(current, index, array)) {
                acc.push(current);
            }
            return acc;
        }, []);
    }

    /**
    * Returns the index of the first element that satisfies the provided testing function.
    *
    * @param {Array} array - The array to search.
    * @param {Function} callback - The function to test each element.
    * @returns {number} The index of the first matching element, or -1 if none match.
    */
    function myIndexOf(array, callback) {
        return array.reduce((foundIndex, current, index) => {
            return (foundIndex === -1 && callback(current, index, array)) ? index : foundIndex;
        }, -1);
    }

    /**
    * Returns a shallow copy of a portion of an array into a new array.
    *
    * @param {Array} array - The array to slice.
    * @param {number} [start=0] - Zero-based index at which to start extraction.
    * @param {number} [end=array.length] - Zero-based index before which to end extraction.
    * @returns {Array} A new array containing the extracted elements.
    */
    function mySlice(array, start = 0, end = array.length) {
        const len = array.length;

        if (start < 0) 
            start = Math.max(len + start, 0);

        if (end < 0) 
            end = Math.max(len + end, 0);

        return array.reduce((acc, current, index) => {
            if (index >= start && index < end) {
                acc.push(current);
            }
            return acc;
        }, []);
    }

    // ======= Testing ==========

    /**
    * A collection of arrays used for testing the custom and built-in array methods.
    * @type {Array<Array<number>>}
    */
    let testGroup = [
    [ 1, 2, 3, 4, 5 ],
    [ 0, 0, 3, 4, 5 ],
    [ 7, 0, 9, 74, 85, 1, 42, 3, 88 ]
    ];

    console.log("==== Array used for Testing: ====");
    console.log(testGroup);

    // forEach comparison
    console.log('==== Testing Array.forEach() method ====');
    testGroup.forEach(function(arr) {
        arr.forEach((num) => {
            console.log(num);
        });
    });

    console.log('\n==== Testing the function myForEach() ====');
    testGroup.forEach(function(arr) {
        myForEach(arr, (num) => {
            console.log(num);
        });
    });

    // map comparison
    console.log('==== Testing Array.map() method ====');
    testGroup.forEach(function(arr) {
        console.log(arr.map((num) => num * 2));
    });

    console.log('\n==== Testing the function myMap() ====');
    testGroup.forEach(function(arr) {
        console.log(myMap(arr, (num) => num * 2));
    });

    // filter comparison
    console.log('==== Testing Array.filter() method ====');
    testGroup.forEach(function(arr) {
        console.log(arr.filter((num) => num % 2 === 0));
    });

    console.log('\n==== Testing the function myFilter() ====');
    testGroup.forEach(function(arr) {
        console.log(myFilter(arr, (num) => num % 2 === 0));
    });

    // indexOf comparison
    console.log('==== Testing Array.indexOf() method ====');
    testGroup.forEach(function(arr) {
        console.log(arr.indexOf(4));
    });

    console.log('\n==== Testing the function myIndexOf() ====');
    testGroup.forEach(function(arr) {
        console.log(myIndexOf(arr, (num) => num === 4));
    });

    // slice comparison
    console.log('==== Testing Array.slice() method ====');
    testGroup.forEach(function(arr) {
        console.log(arr.slice(2));
    });

    console.log('\n==== Testing the function mySlice() ====');
    testGroup.forEach(function(arr) {
        console.log(mySlice(arr, 2));
    });
    ```

5. Check The Result using the DevTool Console of the Browser
