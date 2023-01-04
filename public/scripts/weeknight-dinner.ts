const proteins = ['Pork', 'Chicken', 'Salmon', 'Beef', 'Tofu', 'Shrimp'];
const veggies = [ 'Sweet Potato', 'Potato', 'Brussel Sprouts', 'Broccoli', 'Carrots', 'Green Beans', 'Zucchini', 'Spinich', 'Cauliflower', 'Squash', 'Beets', 'Parsnips', 'Peas', 'Corn'];
const grains = ['White Rice', 'Brown Rice', 'Farro', 'Lentils', 'Quinoua', 'Cous Cous'];

const randomButton = document.getElementById('randomize__button') as HTMLDivElement;

const proteinsOutput = document.querySelector('.proteins output') as HTMLDivElement;
const veggiesOutput = document.querySelector('.veggies output') as HTMLDivElement;
const grainsOutput = document.querySelector('.grains output') as HTMLDivElement;

const proteinsList = document.getElementById('proteins-list') as HTMLDivElement;
const veggiesList = document.getElementById('veggies-list') as HTMLDivElement;
const grainsList = document.getElementById('grains-list') as HTMLDivElement;

const foodTypeInput = document.getElementById('food-type') as HTMLInputElement;
const newFoodSubmitButton = document.getElementById('new-food-submit') as HTMLDivElement;
const removeFoodSubmitButton = document.getElementById('remove-all-foods__button') as HTMLDivElement;

function randomizeButton() {
        function randomProtein() {
                return proteins[Math.floor(Math.random() * proteins.length)];
        }

        // eslint-disable-next-line no-shadow
        function randomVeggies(veggies: string[], num = 3) {
                const shuffled = [...veggies].sort(() => 0.5 - Math.random());
                const veggieArray = shuffled.slice(0, num);
                return veggieArray.join(`<br>`);
        }

        function randomGrain() {
                return grains[Math.floor(Math.random() * grains.length)];
        }
        proteinsOutput.innerHTML = randomProtein();
        veggiesOutput.innerHTML = randomVeggies(veggies, 3);
        grainsOutput.innerHTML = randomGrain();
}

function displayLists() {
        proteins.forEach((protein) => {
                const li = document.createElement('li');
                li.classList.add('food-item');
                li.innerHTML = `${protein} <button type="button" onclick="removeItemFromList()">X</button>`;
                // console.log(li.dataset);
                // li.dataset = protein;
                proteinsList.appendChild(li);
        });
        veggies.forEach((veggie) => {
                const li = document.createElement('li');
                li.classList.add('food-item');
                li.innerHTML = `${veggie} <button type="button" onclick="removeItemFromList()">X</button>`;
                veggiesList.appendChild(li);
        });
        grains.forEach((grain) => {
                const li = document.createElement('li');
                li.classList.add('food-item');
                li.innerHTML = `${grain} <button type="button" onclick="removeItemFromList()">X</button>`;
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
newFoodSubmitButton.addEventListener('click', () => {
        destroyLists();
        const foodInput = document.getElementById('food-input');
        const foodInputValue = (foodInput as HTMLInputElement).value;
        const selectedFoodType = foodTypeInput.value;
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
