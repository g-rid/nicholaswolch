const root = document.querySelector('html') as HTMLHtmlElement;
const cubeWrapper = document.querySelector('.cube-background-frame') as HTMLDivElement;
const clearButton = document.getElementById("clear-button") as HTMLDivElement;
const clickIndicator = document.querySelector('.click-indicator') as HTMLDivElement;
let clickCounter = 0 as number;

// Get mouse X and Y positions
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "deg");
  root.style.setProperty('--mouse-y', e.clientY + "deg");
});

// Generate cubes in random positions when the DOM is clicked
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
  if (clickCounter > 4) {
    clearButton.classList.remove("hidden");
    clearButton.classList.add("displayed");
  }
}

root.addEventListener("click", addCubes);

// Remove generated cubes when clear button is clicked
clearButton.addEventListener("click", () => {
  const generatedCubes = document.querySelectorAll(".generated-cube") as object;
  for(const cube of generatedCubes) {
    cube.remove();
  }
  clearButton.classList.remove("displayed");
  clearButton.classList.add("hidden");
  clickCounter = 0;
}); 

// Show click indicator after 10 seconds and remove after 20 
setTimeout(() => {
  clickIndicator.classList.add("displayed");
}, 10000)

setTimeout(() => {
  clickIndicator.classList.remove("displayed");
}, 20000)