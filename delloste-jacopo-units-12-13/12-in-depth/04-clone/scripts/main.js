/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script defines a function to perform a shallow copy of an object.
 * It then creates a sample object with nested properties (including a Date and a nested object),
 * clones it using the `clone` function, and logs both the original and the cloned object.
 */

/**
 * Performs a shallow copy of an object.
 * If a property's value is an object (not null), it is copied by reference.
 * This means nested objects are not deeply cloned.
 *
 * @param {Object} objectToClone - The object to be cloned
 * @returns {Object} A shallow copy of the input object
 */
function clone(objectToClone) {
    let newObject = {};

    for (let argument in objectToClone) {
        if (typeof objectToClone[argument] === "object" && objectToClone[argument] !== null) {
            Object.keys(objectToClone[argument]).forEach(key => {
                newObject[argument] = objectToClone[argument];
            });
        } else {
            newObject[argument] = objectToClone[argument];
        }
    }

    return newObject;
}

/**
 * A sample object representing a user with personal and banking information.
 * Includes both primitive and complex property types.
 * @type {Object}
 */
let testObject = {
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: new Date("Sun Apr 18 1965 13:38:00 GMT+0200"),
    bankInformation: {
        amount: '802.04',
        date: new Date("Thu Feb 02 2012 00:00:00 GMT+0100"),
        business: 'Bernhard, Kuhn and Stehr',
        name: 'Investment Account 8624',
        type: 'payment',
        account: '34889694'
    }
};

/**
 * A shallow clone of `testObject` created using the `clone` function.
 * @type {Object}
 */
let objectCloned = clone(testObject);

//print the result to the console
console.log(testObject);

console.log(objectCloned);
