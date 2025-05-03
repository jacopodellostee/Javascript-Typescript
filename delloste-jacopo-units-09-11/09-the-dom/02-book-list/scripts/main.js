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
