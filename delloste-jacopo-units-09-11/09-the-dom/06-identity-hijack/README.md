# Identity Hijack

**Author**: Jacopo Dell'Oste 

### Request From The Client

**Task**: 

Change the Stanford website using elements from the Berkeley website

- Brand and name

    + Find any elements with the word 'Stanford' and replace it with 'Berkeley'

    + Remember to change the title of the page as well

    + Replace any symbols of Stanford University with Berkeley

- Colors

    + Find all elements with the 'Stanford' color(s) and replace them with the 'Berkeley' color(s)

- Links

    + Manually find all the links in the navigation area and replace them with references to the Berkeley website if there are similar pages there. Otherwise links should point to the Berkeley homepage

- Submit a Javascript file with all the changes


### Solution Step-by-Step

1. Create the  `06-identity-hijack` folder

2. Create the the `main.js` file inside it with all the solution to the requests

3. Write the script  

    ```javascript
    /**
    * @file: main.js
    * @author: Jacopo Dell'Oste
    * Identity Hijack
    *
    * This file modifies the Stanford University website to resemble the University of California, Berkeley website.
    * The script replaces branding, colors, and links to simulate a visual and functional switch of identity.
    * 
    * Main features include:
    * - Replacing all textual references to 'Stanford' with 'Berkeley', including the document title.
    * - Replacing Stanford University logos or images with Berkeley equivalents.
    * - Changing Stanford color schemes (e.g., #8C1515) to Berkeley colors (#003262, #FDB515).
    * - Updating navigation links to point to matching or relevant pages on the Berkeley website.
    * 
    * The script is intended to be injected into a Stanford page and dynamically transform its appearance and branding.
    */

    /**
    * Replaces the page title from "Stanford" to "Berkeley".
    */
    document.title = document.title.replace(/Stanford/g, "Berkeley");

    /**
    * Replaces all occurrences of "Stanford" with "Berkeley" in the body content.
    * This affects visible text, alt text, etc., but can potentially break script content or inline event handlers.
    */
    document.body.innerHTML = document.body.innerHTML.replace(/Stanford/g, "Berkeley");

    /**
    * Stanford and Berkeley brand colors for replacement.
    * Stanford uses shades of red, while Berkeley uses navy blue and gold.
    */
    const stanfordColors = ["#8C1515", "#820000"];

    const berkeleyBlue = "#003262";

    const berkeleyGold = "#FDB515";

    /**
    * Iterates over all DOM elements and replaces Stanford brand colors
    * with Berkeley colors for both text color and background color.
    */
    document.querySelectorAll("*").forEach(el => {

    const styles = window.getComputedStyle(el);

    // Replace text color if it matches Stanford's palette
    if (stanfordColors.includes(styles.color)) {
        el.style.color = berkeleyBlue;
    }

    // Replace background color if it matches Stanford's palette
    if (stanfordColors.includes(styles.backgroundColor)) {
        
        el.style.backgroundColor = berkeleyGold;
    }
    });

    /**
    * Rewrites the links in the site's navigation menu to point to the Berkeley equivalents.
    * If a matching page doesn't exist, it defaults to the Berkeley homepage.
    */
    document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");

    if (href.includes("admissions")) {

        link.href = "https://www.berkeley.edu/admissions";

    } else if (href.includes("research")) {

        link.href = "https://www.berkeley.edu/research";

    } else {

        link.href = "https://www.berkeley.edu";

    }
    });
    ```

4. Check The Result using the DevTool of the website and paste the code in the `Console` section
