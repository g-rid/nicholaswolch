"use strict";
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
