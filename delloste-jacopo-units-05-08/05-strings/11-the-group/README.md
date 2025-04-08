# The group

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Use the previous function to write another function called group that checks whether a string is
part of another longer string that is a list of names of a group

The function should output the results to the console: 

- let group = "Mary, James, and John";

- let oldGuy = "James";

    + Outputs: "James IS part of the group"

- let newGuy = "Philip";

    + Outputs: "Philip is NOT part of the group"

### Solution Step-by-Step

1. Create the  `11-the-group` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `11-the-group` directory

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
        <title>The Group</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>The Group</h1>
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
    * The Group
    *
    * this file contain 2 functions, one called 'aContainsb' and the other called 'group'
    *  'aContainsb' return if the string 'a' contain the substring 'b'
    *  'group' use the previous function for tell if a guy is a member of a determinated gruop and print the result on the console
    */

    /**
    * return if a contains b
    * @param {string} a - the string 
    * @param {string} b - the substring
    * @returns {boolean}
    */
    function aContainsb(a, b) {
        return a.includes(b);
    }

    /**
    * print on the console if the guy is part of the group
    * @param {string} group - the gropu of friend
    * @param {string} guy - the guy selected
    * @returns {void}
    */
    function group(group, guy) {
        if(aContainsb(group, guy))
            console.log(guy + " IS part of the group");
        else
            console.log(guy + " is NOT part of the group");
    }

    group("Mary, James, and John", "James");
    group("Mary, James, and John", "Jacopo");
    ```

5. Check The Result using the DevTool Console of the Browser
