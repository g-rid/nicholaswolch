const rootHTML = document.querySelector('html') as HTMLHtmlElement;
const main = document.querySelector('main') as HTMLElement;
const cubeWrapper = document.querySelector('.cube-background-frame') as HTMLDivElement;
const clearButton = document.getElementById("clear-button") as HTMLDivElement;
const clickIndicator = document.querySelector('.click-indicator') as HTMLSpanElement;
let clickCount = 0 as number;

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
  clickCount++;
  clickIndicator.classList.add("hidden");
  console.log(clickIndicator.className);
  if (clickCount > 6) {
    clearButton.classList.remove("hidden");
    clearButton.classList.add("displayed");
  }
  clickCounter();
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
  clickCount = 0;
});

function clickCounter() {
// If site hasn't been clicked show click indicator after 10 seconds and remove after 20 
    console.log("Zero Seconds", clickIndicator.classList);
    setTimeout(() => {
      clickIndicator.classList.add("displayed");
      console.log("Three Seconds", clickIndicator.className);
    }, 3000)
}

clickCounter();