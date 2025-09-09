function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function myFunction() {
    console.log("I am a Regular Function!");
}

delay(1000).then(myFunction);

delay(3000).then(function () {
    console.log("I am an Anonymous Function!");
});

delay(5000).then(() => {
    console.log("I am an Arrow Function!");
});