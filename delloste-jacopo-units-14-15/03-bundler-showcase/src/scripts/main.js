import '../styles/style.css';

let btnJoke = document.querySelector('#btnJoke');

let jokeContainer = document.querySelector('#joke')

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
