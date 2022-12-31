"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var rootHTML = document.querySelector('html');
var main = document.querySelector('main');
var cubeWrapper = document.querySelector('.cube-background-frame');
var clearButton = document.getElementById("clear-button");
var clickIndicator = document.querySelector('.click-indicator');
var clickCounter = 0;
// Get mouse X and Y positions
rootHTML.addEventListener("mousemove", function (e) {
    rootHTML.style.setProperty('--mouse-x', e.clientX + "deg");
    rootHTML.style.setProperty('--mouse-y', e.clientY + "deg");
});
// Generate cubes in random positions when the Main element is clicked
function addCubes() {
    var randomYPosition = Math.floor(Math.random() * 101);
    var randomXPosition = Math.floor(Math.random() * 101);
    var cubeMarkup = "\n  <div class=\"cube-position-wrapper generated-cube\" style=\"top: ".concat(randomYPosition, "%; left: ").concat(randomXPosition, "%\">\n    <div class=\"cube\">\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n      <div class=\"left\"></div>\n      <div class=\"right\"></div>\n      <div class=\"top\"></div>\n      <div class=\"bottom\"></div>\n    </div>\n  </div>\n  ");
    cubeWrapper.innerHTML += cubeMarkup;
    clickCounter++;
    clickIndicator.classList.remove("displayed");
    if (clickCounter > 6) {
        clearButton.classList.remove("hidden");
        clearButton.classList.add("displayed");
    }
}
main.addEventListener("click", addCubes);
// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", function () {
    var generatedCubes = document.querySelectorAll(".generated-cube");
    for (var i = 0; i < generatedCubes.length; i++) {
        generatedCubes[i].remove();
    }
    clearButton.classList.remove("displayed");
    clearButton.classList.add("hidden");
    clickCounter = 0;
});
// If site hasn't been clicked show click indicator after 10 seconds and remove after 20 
if (clickCounter === 0) {
    setTimeout(function () {
        clickIndicator.classList.add("displayed");
    }, 5000);
    setTimeout(function () {
        clickIndicator.classList.remove("displayed");
    }, 10000);
}
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
var proteins = ['Pork', 'Chicken', 'Salmon', 'Beef', 'Tofu', 'Shrimp'];
var veggies = [
    'Sweet Potato',
    'Potato',
    'Brussel Sprouts',
    'Broccoli',
    'Carrots',
    'Green Beans',
    'Zucchini',
    'Spinich',
    'Cauliflower',
    'Squash',
    'Beets',
    'Parsnips',
    'Peas',
    'Corn',
];
var grains = ['White Rice', 'Brown Rice', 'Farro', 'Lentils', 'Quinoua', 'Cous Cous'];
var randomButton = document.getElementById('randomize');
var proteinsOutput = document.querySelector('.proteins output');
var veggiesOutput = document.querySelector('.veggies output');
var grainsOutput = document.querySelector('.grains output');
var proteinsList = document.getElementById('proteins-output');
var veggiesList = document.getElementById('veggies-output');
var grainsList = document.getElementById('grains-output');
var foodTypeInput = document.getElementById('food-type');
var newFoodSubmitButton = document.getElementById('new-food-submit');
var removeFoodSubmitButton = document.getElementById('remove-foods');
function randomizeButton() {
    function randomProtein() {
        return proteins[Math.floor(Math.random() * proteins.length)];
    }
    // eslint-disable-next-line no-shadow
    function randomVeggies(veggies, num) {
        if (num === void 0) { num = 3; }
        var shuffled = __spreadArray([], veggies, true).sort(function () { return 0.5 - Math.random(); });
        var veggieArray = shuffled.slice(0, num);
        return veggieArray.join("<br>");
    }
    function randomGrain() {
        return grains[Math.floor(Math.random() * grains.length)];
    }
    proteinsOutput.innerHTML = randomProtein();
    veggiesOutput.innerHTML = randomVeggies(veggies, 3);
    grainsOutput.innerHTML = randomGrain();
}
function displayLists() {
    proteins.forEach(function (protein) {
        var li = document.createElement('li');
        li.innerHTML = "".concat(protein, " <button type=\"button\" onclick=\"removeItemFromList()\">X</button>");
        li.dataset = protein;
        proteinsList.appendChild(li);
    });
    veggies.forEach(function (veggie) {
        var li = document.createElement('li');
        li.innerHTML = "".concat(veggie, " <button type=\"button\" onclick=\"removeItemFromList()\">X</button>");
        veggiesList.appendChild(li);
    });
    grains.forEach(function (grain) {
        var li = document.createElement('li');
        li.innerHTML = "".concat(grain, " <button type=\"button\" onclick=\"removeItemFromList()\">X</button>");
        grainsList.appendChild(li);
    });
}
function removeItemFromList(event) {
    console.log(event);
}
function destroyLists() {
    proteinsList.innerHTML = '';
    veggiesList.innerHTML = '';
    grainsList.innerHTML = '';
}
displayLists();
randomButton.addEventListener('click', randomizeButton);
removeFoodSubmitButton.addEventListener('click', destroyLists);
newFoodSubmitButton.addEventListener('click', function () {
    destroyLists();
    var foodInput = document.getElementById('food-input').value;
    var selectedFoodType = foodTypeInput.value;
    if (selectedFoodType === 'proteins') {
        proteins.push(foodInput);
    }
    if (selectedFoodType === 'veggies') {
        veggies.push(foodInput);
    }
    if (selectedFoodType === 'grains') {
        grains.push(foodInput);
    }
    if (selectedFoodType === 'default') {
        alert('Please select a food type');
    }
    displayLists();
});
