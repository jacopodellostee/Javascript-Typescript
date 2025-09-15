# Bundler Showcase

**Author**: Jacopo Dell'Oste

### Client Request

Explore Parcel or another bundler of your choice

* Create a small project with HTML, CSS, and JavaScript files

* Use the bundler to build and serve your project

* Ensure the output is optimized and the project runs correctly on various browsers

* Include a README.md with a brief explanation of how the bundler handled your files and any notable features or issues

### Solution Step-by-Step

#### 1. **Vite Project Setup**

Create a new folder `bundler-showcase`.

Initialize a new Node.js project:

```bash
npm init -y
```

Install **Vite** as a dev dependency:

```bash
npm install vite --save-dev
```

Create a configuration file `vite.config.js` and paste the following:

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { minify } from 'html-minifier-terser';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      },
      output: {
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      },
      plugins: [
        {
          name: 'html-minify-advanced',
          async generateBundle(options, bundle) {
            for (const fileName of Object.keys(bundle)) {
              if (fileName.endsWith('.html')) {
                const htmlAsset = bundle[fileName];
                if (htmlAsset.type === 'asset' && typeof htmlAsset.source === 'string') {
                  try {
                    htmlAsset.source = await minify(htmlAsset.source, {
                      collapseWhitespace: true,
                      removeComments: true,
                      removeRedundantAttributes: true,
                      removeScriptTypeAttributes: true,
                      removeStyleLinkTypeAttributes: true,
                      useShortDoctype: true,
                      minifyCSS: true,
                      minifyJS: true,
                      removeEmptyAttributes: true,
                      removeAttributeQuotes: true,
                      collapseInlineTagWhitespace: true,
                      trimCustomFragments: true,
                      removeOptionalTags: false,
                      minifyCSS: { level: 2 },
                      minifyJS: {
                        compress: {
                          drop_console: true,
                          drop_debugger: true
                        },
                        mangle: true
                      }
                    });
                    console.log(`✓ HTML minificato: ${fileName}`);
                  } catch (error) {
                    console.warn(`⚠ Errore durante la minificazione di ${fileName}:`, error.message);
                  }
                }
              }
            }
          }
        }
      ]
    },
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari12']
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: []
    }
  },
  publicDir: '../static',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': resolve(__dirname, 'static/images')
    }
  }
});
```

Update the **`package.json`** with the following scripts:

```json
{
  "name": "03-bundler-showcase",
  "version": "1.0.0",
  "description": "",
  "main": "vite.config.js",
  "scripts": {
    "dev": "vite", // run the project in development mode
    "build": "vite build", // build the project for distibrution
    "preview": "vite preview"
  },
  "keywords": [],
  "author": "Jacopo Dell'Oste",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.28.0",
    "@babel/preset-env": "^7.28.0",
    "babel-loader": "^10.0.0",
    "css-loader": "^7.1.2",
    "html-minifier-terser": "^7.2.0",
    "mini-css-extract-plugin": "^2.9.2",
    "vite": "^7.0.5"
  },
  "dependencies": {
    "core-js": "^3.44.0"
  }
}
```

Here you can also see the dependecies of the project

#### 2. **The Code**

* Create a directory `src` where all the code will be.

Inside `src`, create the `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bundler Showcase (Vite)</title>
</head>
<body>
    <div class="card">
      <h1 class="card-title">Dad's Joke Generator</h1>
    <div class="card-body">
      <h2 class="card-text" id="joke">The Joke Will Appeare Here</h2>
      <p>P.S: If you find these joke funny, seek professional help</p>
      <a class="btn" id="btnJoke">Generate Joke</a>
    </div>
  </div>


  <!-- End of The Body-->
  <script type="module" src="./scripts/main.js"></script>
</body>
</html>
```

* Inside `src`, create a `scripts` folder for JavaScript files:

`main.js`

```js
/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the Dad Joke Fetcher app.
 * It handles fetching a random joke from the "icanhazdadjoke" API
 * and displays it in the DOM when the user clicks the "Get Joke" button.
 */

