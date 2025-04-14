/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */



document.title = document.title.replace(/Stanford/g, "Berkeley");


document.body.innerHTML = document.body.innerHTML.replace(/Stanford/g, "Berkeley");


const stanfordColors = ["#8C1515", "#820000"];
const berkeleyBlue = "#003262";
const berkeleyGold = "#FDB515";

document.querySelectorAll("*").forEach(el => {
  const styles = window.getComputedStyle(el);
  if (stanfordColors.includes(styles.color)) {
    el.style.color = berkeleyBlue;
  }
  if (stanfordColors.includes(styles.backgroundColor)) {
    el.style.backgroundColor = berkeleyGold;
  }
});


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