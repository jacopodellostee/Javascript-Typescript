/**
 * @file helper.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This module animates a walking cat on the screen. The cat can start walking, 
 * stop, and change its speed (faster or slower). Its movement direction changes 
 * when reaching the window boundaries. The current speed is displayed on screen, 
 * and interactive buttons allow user control.
 */

/**
 * Main walkingcat object handling the cat animation and UI interactions.
 * @namespace
 * @property {HTMLImageElement} cat - The cat image element.
 * @property {HTMLElement} info - Display element for showing current speed info.
 * @property {HTMLButtonElement} start - "Start" button element.
 * @property {HTMLButtonElement} faster - "Faster" button element.
 * @property {HTMLButtonElement} slower - "Slower" button element.
 * @property {HTMLButtonElement} stop - "Stop" button element.
 * @property {number} position - Current horizontal position (in pixels) of the cat.
 * @property {number} speed - Current walking speed (pixels per frame).
 * @property {boolean} goingRight - Direction flag, true if moving right.
 * @property {?number} catInterval - Interval ID used to control walking animation.
 */
const walkingcat = {
    /**
     * The cat image element.
     * @type {HTMLImageElement}
     */
    cat: document.querySelector("img"),

    /**
     * Element displaying current speed info.
     * @type {HTMLElement}
     */
    info: document.getElementById("displayInfo"),

    /**
     * "Start" button element.
     * @type {HTMLButtonElement}
     */
    start: document.getElementById("start"),

    /**
     * "Faster" button element.
     * @type {HTMLButtonElement}
     */
    faster: document.getElementById("faster"),

    /**
     * "Slower" button element.
     * @type {HTMLButtonElement}
     */
    slower: document.getElementById("slower"),

    /**
     * "Stop" button element.
     * @type {HTMLButtonElement}
     */
    stop: document.getElementById("stop"),

    /**
     * Current horizontal position (in pixels) of the cat.
     * @type {number}
     */
    position: 0,

    /**
     * Current walking speed (pixels per frame).
     * @type {number}
     */
    speed: 10,

    /**
     * Direction flag: true if cat is moving right.
     * @type {boolean}
     */
    goingRight: true,

    /**
     * Interval ID controlling the walking animation.
     * @type {?number}
     */
    catInterval: null,

    /**
     * Moves the cat one step, updates direction at boundaries,
     * and refreshes speed info on screen.
     * @returns {void}
     */
    catWalk: function () {
        if (this.goingRight) {
            this.position += this.speed;
            this.cat.style.transform = "scaleX(1)";
        } else {
            this.position -= this.speed;
            this.cat.style.transform = "scaleX(-1)";
        }

        this.cat.style.left = this.position + "px";

        if (this.position > window.innerWidth - this.cat.width) {
            this.goingRight = false;
        }

        if (this.position < 0) {
            this.goingRight = true;
        }

        this.showInfo();
    },

    /**
     * Updates the info display with the current speed.
     * @returns {void}
     */
    showInfo: function () {
        this.info.textContent = `The cat is going at a speed of ${this.speed}`;
    },

    /**
     * Increases the walking speed by 5 units.
     * @returns {void}
     */
    goFaster: function () {
        this.speed += 5;
        this.showInfo();
    },

    /**
     * Decreases the walking speed by 5 units if above minimum.
     * @returns {void}
     */
    goSlower: function () {
        if (this.speed > 5) {
            this.speed -= 5;
        }
        this.showInfo();
    },

    /**
     * Stops the walking animation and disables/enables relevant buttons.
     * @returns {void}
     */
    stopCatWalking: function () {
        clearInterval(this.catInterval);
        this.catInterval = null;

        this.stop.disabled = true;
        this.faster.disabled = true;
        this.slower.disabled = true;
        this.start.disabled = false;
    },

    /**
     * Starts the walking animation if not already running,
     * and updates button states accordingly.
     * @returns {void}
     */
    startCatWalking: function () {
        if (!this.catInterval) {
            this.catInterval = setInterval(this.catWalk.bind(this), 50);

            this.start.disabled = true;
            this.faster.disabled = false;
            this.slower.disabled = false;
            this.stop.disabled = false;
        }
    },

    /**
     * Initializes the program: shows initial speed info
     * and attaches event listeners to control buttons.
     * @returns {void}
     */
    startProgram: function () {
        window.onload = () => this.showInfo();

        // Event listeners
        this.start.addEventListener('click', this.startCatWalking.bind(this));
        this.stop.addEventListener('click', this.stopCatWalking.bind(this));
        this.faster.addEventListener('click', this.goFaster.bind(this));
        this.slower.addEventListener('click', this.goSlower.bind(this));
    }
};

export default walkingcat;

