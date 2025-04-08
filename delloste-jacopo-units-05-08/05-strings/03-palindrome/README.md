# Palindrome

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Using your reverse() function from the previous exercise, write a simple function to check if a
string is a palindrome

- A palindrome is a word that reads the same backwards as forwards. For example, the word "madam"
is a palindrome

- Write a JavaScript function called isPalindrome which has one parameter, a string, and which
returns true if that string is a palindrome, else false

- For example, the call isPalindrome("madam") should return true, while isPalindrome("madame")
should return false

### Solution Step-by-Step

1. Create the  `03-palindrome` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `03-palindrome` directory

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
        <title>Palindrome</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Palindrome</h1>
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
    * @file: main.js
    * @author: Jacopo Dell'Oste
    * Palindrome
    *
    * this file contain 2 function: 
    *  the function 'reverse' that take one string in input and return the string reversed
    *  the fuction 'isPalindrome' that use the previus function for calculate whanever the selected string is palindrome or not
    * 
    */

    /**
    * return the reversed string 
    * @param {string} str - the string selected
    * @returns {void}
    */
    function reverse(str) {
        let newString = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newString += str.charAt(i);
        }

        return newString;
    }

    /**
    * return if a string is palindrome or not
    * @param {string} str - the string selected
    * @returns {boolean}
    */
    function isPalindrome(str){

        if(str == reverse(str))
            return true;
        else
            return false;
    }

    console.log(isPalindrome("anna"));
    console.log(isPalindrome("alice"));
    ```

5. Check The Result using the DevTool Console of the Browser
