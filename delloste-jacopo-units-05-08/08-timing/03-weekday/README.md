# Weekday

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Write a function getWeekDay(date) to show the weekday in short format: `‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’`

- Write another function that does the same in Italian

- Add a language parameter to the function that accepts ‘en’ or ‘it’ and
outputs the day in the correct language

### Solution Step-by-Step

1. Create the  `03-weekday` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `03-weekday` directory

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
        <title>Weekday</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Weekday</h1>
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
    * Weekday
    *
    * this file contain 3 function
    * 'getWeekDayEN' get the day of the date in english
    * 'getWeekDayIT' does the same in italian
    * 'getWeekDay' invoke the previous functions based 
    * on the language selected
    */

    /**
    * return the day in short format of the selected date in english 
    * @param {Date} date
    * @returns {string}
    */
    function getWeekDayEN(date) {

        let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

        return days[date.getDay() - 1];
    }

    /**
    * return the day in short format of the selected date in italian 
    * @param {Date} date
    * @returns {string}
    */
    function getWeekDayIT(date) {

        let days = ["LU", "MA", "ME", "GI", "VE", "SA", "DO"];

        return days[date.getDay() - 1];
    }


    /**
    * return the day in short format of the selected date 
    * in the selected language 
    * @param {Date} date
    * @param {string} language
    * @returns {string}
    */
    function getWeekDay(date, language) {
        if (language == "it") 
            return getWeekDayIT(date);
        else
            return getWeekDayEN(date);
    }

    let myDate = new Date("March 25 2025");

    console.log(getWeekDay(myDate, "it"));
    console.log(getWeekDay(myDate, "en"));
    ```

5. Check The Result using the DevTool Console of the Browser
