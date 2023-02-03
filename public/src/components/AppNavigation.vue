<script setup lang="ts"></script>

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
  margin-left: 1rem;
  color: var(--secondary-color);
}

nav a.router-link-exact-active:hover {
  color: var(--primary-color);
}

nav a {
  display: block;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: var(--secondary-text-shadow);
}
</style>
