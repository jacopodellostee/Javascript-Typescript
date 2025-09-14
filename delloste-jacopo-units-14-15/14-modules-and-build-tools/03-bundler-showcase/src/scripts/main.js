/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the Dad Joke Fetcher app.
 * It handles fetching a random joke from the "icanhazdadjoke" API
 * and displays it in the DOM when the user clicks the "Get Joke" button.
 */

// Import the styles
import '../styles/style.css';

/**
 * Button element to fetch a new joke.
 * @type {HTMLButtonElement}
 */
let btnJoke = document.querySelector('#btnJoke');

/**
 * Container element where the fetched joke will be displayed.
 * @type {HTMLElement}
 */
let jokeContainer = document.querySelector('#joke');

/**
 * Fetches a random joke from the icanhazdadjoke API and updates the UI.
 * Triggered when the user clicks the joke button.
 * @returns {void}
 */
btnJoke.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        jokeContainer.textContent = data.joke;
    })
    .catch(err => {
        console.error("Errore nella fetch:", err);
    });
});
