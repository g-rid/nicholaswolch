<script setup lang="ts">
import { RouterView } from "vue-router";
import NavTitle from "../components/NavTitle.vue";
import AppNavigation from "../components/AppNavigation.vue";
</script>

<template>
  <header>
    <div class="nav-wrapper">
      <NavTitle msg="Nutrition Planner" />
      <!-- <AppNavigation /> -->
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding-top: 5vh;
}
header {
  display: flex;
  place-items: flex-start;
}

header .nav-wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
}
</style>
