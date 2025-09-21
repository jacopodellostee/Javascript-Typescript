# Greatest Hits - Reduce All (Bonus)

**Author**: Jacopo Dell'Oste

### Request From The Client

**Task**:

- Rewrite some previous exercises in modern JS syntax

  - Credit Card Validation

  - Advanced Arrivals

  - Reduce All

- Try to use as many modern features as you can

- In `README.md` document any important changes

**Bonus**:

- Use webpack, make your code compatible with older browsers

#### This directory contains the solution of the 'Reduce All' Exercise using Webpack

### Solution Step-by-Step

1.  **Webpack Project Setup**
  
Create a new folder `reduce-all`
  
Initialize a new Node.js project 
  
    `npm init -y`.
  
Install Webpack and the necessary loaders using 
  
    `npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env css-loader style-loader --save-dev`

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
      output: { filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist') },
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
              { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
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
  };
  ```

Add scripts in the **`package.json`** file to start the development server and build the project.

  ```json
    {
    "name": "reduce-all",
    "version": "1.0.0",
    "main": "webpack.config.js",
    "scripts": {
        "dev": "webpack serve --mode development",
        "build": "webpack --mode production"
    },
    "keywords": [],
    "author": "Jacopo Dell'Oste",
    "license": "ISC",
    "description": "",
    "devDependencies": {
        "@babel/core": "^7.28.0",
        "@babel/preset-env": "^7.28.0",
        "babel-loader": "^10.0.0",
        "css-loader": "^7.1.2",
        "css-minimizer-webpack-plugin": "^7.0.2",
        "html-webpack-plugin": "^5.6.3",
        "mini-css-extract-plugin": "^2.9.2",
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

Here you can also see the dependecies of the project

2. **The Code**

- Create the directory `src` where all the code will be

  + Inside of it, create the `index.html` file and write the code

  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Il mio primo sito web">
        <meta name="author" content="Jacopo Dell'Oste">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gratest Hits - Credit Card Validator</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Gratest Hits - Credit Card Validator</h1>
        <p>open the console (F12) to see the output</p>
        
        <!-- End of The Body -->
    </body>
    </html>
  ```

  - Now, create the `scripts` folders where all the JavaScript file will be

    + Inside of it write the necessary file for the project:

The Module: `helper.js`

  ```js
    /**
     * @file helper.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Provides custom asynchronous implementations of common array methods:
     * - forEach, map, filter, indexOf, slice
     * Using modern ES6+ syntax and async/await.
     */

    const asyncArrayUtils = {
    /**
     * Asynchronous version of `Array.forEach`.
     * @async
     * @param {Array} [array=[]] - Array to iterate.
     * @param {function(*, number, Array): Promise<void>} [callback=async()=>{}] - Async callback.
     * @returns {Promise<void>}
     */
    myForEach: async (array = [], callback = async () => {}) => {
        for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
        }
    },

    /**
     * Asynchronous version of `Array.map`.
     * @async
     * @param {Array} [array=[]] - Array to map.
     * @param {function(*, number, Array): Promise<*>} [callback=async()=>{}] - Async mapping function.
     * @returns {Promise<Array>} Mapped array.
     */
    myMap: async (array = [], callback = async () => {}) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
        result.push(await callback(array[i], i, array));
        }
        return result;
    },

    /**
     * Asynchronous version of `Array.filter`.
     * @async
     * @param {Array} [array=[]] - Array to filter.
     * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>{}] - Async predicate.
     * @returns {Promise<Array>} Filtered array.
     */
    myFilter: async (array = [], callback = async () => {}) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
        if (await callback(array[i], i, array)) result.push(array[i]);
        }
        return result;
    },

    /**
     * Asynchronous version of `Array.findIndex`.
     * @async
     * @param {Array} [array=[]] - Array to search.
     * @param {function(*, number, Array): Promise<boolean>} [callback=async()=>false] - Async predicate.
     * @returns {Promise<number>} Index of first matching element or -1.
     */
    myIndexOf: async (array = [], callback = async () => false) => {
        for (let i = 0; i < array.length; i++) {
        if (await callback(array[i], i, array)) return i;
        }
        return -1;
    },

    /**
     * Asynchronous version of `Array.slice`.
     * @async
     * @param {Array} [array=[]] - Array to slice.
     * @param {number} [start=0] - Start index (inclusive).
     * @param {number} [end=array.length] - End index (exclusive).
     * @returns {Promise<Array>} Sliced array.
     */
    mySlice: async (array = [], start = 0, end = array.length) => {
        const len = array.length;
        start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
        end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

        const result = [];
        for (let i = start; i < end; i++) result.push(array[i]);
        return result;
    }
    };

    export default asyncArrayUtils;
  ```

The Script: `main.js`

  ```js
    /**
     * @file main.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Demonstrates usage of asynchronous array utility functions
     * alongside native JavaScript array methods.
     */

    import asyncArrayUtils from "./helper.js";

    /**
     * A set of test arrays to demonstrate native and async array methods.
     * @type {number[][]}
     */
    const testGroup = [
    [1, 2, 3, 4, 5],
    [0, 0, 3, 4, 5],
    [7, 0, 9, 74, 85, 1, 42, 3, 88]
    ];

    /**
     * Main demonstration function.
     * Runs native array methods and their asynchronous counterparts side by side,
     * printing results to the console for comparison.
     *
     * @async
     * @function main
     * @returns {Promise<void>} Resolves when demonstrations are complete.
     */
    async function main() {
    
    console.log("==== Array.forEach() ====");
    testGroup.forEach((arr) =>
        arr.forEach((num) => console.log(num))
    );

    console.log("==== myForEach ====");
    await asyncArrayUtils.myForEach(testGroup, async (arr) =>
        asyncArrayUtils.myForEach(arr, async (num) => console.log(num))
    );

    console.log("==== Array.map() ====");
    testGroup.forEach((arr) =>
        console.log(arr.map((num) => num * 2))
    );

    console.log("==== myMap ====");
    for (const arr of testGroup) {
        /** 
         * @type {number[]} 
         */
        const mapped = await asyncArrayUtils.myMap(arr, async (num) => num * 2);
        console.log(mapped);
    }

    console.log("==== Array.filter() ====");
    testGroup.forEach((arr) =>
        console.log(arr.filter((num) => num % 2 === 0))
    );

    console.log("==== myFilter ====");
    for (const arr of testGroup) {
        /** 
         * @type {number[]} 
         */
        const filtered = await asyncArrayUtils.myFilter(arr, async (num) => num % 2 === 0);
        console.log(filtered);
    }

    console.log("==== Array.indexOf() ====");
    testGroup.forEach((arr) => console.log(arr.indexOf(4)));

    console.log("==== myIndexOf ====");
    for (const arr of testGroup) {
        /** 
         * @type {number} 
         */
        const idx = await asyncArrayUtils.myIndexOf(arr, async (num) => num === 4);
        console.log(idx);
    }

    console.log("==== Array.slice() ====");
    testGroup.forEach((arr) => console.log(arr.slice(2)));

    console.log("==== mySlice ====");
    for (const arr of testGroup) {
        /** 
         * @type {number[]}
         */
        const sliced = await asyncArrayUtils.mySlice(arr, 2);
        console.log(sliced);
    }
    }

    /** Execute the main demonstration */
    main();
  ```

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`

  - See the Result
