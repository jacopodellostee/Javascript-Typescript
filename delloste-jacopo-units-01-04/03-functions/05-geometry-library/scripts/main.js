/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Creation and use of the functions 'calcCircumference' and 'calcArea'
 *
 * 
 */


/**
 * Description
 * @param {number} radius
 * @returns {void}
 */
function calcCircumference(radius) {
    let circumference = 2 * radius * Math.PI;
    console.log("The circumference is " + circumference);
}

/**
 * Description
 * @param {number} radius
 * @returns {void}
 */
function calcArea(radius) {
    let circumference = Math.pow(radius, 2 ) * Math.PI;
    console.log("The area is " + circumference);
}

calcCircumference(5);
calcArea(5);