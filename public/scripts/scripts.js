"use strict";
const root = document.querySelector('html');
const cubeWrapper = document.querySelector('.cube-background-frame');
const clearButton = document.getElementById("clear-button");
const clickIndicator = document.querySelector('.click-indicator');
let clickCounter = 0;
// Get mouse X and Y positions
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "deg");
    root.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Generate cubes in random positions when the DOM is clicked
function addCubes() {
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
    clickCounter++;
    if (clickCounter > 4) {
        clearButton.classList.remove("hidden");
        clearButton.classList.add("displayed");
    }
}
root.addEventListener("click", addCubes);
// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", () => {
    const generatedCubes = document.querySelectorAll(".generated-cube");
    for (const cube of generatedCubes) {
        cube.remove();
    }
    clearButton.classList.remove("displayed");
    clearButton.classList.add("hidden");
    clickCounter = 0;
});
// Show click indicator after 10 seconds and remove after 20 
setTimeout(() => {
    clickIndicator.classList.add("displayed");
}, 10000);
setTimeout(() => {
    clickIndicator.classList.remove("displayed");
}, 20000);
const htmlElement = document.querySelector('html');
const lightButton = document.getElementById('light-theme');
const darkButton = document.getElementById('dark-theme');
function removeClasses() {
    htmlElement.classList.forEach((className) => {
        htmlElement.classList.remove(className);
    });
}
// Add class to body on click
lightButton.addEventListener('click', () => {
    removeClasses();
    htmlElement.classList.add("light-theme");
});
darkButton.addEventListener('click', () => {
    removeClasses();
    htmlElement.classList.add("dark-theme");
});
