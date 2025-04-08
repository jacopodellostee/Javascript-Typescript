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

