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
myForEach(testGroup, (arr) => {
        myForEach(arr, (num) => {
        console.log(num);
    });
})

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
