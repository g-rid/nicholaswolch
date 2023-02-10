<template>
  <div class="nav-container">
    <nav>
      <ul class="nav-items">
        <li v-for="item in items" :key="item.id">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "HomepageNavigation",
  components: { RouterLink },
  data() {
    return {
      items: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Portfolio", path: "/portfolio" },
        { id: 3, name: "Resume", path: "/resume" },
      ],
    };
  },
};
</script>

<style>
.nav-container {
  position: relative;
}

.nav-items {
  padding: 0;
  margin: 0;
  list-style: none;
}

nav {
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
}

nav a.router-link-exact-active {
  margin-left: 0.5rem;
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
