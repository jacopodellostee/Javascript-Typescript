# Reading list

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

### Solution Step-by-Step

1. Create the  `02-reading-list` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-reading-list` directory

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
        <title>Reading List</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Reading List</h1>
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
    * Reading List
    *
    * this file contain an array of books and 2 foreach loops.
    * the first loop print on the console the book's title and author
    * the second one print on the console if i already or have to 
    * read that book
    *  
    */

    let readingList = [
        {
            title: "Oyasumi Punpun",
            author: "Inio Asano",
            alreadyRead: true
        },
        {
            title: "Solanin",
            author: "Inio Asano",
            alreadyRead: true
        },
        {
            title: "Monster",
            author: "Naoki Urasawa",
            alreadyRead: false
        }
    ];


    readingList.forEach(book => {
        console.log(book.title + " by " + book.author);
    });

    readingList.forEach(book => {
        if(book.alreadyRead)
            console.log("You already read " + book.title + " by " + book.author);
        else
            console.log("You still need to read " + book.title + " by " + book.author);
    });
    ```

5. Check The Result using the DevTool Console of the Browser
