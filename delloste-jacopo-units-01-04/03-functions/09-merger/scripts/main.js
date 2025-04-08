/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Merger
 *
 * create a function that based of the type of parameter you pass return:
 *  The Arithmetic Sum
 *  The Concat of Two String
 *  Null
 * 
 *  All of this is possible with the '+' operator of JavaScirpt
 */


/**
 * return arithmetic sum, concatenate strings or null based on the parameters 
 * @param {any} param1
 * @param {any} param2
 * @returns {any}
 */
function merger(param1, param2) {

    if (typeof param1 === 'string' && typeof param2 === 'string') {
        return param1 + param2;  
    }

    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;  
    }

    return null;
}

console.log(merger("Hello", " World"));
console.log(merger(4, 5));
console.log(merger("Hello", 5));