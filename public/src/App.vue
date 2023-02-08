<template>
  <HomePageContent />
  <div class="view-frame">
    <RouterView />
    <ThemeSwitcher />
  </div>
</template>

<script lang="ts">
import HomePageContent from "./components/HomePageContent.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
export default {
  name: "App",
  components: {
    HomePageContent,
    ThemeSwitcher,
  },
  mounted() {
    // Add mousemove X and Y coordinates to #app element
    const rootHTML = document.getElementById("app");
    if (rootHTML) {
      rootHTML.addEventListener("mousemove", (e) => {
        rootHTML.style.setProperty("--mouse-x", e.clientX + "deg");
        rootHTML.style.setProperty("--mouse-y", e.clientY + "deg");
      });
    }
  },
};
</script>

<style lang="css" src="./assets/styles.css"></style>

<style>
#app {
  width: 100vw;
  display: grid;
  grid-template-columns: 25% 75%;
  padding: 0;
}

.view-frame {
  border: 1px solid var(--secondary-color);
  margin: var(--gutter-spacing);
}
</style>
