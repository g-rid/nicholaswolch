"use strict";
var rootHTML = document.querySelector('html');
var cubeWrapper = document.querySelector('.cube-background-frame');
var mainElement = document.querySelector('main');
var clearButton = document.getElementById('clear-button');
var clickCount = 0;
// Get mouse X and Y positions
rootHTML.addEventListener("mousemove", function (e) {
    rootHTML.style.setProperty('--mouse-x', e.clientX + "deg");
    rootHTML.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Add click indicator
function addClickIndicator() {
    var clickIndicatorCube = document.querySelector('.initial-cube .cube');
    var spanElement = document.createElement('span');
    spanElement.innerHTML = 'Try clicking?';
    spanElement.classList.add('click-indicator');
    clickIndicatorCube.insertAdjacentElement('afterend', spanElement);
    console.log(clickIndicatorCube);
}
// Remove click indicator
function removeClickIndicator() {
    var clickIndicator = document.querySelector('.click-indicator');
    clickIndicator.remove();
    clickCount = 0;
}
// Reset click indicator
function resetClickIndicator() {
    removeClickIndicator();
    setTimeout(addClickIndicator, 7000);
}
function displayClearButton() {
    clearButton.classList.remove("hidden");
    clearButton.classList.add("displayed");
}
// Generate cubes in random positions when the Main element is clicked
function addCubes() {
    clickCount++;
    var randomYPosition = Math.floor(Math.random() * 101);
    var randomXPosition = Math.floor(Math.random() * 101);
    var cubeMarkup = "\n  <div class=\"cube-position-wrapper generated-cube\" style=\"top: ".concat(randomYPosition, "%; left: ").concat(randomXPosition, "%\">\n    <div class=\"cube\">\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n      <div class=\"top\"></div>\n      <div class=\"bottom\"></div>\n    </div>\n  </div>\n  ");
    cubeWrapper.innerHTML += cubeMarkup;
    if (clickCount >= 6) {
        displayClearButton();
        resetClickIndicator();
    }
}
mainElement.addEventListener("click", addCubes);
// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", function () {
    var generatedCubes = document.querySelectorAll(".generated-cube");
    for (var i = 0; i < generatedCubes.length; i++) {
        generatedCubes[i].remove();
    }
    clearButton.classList.remove("displayed");
    clearButton.classList.add("hidden");
    resetClickIndicator();
});
// Add click indicator 5 seconds after page
setTimeout(addClickIndicator, 5000);
