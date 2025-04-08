/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Slow List
 *
 * this file print on the console each element of the array 
 * 'books' every 1 seconds using an interval
 */


let books = 
[
    "Monster", "20th Century Boys", "Pluto", "Billy Bat", "Asadora", "Etciù!", "Goodnight Punpun", "Solanin", "Asano Short Stories", "Mujina - Into the Deep", 
    "Girl From The Other Side", "Ping Pong", "The Novel's Extra", "Goodbye Eri", "Chainsaw Man", "Look Back", "Sweet Home", "Bastard", "Tokyo Ghoul", "The Killer Inside",
    "Blade of The Immortal", "Shadow Slave", "Lord Of The Mysters", "Berserk", "Suicide Island", "Holyland", "Blue Exorcist", "Akame Ga Kill!", "Shingeki No Kyojin", "Gannibal"
];

let index = 0;

/**
 * print the element of the array on the console, 
 * if the index is higher than of the array's lenght 
 * it clear the interval
 * @returns {void}
 */
function printBook () {
    
    if(index < books.length){ 
        console.log(books[index]);
        index++;
    }else {
        clearInterval(interval);
    }
}

let interval = setInterval(printBook, 1000);
