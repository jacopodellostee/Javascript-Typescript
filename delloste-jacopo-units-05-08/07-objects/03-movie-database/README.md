# Movie database

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create an object to store the following information about a movie: title (a
string), duration (a number), and stars (an array of strings).

- Create an Array of objects that can hold several movies.

- Create a function to print out the movie information like so: "Puff the Magic
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

- Test the function by printing one movie.

- Use the function to print all the movies in the Array

### Solution Step-by-Step

1. Create the  `03-movie-database` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `03-movie-database` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie Database</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Movie Database</h1>
        <p>open the console (F12) to see the output</p>
        
        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
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
    ```

5. Check The Result using the DevTool Console of the Browser