// Import the styles
import '../styles/style.css';

/**
 * Button element to fetch a new joke.
 * @type {HTMLButtonElement}
 */
let btnJoke = document.querySelector('#btnJoke');

/**
 * Container element where the fetched joke will be displayed.
 * @type {HTMLElement}
 */
let jokeContainer = document.querySelector('#joke');

/**
 * Fetches a random joke from the icanhazdadjoke API and updates the UI.
 * Triggered when the user clicks the joke button.
 * @returns {void}
 */
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
```

* Inside `src`, create a `styles` folder for CSS files:

`style.css`

```css
/**
 * style.css
 *
 * This stylesheet defines the layout and styling for the "Dad's Joke Generator"
 * application. It includes global resets, a gradient background, a card container,
 * styled headings, supporting text, and an interactive button. Animations provide
 * a smooth fade-in effect and hover feedback for interactivity.
 */

/* -----------------------------
   Typography & Reset
----------------------------- */

/* Import Google Fonts for consistent modern typography */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

/* Reset default browser styles and apply box model consistency */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* -----------------------------
   Layout & Background
----------------------------- */

/* Base body styling with centered content */
body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec); /* Soft gradient background */
  display: flex; /* Flexbox for perfect centering */
  justify-content: center;
  align-items: center;
  height: 100vh; /* Fill entire viewport */
  padding: 1rem;
}

/* -----------------------------
   Card Component
----------------------------- */

/* Main container for the app */
.card {
  max-width: 400px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); /* Depth effect */
  overflow: hidden;
  animation: fadeIn 0.4s ease-in-out; /* Smooth entrance */
  transition: transform 0.2s ease-in-out;
}

/* Slight lift effect when hovering the card */
.card:hover {
  transform: translateY(-4px);
}

/* Inner padding and content alignment */
.card-body {
  padding: 2rem;
  text-align: center;
}

/* -----------------------------
   Text Elements
----------------------------- */

/* Main title (h1): "Dad's Joke Generator" */
.card-title {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1rem;
}

/* Joke text (h2) */
.card-text {
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 1.25rem;
  min-height: 60px; /* Keeps space reserved even before joke loads */
}

/* Supporting text (p): disclaimer below the joke */
p {
  font-size: 0.875rem;
  color: #868e96;
  margin-bottom: 1.5rem;
}

/* -----------------------------
   Interactive Elements
----------------------------- */

/* Button (a#btnJoke): "Generate Joke" */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #0d6efd; /* Primary blue */
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s;
}

/* Hover effect: darker shade + scale */
.btn:hover {
  background-color: #0b5ed7;
  transform: scale(1.05);
}

/* -----------------------------
   Animations
----------------------------- */

/* Fade-in animation for initial card appearance */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); /* Starts slightly lower */
  }
  to { 
    opacity: 1; 
    transform: translateY(0); /* Settles into place */
  }
}
```

#### 3. **Check The Result**

* Start the development server:

```bash
npm run dev
```

Vite will open the browser at:

`http://localhost:3000`

* Build for production:

```bash
npm run build
```

The output will be inside the `dist/` folder with optimized, minified assets.

### Notes on Vite Bundling

* **Fast Dev Server**: Vite uses ES modules during development, so there’s almost no bundling overhead. Hot Module Replacement (HMR) is instantaneous.

* **Optimized Build**: In production, Vite uses **Rollup** to generate optimized bundles.

* **Aliasing**: Shortcuts like `@` for `src/` simplify imports.

* **Cross-Browser Support**: Configured with targets for Chrome, Firefox, Edge, and Safari.

* **Notable Feature**: Advanced **HTML minification** via `html-minifier-terser`, removing whitespace, comments, and unnecessary attributes.

⚠️ **Issues**:

* Vite requires a modern Node.js version (>= 14.18).

* Some older browsers may not support ES module imports unless polyfilled.


