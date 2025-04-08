/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * Double Combo
 *
 * this file contains the main logic for a simluation of a card game
 * The game consists of two players, each with his own queue of cards.
 * The cards have different properties and methods, and the game simulates a turn-based combat.
 */

/**
 *  !! ATTENTION !!
 *  The following function isa a function called 'factory function'
 *  it creates a card object with properties and methods for combat.
 *  For More Info: https://heyjoshlee.medium.com/factory-functions-in-javascript-the-how-and-why-d8988bda654a
 * / 

/**
 * Creates a card object with properties and methods for combat.
 * @param {string} type - The type of the card: 'character', 'spell', or 'enemy'.
 * @param {string} name - The name of the card.
 * @returns {Object} The card object with properties and methods.
 */
function createCard(type, name) {
    return {
        type: type, 
        name: name,
        health: Math.floor(Math.random() * 100) + 50, 
        strength: Math.floor(Math.random() * 20) + 10, 
        defense: Math.floor(Math.random() * 10) + 5, 
        magic: Math.floor(Math.random() * 30) + 10, 

        /**
         * Attacks an enemy card, dealing damage based on strength and defense.
         * @param {Object} enemy - The enemy card to be attacked.
         */
        attack: function (enemy) {
            const damage = this.strength - enemy.defense;
            enemy.health -= Math.max(damage, 0); // Prevent negative damage
            console.log(`${this.name} attacks ${enemy.name}, dealing ${damage} damage.`);
        },

        /**
         * Buffs a character card, increasing its strength.
         * @param {Object} character - The character card to be buffed.
         */
        buff: function (character) {
            const buffAmount = Math.floor(Math.random() * 20) + 5;
            character.strength += buffAmount;
            console.log(`${this.name} buffs ${character.name}, increasing strength by ${buffAmount}.`);
        },

        /**
         * Deals damage to a character card based on the spell's magic power.
         * @param {Object} character - The character card to take damage.
         */
        damage: function (character) {
            const damageAmount = this.magic - character.defense;
            character.health -= Math.max(damageAmount, 0); // Prevent negative damage
            console.log(`${this.name} casts damage on ${character.name}, dealing ${damageAmount} damage.`);
        },

        /**
         * Initiates a duel between two character cards, comparing strength.
         * The stronger card wins and the weaker card loses all health.
         * @param {Object} character - The opponent character card.
         */
        duel: function (character) {
            if (this.strength > character.strength) {
                console.log(`${this.name} wins the duel against ${character.name}.`);
                character.health = 0; 
            } else {
                console.log(`${character.name} wins the duel against ${this.name}.`);
                this.health = 0; 
            }
        }
    };
}

/**
 * Populates a player's queue with random cards.
 * @param {Array} queue - The queue to be populated with cards.
 * @param {number} numCards - The number of cards to add to the queue.
 */
function populateQueue(queue, numCards) {
    const types = ['character', 'spell', 'enemy'];
    const names = ['Warrior', 'Mage', 'Healer', 'Goblin', 'Orc', 'Fireball', 'Lightning', 'Shield'];

    for (let i = 0; i < numCards; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        queue.push(createCard(type, name));
    }
}

/**
 * Simulates a turn-based combat between two cards.
 * The interaction depends on the type of the cards drawn.
 * @param {Object} player1Card - The card drawn by player 1.
 * @param {Object} player2Card - The card drawn by player 2.
 */
function combatTurn(player1Card, player2Card) {
    if (player1Card.type === 'character' && player2Card.type === 'enemy') {
        player1Card.attack(player2Card);
    } else if (player1Card.type === 'spell' && player2Card.type === 'character') {
        player1Card.buff(player2Card);
    } else if (player1Card.type === 'character' && player2Card.type === 'character') {
        player1Card.duel(player2Card);
    } else if (player1Card.type === 'spell' && player2Card.type === 'spell') {
        console.log('No effect for spell vs spell.');
    }
}


/**
 * Simulates a game of card combat between two players.
 * @returns {void}
 */
function startGame() {
    let player1Queue = [];
    let player2Queue = [];
    populateQueue(player1Queue, 5);
    populateQueue(player2Queue, 5);

    let round = 1;
    let player1Points = 0;
    let player2Points = 0;

    while (player1Queue.length > 0 && player2Queue.length > 0) {
        console.log(`Round ${round}:`);
        let player1Card = player1Queue.shift();
        let player2Card = player2Queue.shift();

        console.log(`Player 1 plays: ${player1Card.name} (${player1Card.type})`);
        console.log(`Player 2 plays: ${player2Card.name} (${player2Card.type})`);

        combatTurn(player1Card, player2Card);


        if (player1Card.type === 'character' && player1Card.health > 0) {
            player1Points += player1Card.health;
        }
        if (player2Card.type === 'character' && player2Card.health > 0) {
            player2Points += player2Card.health;
        }

        round++;
        console.log('---');
    }


    console.log('Game Over');
    console.log(`Player 1 points: ${player1Points}`);
    console.log(`Player 2 points: ${player2Points}`);

    if (player1Points > player2Points) {
        console.log('Player 1 wins!');
    } else if (player2Points > player1Points) {
        console.log('Player 2 wins!');
    } else {
        console.log('It\'s a tie!');
    }
}


startGame();
