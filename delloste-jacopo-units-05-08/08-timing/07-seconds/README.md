# Seconds

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Write two functions that based on the current date and time output the number
of seconds:

- getSecondsToday() returns the number of seconds from the beginning of
today

- getSecondsToTomorrow() returns the number of seconds till tomorrow

### Solution Step-by-Step

1. Create the  `07-seconds` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `07-seconds` directory

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
        <title>Seconds</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Seconds</h1>
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
    * Seconds
    *
    * this file contains two functions, one called 'getSecondsToday'
    *  and the other is called 'getSecondsToTomorrow':
    *
    * getSecondsToday() returns the seconds of the day
    * getSecondsToTomorrow() returns the seconds to tomorrow
    *
    */

    /**
    * returns the seconds of the day
    * @returns {number}
    */
    function getSecondsToday() {
        let date = new Date();

        let secondsToday = 0;

        secondsToday += date.getHours() * 3600;
        secondsToday += date.getMinutes() * 60;
        secondsToday += date.getSeconds();

        return secondsToday;
    }

    /**
    * returns the seconds to tomorrow 
    * @returns {number}
    */
    function getSecondsToTomorrow() {
        let date = new Date();

        let secondsTomorrow = 0;

        secondsTomorrow +=  ( 24 - date.getHours()) * 3600;
        secondsTomorrow +=  (60 - date.getMinutes()) * 60;
        secondsTomorrow += 60 - date.getSeconds();

        return secondsTomorrow;
    }

    console.log(getSecondsToday());
    console.log(getSecondsToTomorrow());
    ```

5. Check The Result using the DevTool Console of the Browser
