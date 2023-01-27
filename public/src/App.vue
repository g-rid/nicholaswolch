<template>
  <Gutters />
  <CubeBackgroundFrame />
  <main>
    <HomePageContent />
  </main>
  <button id="clear-button" type="button" class="clear-button hidden">
    Clear
  </button>
  <ThemeSwitcher />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import HomePageContent from "./components/HomePageContent.vue";
import CubeBackgroundFrame from "./components/CubeBackgroundFrame.vue";
import Gutters from "./components/Gutters.vue";
export default {
  name: "App",
  components: {
    ThemeSwitcher,
    HomePageContent,
    RouterView,
    CubeBackgroundFrame,
    Gutters,
  },
  mounted() {
    // Add mousemove X and Y coordinates to #app element
    const rootHTML = document.getElementById("app");
    rootHTML.addEventListener("mousemove", (e) => {
      rootHTML.style.setProperty("--mouse-x", e.clientX + "deg");
      rootHTML.style.setProperty("--mouse-y", e.clientY + "deg");
    });
  },
};
</script>

<style lang="css" src="./assets/styles.css"></style>

<style>
#app {
  width: 100vw;
}
</style>
