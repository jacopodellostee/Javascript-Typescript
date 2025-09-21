# Greatest Hits - Credit Card Validator (Bonus)

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

#### This directory contains the solution of the 'Credit Card Validator' Exercise using Webpack

### Solution Step-by-Step

1.  **Webpack Project Setup**
  
Create a new folder `credit-card-validator`.
  
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
    "name": "credit-card-validator",
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
     * Provides credit card validation utilities:
     * - Validate a single card.
     * - Validate multiple cards in parallel.
     * - Pretty-print results in a boxed format.
     */

    const creditCardUtils = {
    /**
     * Validation rules constants.
     * @readonly
     * @enum {number}
     */
    VALIDATION_RULES: {
        REQUIRED_LENGTH: 16,
        MIN_SUM: 16,
        MIN_UNIQUE_DIGITS: 2
    },

    /**
     * Human-readable error messages.
     * @readonly
     * @enum {string}
     */
    ERROR_MESSAGES: {
        invalid_characters: "invalid characters",
        final_digit_not_even: "odd final number",
        sum_not_greater_16: "sum less than 16",
        only_one_digit: "only one type of number",
        wrong_length: "wrong length"
    },

    /**
     * Validates a credit card number based on predefined rules.
     *
     * @async
     * @param {string} [creditCard=""] - The credit card number to validate (dashes allowed).
     * @returns {Promise<Object>} Validation result object.
     */
    validateCreditCard: async (creditCard = "") => {
        const normalizedCard = creditCard?.replace(/-/g, "") ?? "";
        const { REQUIRED_LENGTH, MIN_SUM, MIN_UNIQUE_DIGITS } =
        creditCardUtils.VALIDATION_RULES;

        let result = {
        valid: true,
        number: creditCard
        };

        try {
        const isValidFormat = /^\d{16}$/gm.test(normalizedCard);

        if (!isValidFormat) {
            const error =
            normalizedCard.length !== REQUIRED_LENGTH
                ? "wrong_length"
                : "invalid_characters";

            return { ...result, valid: false, error };
        }

        const digits = [...normalizedCard].map((digit) => parseInt(digit, 10));

        const lastDigit = digits?.[digits.length - 1] ?? 0;
        if (lastDigit % 2 !== 0) {
            return { ...result, valid: false, error: "final_digit_not_even" };
        }

        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        if (sum <= MIN_SUM) {
            return { ...result, valid: false, error: "sum_not_greater_16" };
        }

        const uniqueDigits = new Set(digits);
        if (uniqueDigits.size < MIN_UNIQUE_DIGITS) {
            return { ...result, valid: false, error: "only_one_digit" };
        }

        return result;
        } catch (error) {
        return {
            ...result,
            valid: false,
            error: "validation_error",
            details: error?.message ?? "Unknown error"
        };
        }
    },

    /**
     * Prints the validation result in a formatted box style.
     *
     * @param {Object} [result={}] - Validation result object.
     * @param {Object} [options={}] - Printing options.
     * @returns {void}
     */
    printResult: (
        { valid, number, error, details } = {},
        { borderChar = "=", width = 32 } = {}
    ) => {
        const border = borderChar.repeat(width);

        const formatLine = (label, value) => {
        const content = `${label} : ${value}`;
        const padding = width - content.length - 4;
        return `${borderChar} ${content}${" ".repeat(
            Math.max(0, padding)
        )} ${borderChar}`;
        };

        console.log(border);
        console.log(formatLine("number", number ?? "N/A"));
        console.log(formatLine("valid", valid ?? false));

        if (!valid && error) {
        const errorMessage = creditCardUtils.ERROR_MESSAGES[error] ?? error;
        console.log(formatLine("error", errorMessage));
        }

        if (details) {
        console.log(formatLine("details", details));
        }

        console.log(border);
    },

    /**
     * Validates multiple credit cards asynchronously in parallel.
     *
     * @async
     * @param {string[]} [creditCards=[]] - Array of credit card numbers.
     * @returns {Promise<Object[]>} Array of validation results.
     */
    validateMultipleCards: async (creditCards = []) => {
        const validations = creditCards.map((card) =>
        creditCardUtils.validateCreditCard(card)
        );
        return await Promise.all(validations);
    }
    };

    export default creditCardUtils;
  ```

The Script: `main.js`

  ```js
    /**
     * @file main.js
     * @author Jacopo Dell'Oste
     * 
     * @description
     * Entry point for the credit card validator application. 
     * Demonstrates validation of a set of test card numbers
     * using the helper module.
     */

    import creditCardUtils from "./helper.js";

    async function main() {
    const testCards = [
        "9999-9999-8888-0000",
        "9169-9239-4458-9712",
        "a923-3211-9c01-1112",
        "6666-6666-6666-6661",
        "1111-1111-1111-1110",
        "4444-4444-4444-4444",
        "6666-6666-6666-1666"
    ];

    try {
        const results = await creditCardUtils.validateMultipleCards(testCards);
        results.forEach((result) => {
        creditCardUtils.printResult(result);
        });
    } catch (error) {
        console.error(
        "Validation failed:",
        error?.message ?? "Unknown error"
        );
    }
    }

    main();
  ```

3.  **Check The Result**

  - Start the development server with `npm run dev`.

  - Open the browser at `http://localhost:8080`

  - See the Result
