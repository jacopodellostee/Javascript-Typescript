/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
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
        alreadyRead: true,
        url: "img/monster-cover.jpg"
    }
];

let body = document.body;

let h1 = document.createElement("h1");

h1.textContent = "My Book List";

body.appendChild(h1);

books.forEach(book => {

    let ul = document.createElement("ul");

    let title = document.createElement("li");

    title.textContent = book.title;

    ul.appendChild(title);

    let author = document.createElement("li");

    author.textContent = book.author;

    ul.appendChild(author);

    let alreadyRead = document.createElement("li");

    alreadyRead.textContent = book.alreadyRead;

    ul.appendChild(alreadyRead);

    body.appendChild(ul);

    let cover = document.createElement("img");

    cover.src = book.url;

    body.appendChild(cover);

});