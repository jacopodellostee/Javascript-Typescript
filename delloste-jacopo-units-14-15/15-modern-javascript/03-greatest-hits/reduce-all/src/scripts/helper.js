/**
 * @file helper.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Provides custom asynchronous implementations of common array methods:
 * - forEach, map, filter, indexOf, slice
 * Using modern ES6+ syntax and async/await.
 */

const asyncArrayUtils = {
  /**
   * Asynchronous version of `Array.forEach`.
   * @async
   * @param {Array} [array=[]] - Array to iterate.
   * @param {function(*, number, Array): Promise<void>} [callback=async()=>{}] - Async callback.
   * @returns {Promise<void>}
   */
  myForEach: async (array = [], callback = async () => {}) => {
    for (let i = 0; i < array.length; i++) {
      await callback(array[i], i, array);
    }
  },

  /**
   * Asynchronous version of `Array.map`.
   * @async
   * @param {Array} [array=[]] - Array to map.
   * @param {function(*, number, Array): Promise<*>} [callback=async()=>{}] - Async mapping function.
   * @returns {Promise<Array>} Mapped array.
   */
  myMap: async (array = [], callback = async () => {}) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(await callback(array[i], i, array));
    }
    return result;
  },

  /**
   * Asynchronous version of `Array.filter`.
   * @async
   * @param {Array} [array=[]] - Array to filter.
   * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>{}] - Async predicate.
   * @returns {Promise<Array>} Filtered array.
   */
  myFilter: async (array = [], callback = async () => {}) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (await callback(array[i], i, array)) result.push(array[i]);
    }
    return result;
  },

  /**
   * Asynchronous version of `Array.findIndex`.
   * @async
   * @param {Array} [array=[]] - Array to search.
   * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>false] - Async predicate.
   * @returns {Promise<number>} Index of first matching element or -1.
   */
  myIndexOf: async (array = [], callback = async () => false) => {
    for (let i = 0; i < array.length; i++) {
      if (await callback(array[i], i, array)) return i;
    }
    return -1;
  },

  /**
   * Asynchronous version of `Array.slice`.
   * @async
   * @param {Array} [array=[]] - Array to slice.
   * @param {number} [start=0] - Start index (inclusive).
   * @param {number} [end=array.length] - End index (exclusive).
   * @returns {Promise<Array>} Sliced array.
   */
  mySlice: async (array = [], start = 0, end = array.length) => {
    const len = array.length;
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    const result = [];
    for (let i = start; i < end; i++) result.push(array[i]);
    return result;
  }
};

export default asyncArrayUtils;
