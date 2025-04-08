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



