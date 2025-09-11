# Roulette

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 



- Write a function called round that returns a promise with a 50/50
probability of resolving or rejecting

- The function should take 2 optional parameters:

    + label, a label for the round, otherwise the default is "round"

    + delay, a delay in which to resolve the promise, otherwise 500ms

- Call the function 3 times and use the Promise API to create an output as in
the following page

- Remember to handle any possible errors cleanly

When any round is lost (and terminate)

```bash
round x: lost!
Game over
```
When all rounds are won (and terminate)

```bash
round 1:won!
round 2:won!
round 3:won!
Game over
```

### Solution Step-by-Step

1. Create the  `02-roulette` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `02-roulette` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jacopo Dell'Oste">
        <title>Roulette</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Roulette</h1>
        <p>open the console (F12) to see the output</p>

        <!-- End of Body-->
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
    * 
    * @description
    * This script demonstrates a simple roulette-style game using promises and async/await.
    * 
    * - The `roulette` function simulates a round with a 50/50 chance of winning or losing.
    * - The `playGame` function executes three rounds concurrently and logs the results.
    * - Errors (losses) are handled cleanly, and the game always ends with "Game over".
    */

    /**
    * Simulates a roulette round with a random 50/50 outcome.
    *
    * After the specified delay, the promise either resolves with a win message
    * or rejects with a loss message.
    *
    * @function
    * @name roulette
    * @param {string} [label="round"] - A label for the round.
    * @param {number} [delay=500] - Delay in milliseconds before resolving/rejecting.
    * @returns {Promise<string>} A promise that resolves if the round is won or rejects if lost.
    *
    * @example
    * roulette("Round 1", 1000)
    *   .then(result => console.log(result))
    *   .catch(error => console.error(error.message));
    */
    function roulette(label = "round", delay = 500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(`${label}: won!`);
        } else {
            reject(new Error(`${label}: lost!`));
        }
        }, delay);
    });
    }

    /**
    * Plays three rounds of roulette concurrently.
    *
    * Uses `Promise.all` to execute three rounds in parallel. Logs each result if all rounds
    * succeed. If any round is lost, the error is caught and its message is logged. In all cases,
    * "Game over" is logged at the end.
    *
    * @async
    * @function
    * @name playGame
    * @returns {Promise<void>} A promise that resolves when the game is over.
    *
    * @example
    * playGame();
    * // Possible outputs:
    * // "Round 1: won!"
    * // "Round 2: won!"
    * // "Round 3: lost!"
    * // "Game over"
    */
    async function playGame() {
    try {
        const results = await Promise.all([
        roulette("Round 1"),
        roulette("Round 2", 1000),
        roulette("Round 3", 2000)
        ]);

        results.forEach(result => console.log(result));
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Game over");
    }
    }

    // Start the game
    playGame();
    ```

5. Check The Result using the DevTool Console of the Browser
