const htmlElement = document.querySelector('html') as HTMLHtmlElement;
const lightButton = document.getElementById('light-theme') as HTMLButtonElement;
const darkButton = document.getElementById('dark-theme') as HTMLButtonElement;

function removeClasses(): void {
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