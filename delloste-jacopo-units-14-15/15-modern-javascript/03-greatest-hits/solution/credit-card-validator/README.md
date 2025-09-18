# Enhanced Arrivals - Credit Card Validation

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

#### This directory contains the solution of the 'Credit Card Validation' Exercise Without Webpack

### Solution Step-by-Step

1. Create the  `credit-card-validator` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `credit-card-validator` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

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
        <title>Gratest Hits - Credit Card Validator</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Gratest Hits - Credit Card Validator</h1>
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
    * This script validates credit card numbers based on specific rules and prints the results
    * in a formatted way. A credit card is considered valid if:
    * - It contains only digits and has exactly 16 characters.
    * - Its last digit is even.
    * - The sum of its digits is greater than 16.
    * - It contains at least two different unique digits.
    *
    * Functions:
    * - `validateCreditCard`: Validates a single credit card string asynchronously.
    * - `printResult`: Prints a formatted validation result to the console.
    * - `validateMultipleCards`: Validates multiple cards in parallel.
    * - `main`: Demonstrates validation with a set of test card numbers.
    */

    /**
    * Validation rules constants.
    * @readonly
    * @enum {number}
    */
    const VALIDATION_RULES = {
    REQUIRED_LENGTH: 16,
    MIN_SUM: 16,
    MIN_UNIQUE_DIGITS: 2
    };

    /**
    * Human-readable error messages.
    * @readonly
    * @enum {string}
    */
    const ERROR_MESSAGES = {
    invalid_characters: 'invalid characters',
    final_digit_not_even: 'odd final number', 
    sum_not_greater_16: 'sum less than 16',
    only_one_digit: 'only one type of number',
    wrong_length: 'wrong length'
    };

    /**
    * Validates a credit card number based on predefined rules.
    *
    * @async
    * @param {string} [creditCard=''] - The credit card number to validate (dashes allowed).
    * @returns {Promise<Object>} Validation result object:
    * - {boolean} valid - Whether the card is valid.
    * - {string} number - The original credit card number.
    * - {string} [error] - The error code if invalid.
    * - {string} [details] - Extra error details in case of unexpected error.
    */
    const validateCreditCard = async (creditCard = '') => {

    const normalizedCard = creditCard?.replace(/-/g, '') ?? '';

    const { REQUIRED_LENGTH, MIN_SUM, MIN_UNIQUE_DIGITS } = VALIDATION_RULES;

    let result = { 
        valid: true, 
        number: creditCard 
    };

    try {

        const isValidFormat = /^\d{16}$/gm.test(normalizedCard);

        if (!isValidFormat) {

        const error = normalizedCard.length !== REQUIRED_LENGTH ? 'wrong_length' : 'invalid_characters';

        return { ...result, valid: false, error };
        }

        const digits = [...normalizedCard].map(digit => parseInt(digit, 10));

        const lastDigit = digits?.[digits.length - 1] ?? 0;

        if (lastDigit % 2 !== 0) {
        return { ...result, valid: false, error: 'final_digit_not_even' };
        }

        const sum = digits.reduce((acc, digit) => acc + digit, 0);

        if (sum <= MIN_SUM) {
        return { ...result, valid: false, error: 'sum_not_greater_16' };
        }

        const uniqueDigits = new Set(digits);

        if (uniqueDigits.size < MIN_UNIQUE_DIGITS) {
        return { ...result, valid: false, error: 'only_one_digit' };
        }

        return result;

    } catch (error) {

        return { 
        ...result, 
        valid: false, 
        error: 'validation_error',
        details: error?.message ?? 'Unknown error'
        };
    }
    };

    /**
    * Prints the validation result in a formatted box style.
    *
    * @param {Object} [result={}] - Validation result object.
    * @param {boolean} result.valid - Whether the card is valid.
    * @param {string} result.number - The original credit card number.
    * @param {string} [result.error] - Error code if invalid.
    * @param {string} [result.details] - Extra error details if any.
    * @param {Object} [options={}] - Printing options.
    * @param {string} [options.borderChar='='] - Character used for the border.
    * @param {number} [options.width=32] - Width of the box.
    * @returns {void}
    */
    const printResult = ({ valid, number, error, details } = {}, { borderChar = '=', width = 32 } = {}) => {

    const border = borderChar.repeat(width);

    const formatLine = (label, value) => {

        const content = `${label} : ${value}`;

        const padding = width - content.length - 4;

        return `${borderChar} ${content}${' '.repeat(Math.max(0, padding))} ${borderChar}`;
    };

    console.log(border);

    console.log(formatLine('number', number ?? 'N/A'));

    console.log(formatLine('valid', valid ?? false));

    if (!valid && error) {
        const errorMessage = ERROR_MESSAGES[error] ?? error;
        console.log(formatLine('error', errorMessage));
    }

    if (details) {
        console.log(formatLine('details', details));
    }

    console.log(border);
    };

    /**
    * Validates multiple credit cards asynchronously in parallel.
    *
    * @async
    * @param {string[]} [creditCards=[]] - Array of credit card numbers.
    * @returns {Promise<Object[]>} Array of validation result objects.
    */
    const validateMultipleCards = async (creditCards = []) => {
    const validations = creditCards.map(card => validateCreditCard(card));
    return await Promise.all(validations);
    };

    /**
    * Main function demonstrating validation of several test credit card numbers.
    *
    * @async
    * @returns {Promise<void>} Resolves when done.
    */
    async function main () {
    const testCards = [
        '9999-9999-8888-0000',
        '9169-9239-4458-9712', 
        'a923-3211-9c01-1112',
        '6666-6666-6666-6661',
        '1111-1111-1111-1110',
        '4444-4444-4444-4444',
        '6666-6666-6666-1666'
    ];

    try {
        const results = await validateMultipleCards(testCards);
        results.forEach(result => {
        printResult(result);
        });
    } catch (error) {
        console.error('Validation failed:', error?.message ?? 'Unknown error');
    }
    };

    main();
    ```

5. Check The Result using the DevTool Console of the Browser

### Key Difference

| Feature | Traditional Syntax | Modern (ES6+) Syntax | Description of Change |
|---|---|---|---|
| **Function Declaration** | `function validateCreditCard(...) { ... }` | `const validateCreditCard = async (...) => { ... };` | Transition from `function` declarations to **arrow functions** (`=>`) and `const` declarations for functions. The modern version also introduces `async` for asynchronous operations. |
| **Variable Declaration** | `let cardValid = true;` `let error = "";` | `let result = { valid: true, number: creditCard };` | Consistent use of `const` for variables that are not reassigned (e.g., `VALIDATION_RULES`, `ERROR_MESSAGES`) and `let` for those that are. This improves code clarity and prevents accidental reassignments. |
| **String Literals (Template Literals)** | Concatenation with `+` and manual string formatting (e.g., `console.log(`= number : ${result.number} =`);`) | Template literals using backticks (`` ` ``) for multi-line strings and embedded expressions (e.g., `const content = `${label} : ${value}`;`). | This significantly improves readability for complex string constructions and dynamic output. |
| **Object Destructuring** | Accessing properties directly (e.g., `result.valid`, `result.number`) | `const { valid, number, error, details } = result;` | **Object destructuring** allows extracting properties from objects into distinct variables, making code more concise and readable, especially when using multiple properties from an object. |
| **Optional Chaining** | Not explicitly used; manual checks for `undefined` or `null` | `creditCard?.replace(/-/g, \'\') ?? \'\'` `digits?.[digits.length - 1] ?? 0` | **Optional chaining (`?.`)** provides a safer way to access properties of an object that might be `null` or `undefined` without causing an error, simplifying conditional checks and providing default values with nullish coalescing (`??`). |
| **Default Parameters** | Not explicitly used; parameters are assumed to be provided. | `const validateCreditCard = async (creditCard = \'\') => { ... };` `const printResult = ({ valid, number, error, details } = {}, { borderChar = \'=\', width = 32 } = {}) => { ... };` | **Default parameters** allow assigning predefined values to function parameters directly in their signature, making the code more robust and readable. |
| **Asynchronous Programming** | Synchronous execution; no explicit async handling. | `async/await` and `Promise.all` | Introduction of `async` and `await` for managing asynchronous operations, making the code non-blocking and easier to read. `Promise.all` is used to run multiple validations in parallel. |
| **Code Structure & Constants** | Magic strings and numbers used directly in logic. | `const VALIDATION_RULES = { ... };` `const ERROR_MESSAGES = { ... };` | Use of `const` for defining configuration objects and error messages, centralizing values and improving maintainability and readability. |
| **Array Methods** | Traditional `for` loop for sum, `Set` for unique digits. | `digits.map(digit => parseInt(digit, 10))` `digits.reduce((acc, digit) => acc + digit, 0)` | Modern array methods like `map` and `reduce` are used for more functional and concise data manipulation, replacing traditional `for` loops. |
| **Error Handling** | Simple `if/else` checks and direct `error` string assignment. | `try...catch` blocks for robust error handling, and structured error messages with `ERROR_MESSAGES` mapping. | More structured error handling with `try...catch` and predefined error messages improves the clarity and consistency of error reporting. |
