"use strict";
var rootHTML = document.querySelector('html');
var main = document.querySelector('main');
var cubeWrapper = document.querySelector('.cube-background-frame');
var clearButton = document.getElementById("clear-button");
var clickIndicator = document.querySelector('.click-indicator');
var clickCounter = 0;
// Get mouse X and Y positions
rootHTML.addEventListener("mousemove", function (e) {
    rootHTML.style.setProperty('--mouse-x', e.clientX + "deg");
    rootHTML.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Generate cubes in random positions when the Main element is clicked
function addCubes() {
    var randomYPosition = Math.floor(Math.random() * 101);
    var randomXPosition = Math.floor(Math.random() * 101);
    var cubeMarkup = "\n  <div class=\"cube-position-wrapper generated-cube\" style=\"top: ".concat(randomYPosition, "%; left: ").concat(randomXPosition, "%\">\n    <div class=\"cube\">\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n      <div class=\"top\"></div>\n      <div class=\"bottom\"></div>\n    </div>\n  </div>\n  ");
    cubeWrapper.innerHTML += cubeMarkup;
    clickCounter++;
    clickIndicator.classList.remove("displayed");
    if (clickCounter > 6) {
        clearButton.classList.remove("hidden");
        clearButton.classList.add("displayed");
    }
}
main.addEventListener("click", addCubes);
// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", function () {
    var generatedCubes = document.querySelectorAll(".generated-cube");
    for (var i = 0; i < generatedCubes.length; i++) {
        generatedCubes[i].remove();
    }
    clearButton.classList.remove("displayed");
    clearButton.classList.add("hidden");
    clickCounter = 0;
});
// If site hasn't been clicked show click indicator after 10 seconds and remove after 20 
if (clickCounter === 0) {
    setTimeout(function () {
        clickIndicator.classList.add("displayed");
    }, 5000);
    setTimeout(function () {
        clickIndicator.classList.remove("displayed");
    }, 10000);
}
var htmlElement = document.querySelector('html');
var lightButton = document.getElementById('light-theme');
var darkButton = document.getElementById('dark-theme');
function removeClasses() {
    htmlElement.classList.forEach(function (className) {
        htmlElement.classList.remove(className);
    });
}
// Add class to body on click
lightButton.addEventListener('click', function () {
    removeClasses();
    htmlElement.classList.add("light-theme");
});
darkButton.addEventListener('click', function () {
    removeClasses();
    htmlElement.classList.add("dark-theme");
});
