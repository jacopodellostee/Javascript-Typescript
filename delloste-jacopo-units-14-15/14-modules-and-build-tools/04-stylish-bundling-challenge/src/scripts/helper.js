/**
 * @file helper.js
 * @author Jacopo Dell'Oste
 * 
 * @description
 * This module provides a function to toggle album details on a webpage.
 * When a user clicks on an album link in the list, it displays the corresponding
 * album detail section and hides the others. The displayed section scrolls into view smoothly.
 */

/**
 * Sets up click event listeners for album links to toggle
 * the display of their corresponding album detail sections.
 * @returns {void}
 */
function setupAlbumToggle() {
  /**
   * List of album links in the album list.
   * @type {NodeListOf<HTMLLIElement>}
   */
  const albumLinks = document.querySelectorAll(".album-list li");

  /**
   * List of album detail sections.
   * @type {NodeListOf<HTMLElement>}
   */
  const albumSections = document.querySelectorAll(".album-detail");

  if (!albumLinks.length || !albumSections.length) return;

  albumLinks.forEach(link => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const targetId = link.getAttribute("data-album");

      albumSections.forEach(section => section.classList.remove("active"));

      const targetSection = document.getElementById(targetId);

      if (targetSection) {

        targetSection.classList.add("active");

        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

export default setupAlbumToggle;
