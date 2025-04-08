# Tell My Fortune

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Tell my fortune

- Store the following into variables: number of children, partner's name, geographic location, job
title.
- Output your fortune to the console like so: "You will be a X in Y, and married to Z with N
kids."


### Solution Step-by-Step

1. Create the  `01-tell-my-fortune` folder

2. Create the the `index.html` and `main.js` files in the appropriate directories

    * the `index.html` file will be in the `01-tell-my-fortune` directory

    * the `main.js` file will be in a directory called `scripts` containing only JavaScript scripts

3. Write the HTML code and link the script
    
    * The HTML code:

    ```HTML 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jacopo Dell'Oste">
        <title>Tell My Fortune</title>
    </head>
    <body>
        <!-- Content of The Body-->
        <h1>Tell My Fortune</h1>

        <!-- End of Body-->
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
      * Tell My Fortune
      *
      * this file will store 4 value a in 4 variable and will print your fortune based of the values on the console
      */

      // store the values in 4 variable
      let children = 2;
      let partner = "Maria";
      let locations = "Italy";
      let job = "Web Developer";

      // print your fortune
      console.log("You will be a " + job + " in  " + locations + ", and married to " + partner + " with "  + children + " kids.");
    ```

5. Check The Result using the DevTool Console of the Browser
