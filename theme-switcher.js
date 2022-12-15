// Dark mode toggle
const bodyClassList = document.body.classList;
const btn = document.querySelector('.dark-mode__toggle');
const darkModeLabel = document.querySelector('.dark-mode__label');


btn.addEventListener('click', () => {
    bodyClassList.toggle('dark-theme'); 
    darkModeLabel.toggle = `Click for dark theme` 
});




