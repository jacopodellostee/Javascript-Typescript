# Clock

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

- Implement a javascript clock that prints the current time to the console
every second

- The output should be in the format HH:mm:ss e.g. 17:03:06

### Solution Step-by-Step

1. Create the  `10-clock` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `10-clock` directory

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
        <title>Clock</title>
    </head>
    <body>
        <!-- Content of The Body -->
        <h1>Clock</h1>
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
    * Clock
    *
    * print the current time every second, like a digital clock
    */

    setInterval(() => {
        console.clear();  

        let date = new Date();

        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    }, 1000);
    ```

5. Check The Result using the DevTool Console of the Browser
