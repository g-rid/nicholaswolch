"use strict";
const root = document.querySelector('html');
const cubeWrapper = document.querySelector('.cube-background-frame');
const clearButton = document.getElementById("clear-button");
let clickCounter = 0;
// Get mouse X and Y positions
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "deg");
    root.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Generate cube and add it to markup
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
        clearButton.classList.add("display");
    }
}
root.addEventListener("click", addCubes);
clearButton.addEventListener("click", () => {
    const generatedCubes = document.querySelectorAll('.generated-cube');
    for (const cube of generatedCubes) {
        cube.remove();
    }
    clearButton.classList.remove("display");
    clickCounter = 0;
});
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
