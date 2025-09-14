/**
 * @file main.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * Entry point for the album toggle functionality.
 * It imports the required styles and initializes the album toggle
 * behavior once the DOM content is fully loaded.
 */

import setupAlbumToggle from './helper.js';

// Import the styles
import '../styles/style.scss';

/**
 * Initialize the album toggle functionality when the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  setupAlbumToggle();
});
