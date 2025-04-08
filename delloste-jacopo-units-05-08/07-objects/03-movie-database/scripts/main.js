/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Movie Database
 *
 * this file contain an arrays of movie called movieDatabase, and a function
 * called 'printMovie' that print a movie's attribute on the console.
 * This function is used on a for loop for printing all the movies in 
 * movieDatabase
 *  
 */

let movieDatabase = [
    {
        title: "Ready Player One",
        duration: 140,
        stars: ["Tye Sheridan", "Olivia Cooke", "Mark Rylance", "Ben Mendelsohn", "Simon Pegg"]
    },
    {
        title: "No Countery For Old Man",
        duration: 122,
        stars: ["Javier Bardem", "Tommy Lee Jones", "Josh Brolin", "Woody Harrelson", "Kelly Macdonald"]
    },
    {
        title: "Se7en",
        duration: 127,
        stars: ["Morgan Freeman", "Brad Pitt", "Gwyneth Paltrow", "Kevin Spacey", "John Cassini"]
    }
];

/**
 * print on the console all the movie's attribute
 * @param {object} movie
 * @returns {void}
 */
function printMovie(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(", "));
}

// printMovie(movieDatabase[2]);

for (let i = 0; i < movieDatabase.length; i++) {
    printMovie(movieDatabase[i]);
}
