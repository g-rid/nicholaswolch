const rootHTML = document.querySelector('html') as HTMLHtmlElement;
const main = document.querySelector('main') as HTMLElement;
const cubeWrapper = document.querySelector('.cube-background-frame') as HTMLDivElement;
const clearButton = document.getElementById("clear-button") as HTMLDivElement;
const clickIndicator = document.querySelector('.click-indicator') as HTMLDivElement;
let clickCounter = 0 as number;

// Get mouse X and Y positions
rootHTML.addEventListener("mousemove", e => {
  rootHTML.style.setProperty('--mouse-x', e.clientX + "deg");
  rootHTML.style.setProperty('--mouse-y', e.clientY + "deg");
});

// Generate cubes in random positions when the Main element is clicked
function addCubes() {
  const randomYPosition = Math.floor(Math.random() * 101);
  const randomXPosition = Math.floor(Math.random() * 101);
  const cubeMarkup = `
  <div class="cube-position-wrapper generated-cube" style="top: ${randomYPosition}%; left: ${randomXPosition}%">
    <div class="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
  `;
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
clearButton.addEventListener("click", () => {
  const generatedCubes = document.querySelectorAll(".generated-cube");
  for (let i = 0; i < generatedCubes.length; i++) {
    generatedCubes[i].remove();
  }
  clearButton.classList.remove("displayed");
  clearButton.classList.add("hidden");
  clickCounter = 0;
});

 // If site hasn't been clicked show click indicator after 10 seconds and remove after 20 
if (clickCounter === 0) {
  setTimeout(() => {
    clickIndicator.classList.add("displayed");
  }, 5000)

  setTimeout(() => {
    clickIndicator.classList.remove("displayed");
  }, 10000)
}