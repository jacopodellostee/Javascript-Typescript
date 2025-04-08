# Date ago

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**:

- Create a function getDateAgo(date, days) that returns the day of the month
n days ago from the given date

- For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be
19th and getDateAgo(new Date(), 2) should be 18th

- Test the function to make sure it works reliably with any valid Date object

- Decide what to do with a negative 'days' parameter

  + e.g. getDateAgo(new Date(), -2)

### Solution Step-by-Step

1. Create the  `06-date-ago` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `06-date-ago` directory

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
        <title>Date ago</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Date ago</h1>
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
    * Date ago
    *
    * this file cointain 1 function called 'getDateAgo' 
    * that returns the day of the month, days ago from the specified date
    * in case the days specified are negative, it returns 0 
    */

    /**
    * returns the days ago from the specified date 
    * @param {string} date
    * @param {number} days
    * @returns {number}
    */
    function getDateAgo(date, days) {

        let newDate = new Date(date);

        if(days < 0) {
            return 0;
        }

        let dayAgo = (newDate.getDate() - days);

        newDate.setDate(dayAgo);
        
        return newDate.getDate();
    }

    console.log(getDateAgo("August 19, 1975", 1));
    console.log(getDateAgo("February 4, 2005", 2));
    console.log(getDateAgo("August 19, 1975", -10));
    ```

5. Check The Result using the DevTool Console of the Browser
