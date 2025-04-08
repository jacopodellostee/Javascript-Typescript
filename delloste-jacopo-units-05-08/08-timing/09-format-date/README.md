# Format date

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Write a function formatDate(date) that accepts a date and outputs it as follows:

- If less than a second has passed since the date, output "right now"

- If less than a minute has passed since the date, output "n sec. ago"

- If less than an hour has passed since the date, output "m min. ago"

- Otherwise, output the date in this format "DD.MM.YY HH:mm"

  + e.g. 17.04.16 10:00

### Solution Step-by-Step

1. Create the  `09-format-date` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `09-format-date` directory

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
        <title>Format Date</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Format Date</h1>
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
    * title
    *
    * what this file do
    */

    /**
    * Description
    * @param {Date} date
    * @returns {void}
    */
    function formatDate (date) {
        let currentDate = new Date();

        if( (currentDate.getSeconds() - date.getSeconds()) < 1 ) {
            console.log("Right now");
            return;
        }

        if( (currentDate.getMinutes() - date.getMinutes()) < 1 ) {
            console.log(currentDate.getSeconds() - date.getSeconds() + " sec. ago");
            return;
        }

        if( (currentDate.getHours() - date.getHours()) < 1 ) {
            console.log(currentDate.getMinutes() - date.getMinutes() + " min. ago");
            return;
        }

        console.log(date);
    }

    formatDate(new Date());

    /*
    *  !! IMPORTANT !!
    *  for testing this function you need to change the date in the formatDate based on your the current date:
    */

    formatDate(new Date("March 29, 2025 15:18:00"));

    formatDate(new Date("March 29, 2025 15:1:00"));

    formatDate(new Date("March 29, 2025 00:00:00"));
    ```

5. Check The Result using the DevTool Console of the Browser
