/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Top Choice (Bonus)
 *
 * this file contain an array with my preferences 
 * with a 'for' loop print the my preferences on the console
 * with each preference, it's position
 *  
 */

let topChoice = ["Monster", "Solanin", "Oyasumi Punpun", "20th Century Boys"];

for (let i = 0; i < topChoice.length; i++) {
    switch (i) {
        case 0: // 1
            console.log(`My 1st choice is ${topChoice[i]}`);
            break;
        case 1: // 2
            console.log(`My 2nd choice is ${topChoice[i]}`);
            break;
        case 2: // 3
            console.log(`My 3rd choice is ${topChoice[i]}`);
            break;
        default:
            // i+1 beacuse with i = 3 the choice is the 4th NOT the 3rd 
            console.log(`My ${i+1}th choice is ${topChoice[i]}`);
            break;
    }
    
}