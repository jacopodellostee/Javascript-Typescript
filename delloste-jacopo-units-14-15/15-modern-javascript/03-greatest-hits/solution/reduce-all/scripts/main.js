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
