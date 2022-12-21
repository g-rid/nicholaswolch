const root = document.querySelector('html') as HTMLHtmlElement;
const cubeWrapper = document.querySelector('.cube-background-frame') as HTMLDivElement;

// Get mouse X and Y positions
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "deg");
  root.style.setProperty('--mouse-y', e.clientY + "deg");
});

// Generate cube and add it to markup
function addCubes() {
  const randomYPosition = Math.floor(Math.random() * 101);
  const randomXPosition = Math.floor(Math.random() * 101);
  const cubeMarkup = `
  <div class="cube-position-wrapper" style="top: ${randomYPosition}%; left: ${randomXPosition}%">
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
}

root.addEventListener("click", addCubes);

