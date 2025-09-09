function roulette (label = "round", delay = 500) {

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

async function playGame() {

  try {
    
    const results = await Promise.all([
      roulette("Round 1", 2000),
      roulette("Round 2", 100),
      roulette("Round 3")
    ]);

    results.forEach(result => console.log(result));

  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Game over");
  }
}

playGame();