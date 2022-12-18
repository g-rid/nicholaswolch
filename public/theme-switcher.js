var htmlElement = document.querySelector('html');
var lightButton = document.getElementById('light-theme');
var darkButton = document.getElementById('dark-theme');
function removeClasses() {
    htmlElement.classList.forEach(function (className) {
        htmlElement.classList.remove(className);
    });
}
// Add class to body on click
lightButton.addEventListener('click', function () {
    removeClasses();
    htmlElement.classList.add("light-theme");
});
darkButton.addEventListener('click', function () {
    removeClasses();
    htmlElement.classList.add("dark-theme");
});
