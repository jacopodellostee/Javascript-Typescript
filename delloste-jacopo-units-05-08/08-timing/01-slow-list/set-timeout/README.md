# Timed conversion (setTimeOut)

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create an array that holds a list of 30 items (food, books, etc.)

- Print one item of the list every second until the list is completely printed

### Solution Step-by-Step

1. Create the  `set-timeout` folder, because we will use the `setTimeOut` function for this task

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the main directory

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
        <title>Slow Lis</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Slow List</h1>
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
    * Slow List (Bonus)
    *
    * this file print on the console each element of the array 
    * 'books' every 1 seconds using a timeOut
    */


    let books = 
    [
        "Monster", "20th Century Boys", "Pluto", "Billy Bat", "Asadora", "Etciù!", "Goodnight Punpun", "Solanin", "Asano Short Stories", "Mujina - Into the Deep", 
        "Girl From The Other Side", "Ping Pong", "The Novel's Extra", "Goodbye Eri", "Chainsaw Man", "Look Back", "Sweet Home", "Bastard", "Tokyo Ghoul", "The Killer Inside",
        "Blade of The Immortal", "Shadow Slave", "Lord Of The Mysters", "Berserk", "Suicide Island", "Holyland", "Blue Exorcist", "Akame Ga Kill!", "Shingeki No Kyojin", "Gannibal"
    ];

    let index = 0;

    /**
    * print the array's element on the console
    * @returns {void}
    */
    function printBook () {
        if(index < books.length){ 
            console.log(books[index]);
            index++;
            setTimeout(printBook, 1000);
        }
    }

    printBook();
    ```

5. Check The Result using the DevTool Console of the Browser
