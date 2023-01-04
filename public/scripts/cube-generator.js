"use strict";
const rootHTML = document.querySelector('html');
const cubeWrapper = document.querySelector('.cube-background-frame');
const mainElement = document.querySelector('main');
const clearButton = document.getElementById('clear-button');
let clickCount = 0;
// Get mouse X and Y positions
rootHTML.addEventListener("mousemove", e => {
    rootHTML.style.setProperty('--mouse-x', e.clientX + "deg");
    rootHTML.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Add click indicator
function addClickIndicator() {
    const clickIndicatorCube = document.querySelector('.initial-cube .cube');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = 'Try clicking?';
    spanElement.classList.add('click-indicator');
    clickIndicatorCube.insertAdjacentElement('afterend', spanElement);
    console.log(clickIndicatorCube);
}
// Remove click indicator
function removeClickIndicator() {
    const clickIndicator = document.querySelector('.click-indicator');
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
    const randomYPosition = Math.floor(Math.random() * 101);
    const randomXPosition = Math.floor(Math.random() * 101);
    const cubeMarkup = `
  <div class="cube-position-wrapper generated-cube" style="top: ${randomYPosition}%; left: ${randomXPosition}%">
    <div class="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
  `;
    cubeWrapper.innerHTML += cubeMarkup;
    if (clickCount >= 6) {
        displayClearButton();
        resetClickIndicator();
    }
}
mainElement.addEventListener("click", addCubes);
// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", () => {
    const generatedCubes = document.querySelectorAll(".generated-cube");
    for (let i = 0; i < generatedCubes.length; i++) {
        generatedCubes[i].remove();
    }
    clearButton.classList.remove("displayed");
    clearButton.classList.add("hidden");
    resetClickIndicator();
});
// Add click indicator 5 seconds after page
setTimeout(addClickIndicator, 5000);
