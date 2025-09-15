# Stylish Bundling Challenge

**Author**: Jacopo Dell'Oste

### Client Request

Stylish bundling challenge

Use the following resources:

- style-loader, sass-loader, Asset Modules Guide
Create a small project with HTML, SCSS, JavaScript files, and images

- Use Webpack to:

    1. Build SCSS files into a single CSS bundle

    2. Handle various image types with automatic decision between inlining
    and emitting based on file size (e.g., 50KB)

- Include a README.md file with a brief explanation of your Webpack
configuration and how it handles SCSS and images

### Solution Step-by-Step

1.  **Webpack Project Setup**
  
Create a new folder for the project.
  
Initialize a new Node.js project 
  
    `npm init -y`.
  
Install Webpack and the necessary loaders using 
  
    `npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env css-loader style-loader sass sass-loader mini-css-extract-plugin html-webpack-plugin css-minimizer-webpack-plugin terser-webpack-plugin webpack-dev-server --save-dev`

Then, create a `webpack.config.js` file for Webpack's configuration.

  ```js
    const path = require('path');

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const TerserPlugin = require('terser-webpack-plugin');

    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

    module.exports = {
      mode: 'production',
      entry: './src/scripts/main.js',
      output: { 
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name].[hash][ext]'
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'static'),
          publicPath: '/static',
          serveIndex: true
        }
      },
      plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp|avif|ico)$/i,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 50 * 1024 
              }
            },
            generator: {
              filename: 'images/[name].[hash:8][ext]'
            }
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [[
                  '@babel/preset-env',
                  {
                    targets: { edge: '127', firefox: '128', chrome: '127', safari: '17.5', ie: '11' },
                    useBuiltIns: 'usage',
                    corejs: '3.21.1'
                  }
                ]]
              }
            }
          }
        ]
      },
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin(),
          new CssMinimizerPlugin()
        ],
      }
    }
  ```

**Image Handling in Webpack:**

Webpack is configured to handle various image types (`.png`, `.jpe?g`, `.gif`, `.svg`, `.webp`, `.avif`, `.ico`) using the `asset` module type. This allows Webpack to automatically decide whether to inline the image as a data URI (if its size is below a certain limit) or emit it as a separate file in the output directory.

The specific configuration is as follows:
- `type: \'asset\''`: Tells Webpack to use the asset module, which chooses between `asset/resource` (emits a separate file) and `asset/inline` (inlines as a data URI).
- `parser: { dataUrlCondition: { maxSize: 50 * 1024 } }`: Defines the condition for inlining. If the image size is less than 50KB, it will be inlined directly into the bundle. Otherwise, it will be emitted as a separate file.
- `generator: { filename: \'images/[name].[hash:8][ext]\'' }`: Specifies the naming pattern for images emitted as separate files. They will be placed in the `images` subfolder within the output directory, with an 8-character hash for caching.

Add scripts in the **`package.json`** file to start the development server and build the project.

  ```json
    {
      "name": "stylish-bundling-challenge",
      "version": "1.0.0",
      "description": "",
      "main": "webpack.config.js",
      "scripts": {
        "dev": "webpack serve --mode development", // run the project in development mode
        "build": "webpack --mode production" // build the project for distibrution
      },
      "keywords": [],
      "author": "Jacopo Dell'Oste",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.28.0",
        "@babel/preset-env": "^7.28.0",
        "babel-loader": "^10.0.0",
        "css-loader": "^7.1.2",
        "css-minimizer-webpack-plugin": "^7.0.2",
        "html-webpack-plugin": "^5.6.3",
        "mini-css-extract-plugin": "^2.9.2",
        "sass": "^1.89.2",
        "sass-loader": "^16.0.5",
        "scss-reset": "^1.4.6",
        "style-loader": "^4.0.0",
        "terser-webpack-plugin": "^5.3.14",
        "webpack": "^5.100.2",
        "webpack-cli": "^6.0.1",
        "webpack-dev-server": "^5.2.2"
      },
      "dependencies": {
        "core-js": "^3.44.0"
      }
    }
  ```

Here you can also see the dependencies of the project.

2. **The Code**

