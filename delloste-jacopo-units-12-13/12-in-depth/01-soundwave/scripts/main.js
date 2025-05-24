/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This file processes an array of noise strings and generates
 * variations of each word by capitalizing one character at a time
 * and appending a growing number of exclamation marks. Each variation
 * is logged to the console.
 */

/**
 * An array containing the initial noise strings to process.
 * @type {string[]}
 */
let noisesArray = ['quack', 'sneeze', 'boom'];

/**
 * Iterates through each noise in the `noisesArray`, then for each character
 * in the word, produces a new variation with one uppercase character and
 * increasing exclamation marks. Each variation is printed to the console.
 */
noisesArray.forEach(noise => {
    let newNoise;

    for (let i = 0; i < noise.length; i++) {
        
        newNoise = noise.slice(0, i) + noise.charAt(i).toUpperCase() + noise.slice(i + 1) + '!'.repeat(i + 1);
        
        console.log(newNoise);        
    }
});
