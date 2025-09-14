/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the walking cat animation application.
 * It imports the `walkingCat` module and the required CSS, then
 * initializes the animation by calling `startProgram`.
 */

import walkingCat from './helper';

// Import the Styles
import '../styles/style.css';

/**
 * Initialize and start the walking cat program.
 */
walkingCat.startProgram();
