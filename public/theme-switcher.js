const htmlElement = document.querySelector('html');
const subMenuWrapper = document.querySelector('.submenu');
const themeSwitcherButton = document.querySelector('.theme-switcher-button');

const osDefaultButton = document.getElementById('os-default-theme');
const lightButton = document.getElementById('light-theme');
const darkButton = document.getElementById('dark-theme');

// Open submenu on click
themeSwitcherButton.addEventListener('click', () => {
    subMenuWrapper.classList.toggle("show");
    themeSwitcherButton.toggleAttribute('aria-expanded');
});

// Add class to body on click
lightButton.addEventListener('click', () => {
    htmlElement.classList = '';
    htmlElement.classList.add("light-theme");
});
darkButton.addEventListener('click', () => {
    htmlElement.classList = '';
    htmlElement.classList.add("dark-theme");
});