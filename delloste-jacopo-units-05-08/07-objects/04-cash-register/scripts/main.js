/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Cash Register
 *
 * this file contain an onject called 'cartForParty'
 * that contain random item and it's cost, and a function 
 * called 'cashRegister' that parse and sum the cost of the
 * item and print the total on the console
 */

let cartForParty = 
{
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

/**
 * print on the cansole the total price of the cart
 * @param {object} cart
 * @returns {void}
 */
function cashRegister(cart) {

    let total = 0;

    for (let item in cart) {
        // We parse the value that have 'item' as his key
        // Es. in cart the values that has "banana" as his key is "1.25"
        total += parseFloat(cart[item]);
    }

    console.log(total.toFixed(2)); 
}

cashRegister(cartForParty);