<script setup lang="ts">
// import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/food-search">Food Search</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style>
nav {
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-left: 1px solid var(--color-border);
}
</style>
