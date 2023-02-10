<template>
  <HomePageContent />
  <div class="view-frame">
    <RouterView />
  </div>
</template>

<script lang="ts">
import HomePageContent from "./components/HomePageContent.vue";
export default {
  name: "App",
  components: {
    HomePageContent,
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

@media (max-width: 768px) {
  #app {
    display: flex;
    flex-direction: column;
  }
}

.view-frame {
  border: 1px solid var(--secondary-color);
  margin: var(--gutter-spacing);
}
</style>
