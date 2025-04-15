/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Book List 
 *
 * This file dynamically creates and displays a list of books on a web page.
 * Each book is shown with its title, author, read status, and cover image.
 * Books that are already read are styled differently from those that are not.
 * A CSS file is also loaded dynamically after a short delay.
 */

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

let body = document.body;

// Create and add the main heading
let h1 = document.createElement("h1");
h1.textContent = "My Book List";
body.appendChild(h1);

// Loop through the books array and render each book
books.forEach(book => {
    // Create a <ul> for each book
    let ul = document.createElement("ul");
    ul.classList.add("book");

    // Title item
    let title = document.createElement("li");
    title.textContent = book.title;
    ul.appendChild(title);

    // Author item
    let author = document.createElement("li");
    author.textContent = book.author;
    ul.appendChild(author);

    // Read status item
    let alreadyRead = document.createElement("li");
    alreadyRead.textContent = book.alreadyRead ? "Already read" : "Not read yet";
    ul.appendChild(alreadyRead);

    // Append the book list to the body
    body.appendChild(ul);

    // Add class depending on read status for styling
    if (book.alreadyRead) {
        ul.classList.add("read");
    } else {
        ul.classList.add("not-read");
    }

    // Add the book cover image
    let cover = document.createElement("img");
    cover.src = book.url;
    cover.alt = `${book.title} cover`;
    body.appendChild(cover);
});

// Dynamically load CSS after 5 seconds
setTimeout(() => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/style.css";
    document.head.appendChild(link);
}, 5000);

