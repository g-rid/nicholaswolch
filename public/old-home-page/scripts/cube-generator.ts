const rootHTML = document.querySelector("html") as HTMLHtmlElement;
const cubeWrapper = document.querySelector(
  ".cube-background-frame"
) as HTMLDivElement;
const mainElement = document.querySelector("main") as HTMLElement;
const clearButton = document.getElementById("clear-button") as HTMLDivElement;
let clickCount = 0 as number;

// Add click indicator
function addClickIndicator() {
  const clickIndicatorCube = document.querySelector(
    ".initial-cube .cube"
  ) as HTMLSpanElement;
  const spanElement = document.createElement("span") as HTMLSpanElement;
  spanElement.innerHTML = "Try clicking?";
  spanElement.classList.add("click-indicator");
  clickIndicatorCube.insertAdjacentElement("afterend", spanElement);
}

// Remove click indicator
function removeClickIndicator() {
  const clickIndicator = document.querySelector(
    ".click-indicator"
  ) as HTMLSpanElement;
  clickIndicator.remove();
  clickCount = 0;
}

function displayClearButton() {
  clearButton.classList.remove("hidden");
  clearButton.classList.add("displayed");
}

// Generate cubes in random positions when the Main element is clicked
function addCubes() {
  clickCount++;
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
  if (clickCount >= 6) {
    displayClearButton();
    removeClickIndicator();
  }
}

mainElement.addEventListener("click", addCubes);

// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", () => {
  const generatedCubes = document.querySelectorAll(".generated-cube");
  for (let i = 0; i < generatedCubes.length; i++) {
    generatedCubes[i].remove();
  }
  clearButton.classList.remove("displayed");
  clearButton.classList.add("hidden");
  removeClickIndicator();
});

// Add click indicator 5 seconds after page one time
setTimeout(addClickIndicator, 5000);
