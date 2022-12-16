const htmlElement = document.querySelector('html');
const lightButton = document.getElementById('light-theme');
const darkButton = document.getElementById('dark-theme');

// Add class to body on click
lightButton.addEventListener('click', () => {
    htmlElement.classList = '';
    htmlElement.classList.add("light-theme");
});
darkButton.addEventListener('click', () => {
    htmlElement.classList = '';
    htmlElement.classList.add("dark-theme");
});