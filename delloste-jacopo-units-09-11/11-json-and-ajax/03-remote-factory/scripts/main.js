/**
 * @file: main.js
 * @author: Jacopo Dell'Oste
 * title
 *
 * what this file do
 */

const request = new XMLHttpRequest();

const factory = "https://jsonblob.com/api/jsonBlob/1370458495740207104";

request.addEventListener('load', function () {

    console.log(JSON.parse(request.responseText));
});

request.open('GET', factory, true);

request.setRequestHeader('Content-type', 'application/json'); 

request.send();
