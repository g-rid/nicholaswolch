<template>
  <div class="nav-container">
    <nav>
      <ul class="nav-items">
        <li v-for="item in items" :key="item.id">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <ThemeSwitcher />
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  name: "HomepageNavigation",
  components: { RouterLink, ThemeSwitcher },
  data() {
    return {
      items: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Portfolio", path: "/portfolio" },
        { id: 2, name: "Nutrition Planner", path: "/nutrition-planner" },
        { id: 3, name: "Resume", path: "/resume" },
        { id: 4, name: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style>
.nav-container {
  padding: 2rem 0;
}

nav {
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
}

.nav-items {
  padding: 0;
  margin: 0;
  list-style: none;
}

nav a.router-link-exact-active {
  margin-left: 0.5rem;
  color: var(--secondary-color);
}

nav li {
  padding: 0.5rem 0.5rem 0.5rem 0;
}

nav a {
  display: block;
  text-decoration: none;
  transition: all 500ms ease-in-out;
  color: var(--secondary-a-7);
}

@media (min-width: 768px) {
  .nav-container .theme-switcher {
    display: none;
  }
}

@media (max-width: 767px) {
  .nav-container .theme-switcher {
    display: block;
  }
}
</style>
