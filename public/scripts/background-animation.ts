const root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "deg");
  root.style.setProperty('--mouse-y', e.clientY + "deg");
});

function addCubes() {
  console.log("It Really works");
}

root.addEventListener("click", addCubes);