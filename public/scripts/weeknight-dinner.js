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
var proteins = ['Pork', 'Chicken', 'Salmon', 'Beef', 'Tofu', 'Shrimp'];
var veggies = ['Sweet Potato', 'Potato', 'Brussel Sprouts', 'Broccoli', 'Carrots', 'Green Beans', 'Zucchini', 'Spinich', 'Cauliflower', 'Squash', 'Beets', 'Parsnips', 'Peas', 'Corn'];
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
        // console.log(li.dataset);
        // li.dataset = protein;
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
    var foodInput = document.getElementById('food-input');
    var foodInputValue = foodInput.value;
    var selectedFoodType = foodTypeInput.value;
    if (selectedFoodType === 'proteins') {
        proteins.push(foodInputValue);
    }
    if (selectedFoodType === 'veggies') {
        veggies.push(foodInputValue);
    }
    if (selectedFoodType === 'grains') {
        grains.push(foodInputValue);
    }
    if (selectedFoodType === 'default') {
        alert('Please select a food type');
    }
    displayLists();
});
