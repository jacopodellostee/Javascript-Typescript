/**
 * @file main.js
 * @author Jacopo Dell'Oste
 *
 * @description
 * This script defines two constructor functions: `Video` and `MusicVideo`.
 * `MusicVideo` inherits from `Video`, and both include prototype methods 
 * (`watch` and `play`) that simulate playback behavior.
 * An array of video instances is created and iterated to demonstrate usage.
 */

/**
 * Creates a new Video object.
 *
 * @constructor
 * @param {string} title - The title of the video.
 * @param {number} seconds - The length of the video in seconds.
 */
function Video(title, seconds) {

    this.title = title || "Untitled";

    this.seconds = seconds || 0;
}

/**
 * Outputs how much of the video was watched.
 *
 * @function watch
 * @memberof Video.prototype
 * @param {number} [watched] - Number of seconds watched. If omitted, full video is considered watched.
 *
 * @example
 * const v = new Video("Sample", 200);
 * v.watch(120); // You watched 120 seconds of Sample
 * v.watch();    // You watched all 200 seconds of Sample
 */
Video.prototype.watch = function() {

    if (arguments.length === 0) {
        console.log(`You watched all ${this.seconds} seconds of ${this.title}`);

        return;
    }

    let watched = arguments[0];

    if (watched < this.seconds)
        console.log(`You watched ${watched} seconds of ${this.title}`);
    else
        console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
};

/**
 * Creates a new MusicVideo object, inheriting from Video.
 *
 * @constructor
 * @extends Video
 * @param {string} title - The title of the music video.
 * @param {number} seconds - The length of the video in seconds.
 * @param {string} artist - The name of the artist.
 */
function MusicVideo(title, seconds, artist) {

    Video.call(this, title, seconds);

    this.artist = artist || "Unknown Artist";
}

MusicVideo.prototype = Object.create(Video.prototype);

/**
 * Simulates playing the music video.
 *
 * @function play
 * @memberof MusicVideo.prototype
 *
 * @example
 * const mv = new MusicVideo("Track", 180, "Artist");
 * mv.play(); // You played Track by Artist
 */
MusicVideo.prototype.play = function () {
    console.log(`You played ${this.title} by ${this.artist}`);
};

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

    video instanceof MusicVideo ? video.play() : "";
});
