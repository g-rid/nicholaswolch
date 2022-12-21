"use strict";
const root = document.documentElement;
const cubeWrapper = document.querySelector('.cube-background-frame');
const cubeMarkup = `<div class="cube-position-wrapper">
  <div class="cube cube-1">
    <div class="front"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
</div>
`;
// Get mouse X and Y positions
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "deg");
    root.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Generate cube and add it to markup
function addCubes() {
    cubeWrapper.innerHTML += cubeMarkup;
}
root.addEventListener("click", addCubes);
