/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script defines a function to recursively clone only string-type properties from a given object.
 * Nested objects are traversed, and only string values are preserved in the resulting clone.
 * A sample object with various property types is defined, cloned using `cloneStrings`, and both
 * the original and the resulting object are logged to the console.
 */

/**
 * Recursively clones only the string-type properties from an object.
 * If a property's value is an object (not null or an array), the function is called recursively.
 * Only properties with string values are included in the final cloned object.
 *
 * @param {Object} objectToClone - The object to extract string properties from.
 * @returns {Object} A new object containing only string properties (including from nested objects).
 */
function cloneStrings(objectToClone) {

    let newObject = {};

    for (let key in objectToClone) {

        let value = objectToClone[key];

        if (typeof value === 'string') {

            newObject[key] = value;
            
        } else if (typeof value === 'object' && value !== null) {

            let nestedClone = cloneStrings(value);

            if (Object.keys(nestedClone).length > 0) {
                newObject[key] = nestedClone;
            }
        }
    }

    return newObject;
}

/**
 * A sample object representing a user with personal and banking information.
 * Includes a mix of string, boolean, number, Date, and nested object properties.
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
 * A new object containing only the string values extracted from `testObject`,
 * including nested string values from within sub-objects.
 * @type {Object}
 */
let objectCloned = cloneStrings(testObject);

// Print original and cloned object to the console
console.log(testObject);

console.log(objectCloned);
