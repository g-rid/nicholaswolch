<template>
  <div class="cube-background-frame initial-cube">
    <div class="cube-position-wrapper">
      <div class="cube">
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
  <button id="clear-button" type="button" class="clear-button hidden">
    Clear
  </button>
</template>
<script lang="ts">
export default {
  name: "CubeBackgroundFrame",
  components: {},
  props: {},
  setup() {
    return {};
  },
  mounted() {
    const cubeWrapper = document.querySelector(
      ".cube-background-frame"
    ) as HTMLDivElement;
    const cubeBackgroundFrame = document.querySelector(
      ".cube-background-frame"
    ) as HTMLDivElement;
    const clearButton = document.getElementById(
      "clear-button"
    ) as HTMLDivElement;
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
      if (document.querySelector(".click-indicator")) {
        const clickIndicator = document.querySelector(".click-indicator");
        clickIndicator.remove();
        clickCount = 0;
      }
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

    cubeBackgroundFrame.addEventListener("click", addCubes);

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
  },
};
</script>

<style>
.cube-background-frame {
  width: 100%;
  height: 100%;
  border: 1px solid var(--secondary-color);
  overflow: hidden;
  perspective: 25em;
  perspective-origin: 50% calc(50% - 4em);
}

.cube-position-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cube {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(var(--mouse-x)) rotateX(var(--mouse-y));
  animation: rotatecube 100s infinite linear;
  width: 5em;
  height: 5em;
}
.cube .left,
.cube .right,
.cube .front,
.cube .back,
.cube .top,
.cube .bottom {
  position: absolute;
  opacity: 0.5;
  border: 1px solid var(--primary-color);
  background-color: var(--secondary-color);
  transform-style: preserve-3d;
  box-shadow: 0 0 1em var(--primary-text-shadow) inset;
}
.cube .left,
.cube .right,
.cube .front,
.cube .back {
  width: 100%;
  height: 100%;
}
.cube .front {
  transform: translateZ(2.5em);
}
.cube .right {
  transform: rotateY(90deg) translateZ(2.5em);
}
.cube .back {
  transform: rotateY(180deg) translateZ(2.5em);
}
.cube .left {
  transform: rotateY(270deg) translateZ(2.5em);
}
.cube .top,
.cube .bottom {
  width: 5em;
  height: 5em;
}
.cube .top {
  transform: translateY(-50%) rotateX(90deg);
}
.cube .bottom {
  bottom: 0;
  transform: translateY(50%) rotateX(90deg);
}

@keyframes rotatecube {
  to {
    transform: rotateY(360deg);
  }
}

.cube-position-wrapper .click-indicator {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1rem;
  color: var(--primary-color);
  z-index: 1;
  text-shadow: 1px 1px 1px var(--secondary-text-shadow);
}
</style>
