# Book list

**Author**: Jacopo Dell'Oste 

### Request From The Client

Use an array of books like this

```javascript
    let books = [
        {
            title: 'The Design of EveryDay Things',
            author: 'Don Norman',
            alreadyRead: false
        }, {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
        }
    ];
```

You should have at least 4 books

- Create a complete webpage with a title, description and all other HTML tags

- In the body add an h1 title of "My Book List"

- In javascript, iterate through the array of books.

    + For each book, create HTML element with the book title and author and append it to the page
    + Use a ul and li to display the books

    + Add a url property to each book object that contains the cover image of the book

    + Add the image to the HTML using Javascript

    + Using javascript change the style of the book depending on whether you have read it or not

- Add an external css file that applies after 5 seconds

    + Now change the style of the book depending on whether you have read it or not using both css and javascript (the CSS should use a different color for read books)


### Solution Step-by-Step

1. Create the  `02-book-list` folder

2. Create the the `index.html`, `main.js` and `style.css` files in the appropriate directories

    * the `index.html` file will be in the `02-book-list` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

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
        <title>Book List</title>
    </head>
    <body>
        <!-- End of The Body -->
        <script src="./scripts/main.js"></script>
    </body>
    </html>
    ```

4. Write the script  

    * The JavaScript code:

    ```javascript
    /**
    * @file main.js
    * @author Jacopo Dell'Oste
    * @description
    * Book List Renderer
    * 
    * Dynamically creates and displays a list of books on a web page.
    * Each book is represented with its title, author, read status, and cover image.
    * Books that have already been read receive special styling.
    * An external CSS file is also dynamically loaded after a short delay.
    */

    // === Book Data ===

    /**
    * @typedef {Object} Book
    * @property {string} title - The title of the book
    * @property {string} author - The author of the book
    * @property {boolean} alreadyRead - Indicates if the book has been read
    * @property {string} url - The path to the book cover image
    */

    /** @type {Book[]} List of books to display */
    let books = [
        {
            title: 'Oyasumi Punpun',
            author: 'Inio Asano',
            alreadyRead: true,
            url: "img/oyasumi-punpun-cover.jpg"
        },
        {
            title: 'Solanin',
            author: 'Inio Asano',
            alreadyRead: true,
            url: "img/solanin-cover.jpg"
        },
        {
            title: '20th Century Boys',
            author: 'Naoki Urasawa',
            alreadyRead: true,
            url: "img/20th-century-boys-cover.jpg"
        },
        {
            title: 'Monster',
            author: 'Naoki Urasawa',
            alreadyRead: false,
            url: "img/monster-cover.jpg"
        }
    ];

    // === Page Construction ===

    /** @type {HTMLBodyElement} Main body of the document */
    let body = document.body;

    /** @type {HTMLHeadingElement} Heading for the book list */
    let h1 = document.createElement("h1");

    h1.textContent = "My Book List";

    body.appendChild(h1);

    // === Render Each Book ===

    books.forEach(book => {
        /** @type {HTMLUListElement} List container for book details */

        let ul = document.createElement("ul");

        ul.classList.add("book");

        // --- Title ---
        /** @type {HTMLLIElement} Book title */

        let title = document.createElement("li");

        title.textContent = book.title;

        ul.appendChild(title);

        // --- Author ---
        /** @type {HTMLLIElement} Book author */
        let author = document.createElement("li");

        author.textContent = book.author;

        ul.appendChild(author);

        // --- Read Status ---
        /** @type {HTMLLIElement} Book read status */
        let alreadyRead = document.createElement("li");

        alreadyRead.textContent = book.alreadyRead ? "Already read" : "Not read yet";

        ul.appendChild(alreadyRead);

        // Add class depending on read status

        book.alreadyRead ? ul.classList.add("read"): ul.classList.add("not-read");
        
        // Append the book list to the document body
        body.appendChild(ul);

        // --- Cover Image ---
        /** @type {HTMLImageElement} Book cover image */
        let cover = document.createElement("img");

        cover.src = book.url;

        cover.alt = `${book.title} cover`;

        body.appendChild(cover);
    });

    // === Load External CSS ===

    /**
    * Dynamically loads external stylesheet after 5 seconds
    */
    setTimeout(() => {
        /** @type {HTMLLinkElement} Stylesheet link element */
        let link = document.createElement("link");

        link.rel = "stylesheet";

        link.href = "css/style.css";

        document.head.appendChild(link);
    }, 5000);
    ```

    * The CSS code:

    ```css 
    /**
    * style.css
    *
    * Defines the layout and appearance of the dynamically rendered book list.
    * Provides styling for each book block, including differentiation for read and unread books.
    * Font and color choices enhance readability and user experience.
    */

    /* === Book List Styling === */

    /* 
    * Base styling for each book entry.
    * Uses a serif font for a traditional literary look, bold text for emphasis, and padding for spacing.
    */
    .book {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    }

    /*
    * Style for books that have already been read.
    * Green color indicates completion.
    */
    .read {
    color: rgb(16, 204, 16);
    }

    /*
    * Style for books that have not yet been read.
    * Red color draws attention to unread status.
    */
    .not-read {
    color: red;
    }
    ```

5. Check The Result using the DevTool Console of the Browser
