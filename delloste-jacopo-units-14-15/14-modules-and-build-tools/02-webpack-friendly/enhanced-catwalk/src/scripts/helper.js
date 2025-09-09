const walkingcat = {
    cat: document.querySelector("img"),
    info: document.getElementById("displayInfo"),
    start: document.getElementById("start"),
    faster: document.getElementById("faster"),
    slower: document.getElementById("slower"),
    stop: document.getElementById("stop"),

    position: 0,
    speed: 10,
    goingRight: true,
    catInterval: null,

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

    showInfo: function () {
        this.info.textContent = `The cat is going at a speed of ${this.speed}`;
    },

    goFaster: function () {
        this.speed += 5;
        this.showInfo();
    },

    goSlower: function () {
        if (this.speed > 5) {
            this.speed -= 5;
        }
        this.showInfo();
    },

    stopCatWalking: function () {
        clearInterval(this.catInterval);
        this.catInterval = null;

        this.stop.disabled = true;
        this.faster.disabled = true;
        this.slower.disabled = true;
        this.start.disabled = false;
    },

    startCatWalking: function () {
        if (!this.catInterval) {
            this.catInterval = setInterval(this.catWalk.bind(this), 50);

            this.start.disabled = true;
            this.faster.disabled = false;
            this.slower.disabled = false;
            this.stop.disabled = false;
        }
    },

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