- Create the `src` directory where all the code will be.

  + Inside of it, create the `index.html` file and write the code.

  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description"
        content="Tyler, The Creator - Official website featuring music, albums, tour dates, and more from the Grammy-winning artist and creative visionary.">
      <meta name="author" content="Jacopo Dell'Oste">
      <title>Stylish Bundling Challenge</title>
    </head>
    <body>
      <div class="navbar">
        <div class="navbar-content">
          <a href="#" class="logo">Tyler, The Creator</a>

          <nav class="tyler-nav" id="navMenu">
            <ul>
              <li><a href="#music">Music</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#tour">Tour</a></li>
              <li><a href="#merch">Merch</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>

          <!-- Mobile Hamburger -->
          <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          </button>
        </div>
      </div>

      <header class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-text">
          <h1>Tyler, The Creator</h1>
          <h2>Dive into the genius and discography</h2>
          <a href="#music" class="cta-btn">Explore Music</a>
        </div>
      </header>

      <!-- About Tyler Section -->
      <section class="about-tyler" id="about">
        <div class="about-image">
          <img src="../static/images/tyler.avif" alt="">
        </div>
        <div class="about-text">
          <h2>Who is Tyler, The Creator?</h2>
          <p>
            Tyler, The Creator (real name: Tyler Gregory Okonma) is a multifaceted artist: rapper, producer, designer, and
            creative visionary. Founder of the Odd Future collective, he has revolutionized the hip-hop scene with a unique
            aesthetic and iconic albums like IGOR and Call Me If You Get Lost.
            Known for his provocative and theatrical style, Tyler is not just a musician but a cultural force, capable of
            uniting music, fashion, design, and humor into an unmistakable identity.
          </p>
        </div>
      </section>

      <!-- Discography Overview -->
      <section class="tyler-albums" id="music">
        <div class="albums-container">
          <h2>Discography</h2>
          <ul class="album-list">
            <li data-album="bastard"><a class="album-title" href="#bastard">Bastard</a> (2009)</li>
            <li data-album="goblin"><a class="album-title" href="#goblin">Goblin</a> (2011)</li>
            <li data-album="wolf"><a class="album-title" href="#wolf">Wolf</a> (2013)</li>
            <li data-album="cherry-bomb"><a class="album-title" href="#cherry-bomb">Cherry Bomb</a> (2015)</li>
            <li data-album="flower-boy"><a class="album-title" href="#flower-boy">Flower Boy</a> (2017)</li>
            <li data-album="igor"><a class="album-title" href="#igor">IGOR</a> (2019)</li>
            <li data-album="cmiygl"><a class="album-title" href="#cmiygl">Call Me If You Get Lost</a> (2021)</li>
            <li data-album="estate-sale"><a class="album-title" href="#estate-sale">CMIYGL: The Estate Sale</a> (2023)</li>
            <li data-album="chromakopia"><a class="album-title" href="#chromakopia">Chromakopia</a> (2024)</li>
          </ul>
        </div>
      </section>

      <!-- Album Details - Bastard -->
      <section class="album-detail" id="bastard">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/bastard-cover.jpg" alt="Bastard album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Bastard</h2>
            <p class="year">2009</p>
            <p class="description">
              <strong>Bastard</strong> is Tyler, The Creator's debut mixtape, released on December 25, 2009. Completely
              self-produced, Bastard introduced the world to Tyler's dark, chaotic, and disturbing style, dealing with
              themes like abandonment, self-hatred, and the desire for redemption. Despite its dark tone, the album became a
              manifesto for a new generation of nonconformist rappers.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>Bastard</li>
              <li>Seven</li>
              <li>Odd Toddlers (feat. Casey Veggies)</li>
              <li>French!</li>
              <li>Blow</li>
              <li>Pigs Fly (feat. Domo Genesis)</li>
              <li>Parade</li>
              <li>Slow It Down (feat. Hodgy Beats)</li>
              <li>AssMilk (feat. Earl Sweatshirt)</li>
              <li>VCR / Wheels</li>
              <li>Session (feat. Hodgy Beats & Brandun DeShay)</li>
              <li>Sarah</li>
              <li>Jack and the Beanstalk</li>
              <li>Tina (feat. Jasper Dolphin)</li>
              <li>Inglorious</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Goblin -->
      <section class="album-detail" id="goblin">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/goblin-cover.jpg" alt="Goblin album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Goblin</h2>
            <p class="year">2011</p>
            <p class="description">
              <strong>Goblin</strong> is Tyler, The Creator's official debut album, released on May 10, 2011, under XL
              Recordings. An ideal sequel to the <em>Bastard</em> mixtape, it continues the narrative with the character Dr.
              TC, an imaginary figure who serves as Tyler's therapist. The album is known for its disturbed tone, frequent
              use of alter egos, and lo-fi, dark, minimal soundscapes. The track <em>Yonkers</em> achieved massive success,
              going viral and definitively launching Tyler's mainstream career.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>Goblin</li>
              <li>Yonkers</li>
              <li>Radicals</li>
              <li>She (feat. Frank Ocean)</li>
              <li>Transylvania</li>
              <li>Nightmare</li>
              <li>Tron Cat</li>
              <li>Her</li>
              <li>Sandwitches (feat. Hodgy Beats)</li>
              <li>Fish / Boppin Bitch</li>
              <li>Analog (feat. Hodgy Beats)</li>
              <li>Bitch Suck Dick (feat. Jasper Dolphin & Taco)</li>
              <li>Window (feat. Domo Genesis, Frank Ocean, Hodgy Beats, Mike G & Jasper)</li>
              <li>Au79</li>
              <li>Golden</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Wolf -->
      <section class="album-detail" id="wolf">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/wolf-cover.jpg" alt="Wolf album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Wolf</h2>
            <p class="year">2013</p>
            <p class="description">
              <strong>Wolf</strong> is Tyler, The Creator's second studio album, released on April 2, 2013. The album
              represents an artistic evolution from previous works, with more refined productions, jazz and soul influences,
              and more intimate lyrics. In <em>Wolf</em>, Tyler continues his conceptual narrative, exploring themes like
              love, abandonment, and identity, while maintaining his humor and irreverence.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>Wolf</li>
              <li>Jamba (feat. Hodgy Beats)</li>
              <li>Cowboy</li>
              <li>Awkward</li>
              <li>Domo23</li>
              <li>Answer</li>
              <li>Slater (feat. Frank Ocean)</li>
              <li>48</li>
              <li>Colossus</li>
              <li>PartyIsntOver / Campfire / Bimmer (feat. Laetitia Sadier & Frank Ocean)</li>
              <li>IFHY (feat. Pharrell)</li>
              <li>Pigs</li>
              <li>Parking Lot (feat. Casey Veggies & Mike G)</li>
              <li>Rusty (feat. Domo Genesis & Earl Sweatshirt)</li>
              <li>Trashwang (feat. Odd Future)</li>
              <li>Treehome95 (feat. Coco O. & Erykah Badu)</li>
              <li>Tamale</li>
              <li>Lone</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Cherry Bomb -->
      <section class="album-detail" id="cherry-bomb">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/cherry-bomb-cover.jpg" alt="Cherry Bomb album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Cherry Bomb</h2>
            <p class="year">2015</p>
            <p class="description">
              <strong>Cherry Bomb</strong> is Tyler, The Creator's third studio album, released on April 13, 2015.
              Characterized by aggressive, distorted, and experimental sound, the album divides critics and fans but
              confirms Tyler as an artist ready to challenge traditional hip-hop boundaries. Between chaotic tracks and
              melodic moments, <em>Cherry Bomb</em> is an irreverent and bold sonic journey.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>Deathcamp</li>
              <li>Fucking Young / Perfect</li>
              <li>Cherry Bomb</li>
              <li>Keep Da O's</li>
              <li>Buffalo</li>
              <li>2Seater (feat. Frank Ocean)</li>
              <li>Find Your Wings</li>
              <li>Run</li>
              <li>Teacher (feat. Pharrell Williams)</li>
              <li>Smuckers (feat. Kanye West & Lil Wayne)</li>
              <li>Blow My Load</li>
              <li>Fuck What You Think</li>
              <li>Trashwang (feat. Hodgy Beats, Domo Genesis, Taco & Jasper Dolphin)</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Flower Boy -->
      <section class="album-detail" id="flower-boy">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/flower-boy-cover.jpg" alt="Flower Boy album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Flower Boy</h2>
            <p class="year">2017</p>
            <p class="description">
              <strong>Flower Boy</strong>, released on July 21, 2017, marks a turning point in Tyler, The Creator's career.
              The album is characterized by richer and more curated production, with themes exploring identity, loneliness,
              and personal growth. It was praised for its emotional maturity and skillful use of soul and jazz sonorities.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>Foreword (feat. Rex Orange County & Anna of the North)</li>
              <li>Where This Flower Blooms (feat. Frank Ocean)</li>
              <li>Sometimes...</li>
              <li>See You Again (feat. Kali Uchis)</li>
              <li>Who Dat Boy (feat. A$AP Rocky)</li>
              <li>Pothole (feat. Jaden Smith)</li>
              <li>Garden Shed (feat. Estelle)</li>
              <li>Boredom (feat. Rex Orange County & Anna of the North)</li>
              <li>I Ain't Got Time!</li>
              <li>911 / Mr. Lonely (feat. Frank Ocean & Steve Lacy)</li>
              <li>Droppin' Seeds (feat. Lil Wayne)</li>
              <li>November</li>
              <li>Glitter</li>
              <li>Enjoy Right Now, Today</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - IGOR -->
      <section class="album-detail" id="igor">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/igor-cover.jpg" alt="IGOR album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>IGOR</h2>
            <p class="year">2019</p>
            <p class="description">
              <strong>IGOR</strong> is Tyler, The Creator's fifth studio album, released on May 17, 2019. The album was
              critically acclaimed for its experimental production, distinctive aesthetics, and intense emotional
              expressiveness. With <em>IGOR</em>, Tyler partially abandons traditional rap to explore synth-funk, R&B, and
              neo-soul sonorities, telling a troubled and transformative love story. The project was awarded the Grammy
              Award for Best Rap Album in 2020.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>IGOR'S THEME</li>
              <li>EARFQUAKE</li>
              <li>I THINK</li>
              <li>EXACTLY WHAT YOU RUN FROM YOU END UP CHASING</li>
              <li>RUNNING OUT OF TIME</li>
              <li>NEW MAGIC WAND</li>
              <li>A BOY IS A GUN*</li>
              <li>PUPPET</li>
              <li>WHAT'S GOOD</li>
              <li>GONE, GONE / THANK YOU</li>
              <li>I DON'T LOVE YOU ANYMORE</li>
              <li>ARE WE STILL FRIENDS?</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Call Me If You Get Lost -->
      <section class="album-detail" id="cmiygl">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/cmiygl-cover.jpg" alt="Call Me If You Get Lost album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Call Me If You Get Lost</h2>
            <p class="year">2021</p>
            <p class="description">
              <strong>Call Me If You Get Lost</strong> is Tyler, The Creator's sixth studio album, released on June 25,
              2021. The project marks a return to more direct rap, combining mixtape energy with Tyler's typical curated
              aesthetic. Featuring legendary DJ Drama, <em>Call Me If You Get Lost</em> is inspired by the Gangsta Grillz
              tradition, exploring themes like identity, success, and unrequited love, all seasoned with luxurious and
              versatile productions.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>SIR BAUDELAIRE (feat. DJ Drama)</li>
              <li>CORSO</li>
              <li>LEMONHEAD (feat. 42 Dugg)</li>
              <li>WUSYANAME (feat. Ty Dolla $ign & YoungBoy Never Broke Again)</li>
              <li>LEMONHEAD</li>
              <li>HOT WIND BLOWS (feat. Lil Wayne)</li>
              <li>MASSA</li>
              <li>RUNITUP (feat. Teezo Touchdown)</li>
              <li>MANIFESTO (feat. Domo Genesis)</li>
              <li>SWEET / I THOUGHT YOU WANTED TO DANCE (feat. Brent Faiyaz & Fana Hues)</li>
              <li>MOMMA TALK</li>
              <li>RISE! (feat. DAISY WORLD)</li>
              <li>BLESSED</li>
              <li>JUGGERNAUT (feat. Lil Uzi Vert & Pharrell Williams)</li>
              <li>WILSHIRE</li>
              <li>SAFARI</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - The Estate Sale -->
      <section class="album-detail" id="estate-sale">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/cmiygl-tes-cover.jpg" alt="Call Me If You Get Lost: The Estate Sale album cover"
              loading="lazy">
          </div>

          <div class="album-info">
            <h2>Call Me If You Get Lost: The Estate Sale</h2>
            <p class="year">2023</p>
            <p class="description">
              <strong>Call Me If You Get Lost: The Estate Sale</strong> is the deluxe edition of the <em>Call Me If You Get
                Lost</em> album, released on March 31, 2023. The project includes a series of unreleased tracks originally
              recorded during the 2021 album sessions. This version further enriches Tyler's narrative, offering new
              thematic and musical perspectives, with unreleased collaborations and consistently refined productions.
            </p>

            <h3>Tracklist (added tracks)</h3>
            <ol class="tracklist">
              <li>EVERYTHING MUST GO</li>
              <li>STUNTMAN (feat. Vince Staples)</li>
              <li>WHAT A DAY</li>
              <li>WHARF TALK (feat. A$AP Rocky)</li>
              <li>DOGTOOTH</li>
              <li>HEAVEN TO ME</li>
              <li>BOYFRIEND, GIRLFRIEND (2020 Demo) (feat. YG)</li>
              <li>SORRY NOT SORRY</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Album Details - Chromakopia -->
      <section class="album-detail" id="chromakopia">
        <div class="album-detail-container">
          <div class="album-cover">
            <img src="../static/images/chromakopia-cover.jpg" alt="Chromakopia album cover" loading="lazy">
          </div>

          <div class="album-info">
            <h2>Chromakopia</h2>
            <p class="year">2024</p>
            <p class="description">
              <strong>Chromakopia</strong> is Tyler, The Creator's eighth studio album, released on October 28, 2024. This
              project follows the success of <em>Call Me If You Get Lost</em> and represents a further evolution in the
              versatile artist's creative journey. The album, entirely written, produced, and arranged by Tyler himself,
              explores themes related to his childhood and growth, offering a rich sound that blends hip-hop, R&B, and jazz
              elements, with standout collaborations including Daniel Caesar, Lil Wayne, ScHoolboy Q, and Santigold.
            </p>

            <h3>Tracklist</h3>
            <ol class="tracklist">
              <li>ST. CHROMA (feat. Daniel Caesar)</li>
              <li>RAH TAH TAH</li>
              <li>NOID</li>
              <li>DARLING, I (feat. Teezo Touchdown)</li>
              <li>HEY JANE</li>
              <li>I KILLED YOU</li>
              <li>JUDGE JUDY</li>
              <li>STICKY (feat. GloRilla, Sexyy Red & Lil Wayne)</li>
              <li>TAKE YOUR MASK OFF (feat. Daniel Caesar & LaToiya Williams)</li>
              <li>TOMORROW</li>
              <li>THOUGHT I WAS DEAD (feat. ScHoolboy Q & Santigold)</li>
              <li>LIKE HIM (feat. Lola Young)</li>
              <li>BALLOON (feat. Doechii)</li>
              <li>I HOPE YOU FIND YOUR WAY HOME</li>
            </ol>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-logo">
            <a href="#">Tyler, The Creator</a>
          </div>

          <nav class="footer-nav">
            <ul>
              <li><a href="#music">Music</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#tour">Tour</a></li>
              <li><a href="#merch">Merch</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>

          <div class="footer-social">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Tyler, The Creator. All rights reserved.</p>
        </div>
      </footer>

    </body>

    </html>
  ```

  - Now, create the `scripts` folders where all the JavaScript file will be.

    + Inside of it write the necessary file for the project:

The Module: `helper.js`

  ```js
  /**
   * @file helper.js
   * @author Jacopo Dell'Oste
   * 
   * @description
   * This module provides a function to toggle album details on a webpage.
   * When a user clicks on an album link in the list, it displays the corresponding
   * album detail section and hides the others. The displayed section scrolls into view smoothly.
   */

  /**
   * Sets up click event listeners for album links to toggle
   * the display of their corresponding album detail sections.
   * @returns {void}
   */
  function setupAlbumToggle() {
    /**
     * List of album links in the album list.
     * @type {NodeListOf<HTMLLIElement>}
     */
    const albumLinks = document.querySelectorAll(".album-list li");

    /**
     * List of album detail sections.
     * @type {NodeListOf<HTMLElement>}
     */
    const albumSections = document.querySelectorAll(".album-detail");

    if (!albumLinks.length || !albumSections.length) return;

    albumLinks.forEach(link => {

      link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("data-album");

        albumSections.forEach(section => section.classList.remove("active"));

        const targetSection = document.getElementById(targetId);

        if (targetSection) {

          targetSection.classList.add("active");

          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  export default setupAlbumToggle;
  ```

The Script: `main.js`

  ```js
  /**
   * @file main.js
   * @author Jacopo Dell'Oste
   * 
   * @description
   * Entry point for the album toggle functionality.
   * It imports the required styles and initializes the album toggle
   * behavior once the DOM content is fully loaded.
   */

  import setupAlbumToggle from './helper.js';

  // Import the styles
  import '../styles/style.scss';

  /**
   * Initialize the album toggle functionality when the DOM is ready.
   */
  document.addEventListener('DOMContentLoaded', () => {
    setupAlbumToggle();
  });
  ```

  - Now, create the `styles` folders where all the SCSS file will be.

    + Inside of it write the necessary file for the project:

  ```scss
  /**
  * style.scss
  *
  * This stylesheet defines the layout and styling for a Tyler, The Creator showcase site.  
  * It uses SCSS features like variables, mixins, and nesting to create a bold,  
  * music-themed design system. It includes navigation, hero, about, albums, and footer  
  * sections, with responsive breakpoints and interactive hover effects.
  *
  * Key features:
  * - Centralized design tokens (colors, spacing, typography, breakpoints).
  * - Mixins for reusable transitions, shadows, gradient text, and hover effects.
  * - Responsive layout adjustments for mobile, tablet, and desktop.
  * - Section-specific styling with a cohesive aesthetic.
  */

  // ===========================
  // VARIABLES
  // ===========================

  /* Color palette: bold pinks, blues, and golds */
  $primary-color: #f72585;           // Hot pink - signature bold style
  $primary-hover-color: #d00467;     // Darker pink for hover states
  $secondary-color: #4361ee;         // Electric blue for accents
  $accent-color: #ffd23f;            // Golden yellow for highlights

  /* Background colors */
  $bg-primary: #0d1b2a;             // Deep navy - main background
  $bg-secondary: #1b263b;           // Slightly lighter navy
  $bg-card: #212529;                // Dark gray for cards/sections

  /* Text colors */
  $text-primary: #ffffff;           // Pure white
  $text-secondary: #e9ecef;         // Light gray
  $text-muted: #adb5bd;             // Medium gray for subdued text
  $text-accent: $accent-color;      // Accent yellow for special emphasis

  /* UI colors */
  $border-color: #495057;           // Borders and dividers
  $shadow-color: rgba(0, 0, 0, 0.3); // Strong shadows
  $overlay-color: rgba(13, 27, 42, 0.8); // Dark overlay for depth

  /* Animation and transitions */
  $transition-speed: 0.3s;
  $transition-easing: cubic-bezier(0.4, 0, 0.2, 1);

  /* Typography sizes */
  $font-size-xl: 3rem;
  $font-size-lg: 2rem;
  $font-size-md: 1.5rem;
  $font-size-base: 1rem;
  $font-size-sm: 0.95rem;
  $font-size-xs: 0.85rem;

  /* Spacing scale */
  $spacing-xs: 0.5rem;
  $spacing-sm: 0.75rem;
  $spacing-base: 1rem;
  $spacing-md: 1.5rem;
  $spacing-lg: 2rem;
  $spacing-xl: 3rem;

  /* Breakpoints */
  $mobile: 768px;
  $tablet: 1024px;
  $desktop: 1200px;

  // ===========================
  // GLOBAL STYLES
  // ===========================

  /* Box model consistency */
  * {
    box-sizing: border-box;
  }

  /* Base body styles */
  body {
    background-color: $bg-primary;
    color: $text-primary;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }

  // ===========================
  // MIXINS
  // ===========================

  /* Reusable transition with timing/easing */
  @mixin transition($properties...) {
    transition: #{$properties} $transition-speed $transition-easing;
  }

  /* Hover effect: color change + slight lift */
  @mixin hover-effect($color: $primary-color) {
    @include transition(color, transform);
    
    &:hover {
      color: $color;
      transform: translateY(-2px);
    }
  }

  /* Depth shadow for cards */
  @mixin card-shadow {
    box-shadow: 0 4px 12px $shadow-color, 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Gradient-filled text */
  @mixin gradient-text {
    background: linear-gradient(45deg, $primary-color, $secondary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  // ===========================
  // NAVIGATION
  // ===========================

  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    background: linear-gradient(135deg, $bg-secondary 0%, $bg-card 100%);
    backdrop-filter: blur(10px);
    padding: $spacing-sm $spacing-base;
    border-bottom: 1px solid $border-color;

    .navbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: $desktop;
      margin: 0 auto;
      width: 100%;
    }

    .logo {
      color: $text-primary;
      font-size: 1.6rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: 1px;
      @include gradient-text;
      @include transition(transform);

      &:hover {
        transform: scale(1.05);
      }
    }

    /* Navigation links */
    .tyler-nav {
      ul {
        display: flex;
        gap: $spacing-lg;
        list-style: none;
        margin: 0;
        padding: 0;

        li a {
          text-decoration: none;
          color: $text-secondary;
          font-weight: 500;
          font-size: $font-size-base;
          position: relative;
          @include transition(color);

          /* Underline hover effect */
          &::after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, $primary-color, $secondary-color);
            @include transition(width);
          }

          &:hover {
            color: $primary-color;

            &::after {
              width: 100%;
            }
          }
        }
      }
    }

    /* Hamburger menu (mobile only) */
    .nav-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.8rem;
      color: $text-primary;
      cursor: pointer;
      @include transition(color);

      &:hover {
        color: $primary-color;
      }
    }

    /* Mobile breakpoint: collapsible nav */
    @media (max-width: $mobile) {
      .tyler-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: $bg-card;
        border-bottom: 1px solid $border-color;

        &.active {
          display: block;
          
          ul {
            flex-direction: column;
            gap: $spacing-base;
            padding: $spacing-base;
          }
        }
      }

      .nav-toggle {
        display: block;
      }
    }
  }

  // ===========================
  // HERO SECTION
  // ===========================

  .hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text-primary;
    text-align: center;
    padding: $spacing-lg;
    overflow: hidden;
    background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 50%, $bg-card 100%);

    /* Overlay effect */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(ellipse at center, transparent 0%, $overlay-color 70%);
      z-index: 1;
    }

    .hero-text {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: $spacing-md;

      h1 {
        font-size: $font-size-xl;
        font-weight: 700;
        margin: 0;
        @include gradient-text;
        text-shadow: 0 2px 4px $shadow-color;
      }

      h2 {
        font-size: $font-size-md;
        font-weight: 400;
        max-width: 600px;
        margin: 0 auto;
        color: $text-secondary;
      }

      .cta-btn {
        margin-top: $spacing-base;
        padding: $spacing-sm $spacing-md;
        background: linear-gradient(45deg, $primary-color, $secondary-color);
        color: $text-primary;
        text-decoration: none;
        font-weight: 600;
        border-radius: 8px;
        border: 2px solid transparent;
        align-self: center;
        @include transition(all);
        @include card-shadow;

        &:hover {
          background: linear-gradient(45deg, $primary-hover-color, $primary-color);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba($primary-color, 0.4);
        }
      }
    }

    /* Mobile scaling */
    @media (max-width: $mobile) {
      .hero-text {
        h1 { font-size: 2.2rem; }
        h2 { font-size: 1.2rem; }
      }
    }
  }

  // ===========================
  // ABOUT SECTION
  // ===========================

  .about-tyler {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: $spacing-lg;
    padding: $spacing-xl $spacing-lg;
    background: $bg-secondary;
    color: $text-primary;

    .about-image {
      flex: 1 1 300px;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 16px;
        @include card-shadow;
        @include transition(transform);

        &:hover {
          transform: scale(1.02);
        }
      }
    }

    .about-text {
      flex: 1 1 300px;

      h2 {
        text-align: center;
        font-size: $font-size-lg;
        margin-bottom: $spacing-base;
        @include gradient-text;
      }

      p {
        text-align: justify;
        font-size: $font-size-base;
        line-height: 1.7;
        padding: $spacing-base 0;
        color: $text-secondary;
      }
    }
  }

  // ===========================
  // ALBUMS SECTION
  // ===========================

  .tyler-albums {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $spacing-xl $spacing-lg;
    flex-direction: column;
    background: $bg-primary;
    color: $text-primary;

    h2 {
      text-align: center;
      font-size: $font-size-lg;
      margin-bottom: $spacing-md;
      @include gradient-text;
    }

    .albums-container {
      max-width: 800px;
      width: 100%;
    }

    .album-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;

      li {
        text-align: center;
        font-size: 1.1rem;
        padding: $spacing-xs;
        border-radius: 8px;
        @include transition(background-color);

        &:hover {
          background-color: rgba($primary-color, 0.1);
        }

        a.album-title {
          color: $text-secondary;
          text-decoration: none;
          font-weight: 600;
          @include hover-effect($accent-color);
        }
      }
    }
  }

  // ===========================
  // ALBUM DETAILS
  // ===========================

  .album-detail {
    display: none;
    padding: $spacing-xl $spacing-lg;
    background: $bg-secondary;
    color: $text-primary;

    &.active {
      display: block;
    }

    .album-detail-container {
      display: flex;
      flex-direction: column;
      gap: $spacing-lg;
      max-width: 1000px;
      margin: 0 auto;

      @media (min-width: $mobile) {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    .album-cover {
      flex: 1;
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 16px;
        @include card-shadow;
        @include transition(transform);

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .album-info {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: $spacing-base;

      h2 {
        font-size: $font-size-lg;
        margin: 0;
        @include gradient-text;
      }

      .year {
        font-size: $font-size-base;
        color: $text-muted;
        font-style: italic;
        font-weight: 500;
      }

      .description {
        font-size: $font-size-base;
        line-height: 1.7;
        color: $text-secondary;

        strong {
          color: $accent-color;
          font-weight: 600;
        }

        em {
          color: $primary-color;
          font-style: normal;
          font-weight: 500;
        }
      }

      h3 {
        font-size: $font-size-md;
        margin-top: $spacing-base;
        border-bottom: 3px solid $primary-color;
        background: linear-gradient(90deg, $primary-color, $secondary-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding-bottom: 0.25rem;
        width: fit-content;
      }

      .tracklist {
        padding-left: $spacing-md;
        list-style-type: decimal;
        font-size: $font-size-base;
        line-height: 1.6;

        li {
          margin-bottom: $spacing-xs;
          color: $text-secondary;
          @include transition(color);

          &:hover {
            color: $accent-color;
          }
        }
      }
    }
  }

  // ===========================
  // FOOTER
  // ===========================

  .site-footer {
    background: linear-gradient(135deg, $bg-card 0%, $bg-secondary 100%);
    color: $text-secondary;
    padding: $spacing-lg $spacing-md $spacing-base;
    font-size: $font-size-sm;
    border-top: 1px solid $border-color;

    .footer-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: $spacing-lg;
      max-width: $desktop;
      margin: 0 auto;
      border-bottom: 1px solid $border-color;
      padding-bottom: $spacing-base;

      .footer-logo a {
        color: $text-primary;
        font-size: $font-size-md;
        font-weight: 700;
        text-decoration: none;
        @include gradient-text;
        @include transition(transform);

        &:hover {
          transform: scale(1.05);
        }
      }

      .footer-nav ul {
        display: flex;
        gap: $spacing-md;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;

        li a {
          color: $text-muted;
          text-decoration: none;
          @include hover-effect($accent-color);
        }
      }

      .footer-social {
        display: flex;
        gap: $spacing-base;

        a {
          font-size: 1.3rem;
          color: $text-muted;
          @include transition(color, transform);

          &:hover {
            color: $primary-color;
            transform: scale(1.2);
          }
        }
      }
    }

    .footer-bottom {
      text-align: center;
      margin-top: $spacing-base;
      color: $text-muted;
      font-size: $font-size-xs;
    }

    @media (max-width: $mobile) {
      .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }
  ```    

    + **IMPORTANT!** The CSS files will be imported By the JavaScript file, so it\\'s not needed to link it in the `index.html`.

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`.

  - See the Result.

