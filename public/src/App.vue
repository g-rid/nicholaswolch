<script setup lang="ts">
import { RouterView } from "vue-router";
import NavTitle from "./components/NavTitle.vue";
import Navigation from "./components/AppNavigation.vue";
</script>

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
  <div class="gutters">
    <div class="line line-top"></div>
    <div class="line line-right"></div>
    <div class="line line-bottom"></div>
    <div class="line line-left"></div>
  </div>
  <main>
    <h1>Nicholas Wolch</h1>
    <h5>Web Developer</h5>
    <section class="content">
      Hi there. You've stumbled onto my portfolio site. It's still in progress.
      Check back for more soon. In the meantime feel free to reach out at
      <a href="mailto: hey@nicholaswolch.com">hey@nicholaswolch.com</a>
    </section>
  </main>
  <button id="clear-button" type="button" class="clear-button hidden">
    Clear
  </button>
  <div class="theme-switcher-buttons">
    <button id="light-theme" type="button" class="button primary has-icon">
      <span class="button-wrap"> <i class="fa-solid fa-sun"></i> Light </span>
    </button>
    <button id="dark-theme" type="button" class="button primary has-icon">
      <span class="button-wrap"> <i class="fa-solid fa-moon"></i> Dark </span>
    </button>
  </div>
</template>

<style scoped lang="css" src="./assets/styles.css"></style>
<style scoped>
main {
  width: 100vw;
}
</style>
