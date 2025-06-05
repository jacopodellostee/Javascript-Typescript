# Digital Age

**Author**: Jacopo Dell'Oste 

### Request From The Client

- A Video has the following methods and properties

    + title (a string)

    + seconds (a number)

    + watch(x seconds [optional]) prints "You watched X seconds of 'TITLE'"

        - e.g. `"You watched 120 seconds of 'Lord of the rings'"` 

    + If x is missing prints "You watched all SECONDS seconds of 'TITLE'"

        - e.g. `"You watched all 160 seconds of 'Lord of the rings'"`

- A MusicVideo extends Video and has these extra methods and properties

    + artist (a string)

    + play() prints "You played 'TITLE' by 'ARTIST'" 
        
        - e.g. `"You played 'Another Brick in the Wall' by 'Pink Floyd'"`

- **Use the prototype method, not classes**, to write a constructors for Video and MusicVideo

    + The constructor functions accept a single config object

    + All arguments are optional, use defaults if missing

- Create an array that contains a mix of Video and MusicVideo instances

- Loop on the Array and for each item

    + call the watch() method

    + call the play() method only if it's a MusicVideo. Hint: Use instanceof

#### **Optional**:

- in a new folder, repeat the exercise using the class syntax rather than the prototype method

- All behaviors should be identical


### Solution Step-by-Step

1. Create the `prototype` folder, because this directory contain the solution using `Array.prototype`

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the root

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

    * the `style.css` file will be in a directory called `css` containing only CSS file    

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Digital Age</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Digital Age</h1>
        <p>open the console (F12) to see the output</p>
        
        <!-- End of The Body -->
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

        this.artist = artist || "Nobody";
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
    ```
    
5. Check The Result using the DevTool Console of the Browser
