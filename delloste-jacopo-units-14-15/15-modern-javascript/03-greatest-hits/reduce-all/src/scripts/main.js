/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Demonstrates usage of asynchronous array utility functions
 * alongside native JavaScript array methods.
 */

import asyncArrayUtils from "./helper.js";

/**
 * A set of test arrays to demonstrate native and async array methods.
 * @type {number[][]}
 */
const testGroup = [
  [1, 2, 3, 4, 5],
  [0, 0, 3, 4, 5],
  [7, 0, 9, 74, 85, 1, 42, 3, 88]
];

/**
 * Main demonstration function.
 * Runs native array methods and their asynchronous counterparts side by side,
 * printing results to the console for comparison.
 *
 * @async
 * @function main
 * @returns {Promise<void>} Resolves when demonstrations are complete.
 */
async function main() {
  
  console.log("==== Array.forEach() ====");
  testGroup.forEach((arr) =>
    arr.forEach((num) => console.log(num))
  );

  console.log("==== myForEach ====");
  await asyncArrayUtils.myForEach(testGroup, async (arr) =>
    asyncArrayUtils.myForEach(arr, async (num) => console.log(num))
  );

  console.log("==== Array.map() ====");
  testGroup.forEach((arr) =>
    console.log(arr.map((num) => num * 2))
  );

  console.log("==== myMap ====");
  for (const arr of testGroup) {
    /** 
     * @type {number[]} 
     */
    const mapped = await asyncArrayUtils.myMap(arr, async (num) => num * 2);
    console.log(mapped);
  }

  console.log("==== Array.filter() ====");
  testGroup.forEach((arr) =>
    console.log(arr.filter((num) => num % 2 === 0))
  );

  console.log("==== myFilter ====");
  for (const arr of testGroup) {
    /** 
     * @type {number[]} 
     */
    const filtered = await asyncArrayUtils.myFilter(arr, async (num) => num % 2 === 0);
    console.log(filtered);
  }

  console.log("==== Array.indexOf() ====");
  testGroup.forEach((arr) => console.log(arr.indexOf(4)));

  console.log("==== myIndexOf ====");
  for (const arr of testGroup) {
    /** 
     * @type {number} 
     */
    const idx = await asyncArrayUtils.myIndexOf(arr, async (num) => num === 4);
    console.log(idx);
  }

  console.log("==== Array.slice() ====");
  testGroup.forEach((arr) => console.log(arr.slice(2)));

  console.log("==== mySlice ====");
  for (const arr of testGroup) {
    /** 
     * @type {number[]}
     */
    const sliced = await asyncArrayUtils.mySlice(arr, 2);
    console.log(sliced);
  }
}

/** Execute the main demonstration */
main();
