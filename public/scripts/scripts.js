"use strict";
const root = document.documentElement;
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "deg");
    root.style.setProperty('--mouse-y', e.clientY + "deg");
});
function addCubes() {
    console.log("It Really works");
}
root.addEventListener("click", addCubes);
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
