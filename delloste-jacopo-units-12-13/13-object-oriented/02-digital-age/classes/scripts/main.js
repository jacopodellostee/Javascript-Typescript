/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script defines two classes: `Video` and `MusicVideo`.
 * `MusicVideo` extends `Video`, and both include methods (`watch` and `play`)
 * that simulate playback behavior. An array of video instances is created
 * and iterated to demonstrate usage.
 */

/**
 * Represents a video.
 *
 * @class
 */
class Video {
    /**
     * Creates a new Video instance.
     *
     * @constructor
     * @param {string} title - The title of the video.
     * @param {number} seconds - The length of the video in seconds.
     */
    constructor(title, seconds) {
        /**
         * @type {string}
         */
        this.title = title || "Untitled";

        /**
         * @type {number}
         */
        this.seconds = seconds || 0;
    }

    /**
     * Outputs how much of the video was watched.
     *
     * @param {number} [watched] - Number of seconds watched. If omitted, full video is considered watched.
     *
     * @example
     * const v = new Video("Sample", 200);
     * v.watch(120); // You watched 120 seconds of Sample
     * v.watch();    // You watched all 200 seconds of Sample
     */
    watch() {

        if (arguments.length === 0) {
            console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
            return;
        }

        let watched = arguments[0];

        if (watched < this.seconds)
            console.log(`You watched ${watched} seconds of ${this.title}`);
        else
            console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
    }
}

/**
 * Represents a music video, extending Video.
 *
 * @class
 * @extends Video
 */
class MusicVideo extends Video {
    /**
     * Creates a new MusicVideo instance.
     *
     * @constructor
     * @param {string} title - The title of the music video.
     * @param {number} seconds - The length of the video in seconds.
     * @param {string} artist - The name of the artist.
     */
    constructor(title, seconds, artist) {
        super(title, seconds);

        /**
         * @type {string}
         */
        this.artist = artist || "Unknown Artist";
    }

    /**
     * Simulates playing the music video.
     *
     * @example
     * const mv = new MusicVideo("Track", 180, "Artist");
     * mv.play(); // You played Track by Artist
     */
    play() {
        console.log(`You played ${this.title} by ${this.artist}`);
    }
}

// -----------------------------------------------

/**
 * An array for collecting Video and MusicVideo instances.
 *
 * @type {Array<Video>}
 */
let videoCollector = [];

let firstVideo = new Video("Bloodborne Lore Explained", 240);

let secondVideo = new Video("Red Dead Redemption 2 Trailer", 350);

let thirdVideo = new MusicVideo("911 / Mr Lonely", 185, "Tyler, The Creator");

videoCollector.push(firstVideo, secondVideo, thirdVideo);

/**
 * Simulates watching and optionally playing all videos in the videoCollector.
 */
videoCollector.forEach((video) => {
    
    video.watch(Math.floor(Math.random() * 300));

    video.watch();

    if (video instanceof MusicVideo) {
        video.play();
    }
});
