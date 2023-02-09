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

<style scoped>
.nav-container {
  position: relative;
}

.nav-items {
  padding: 0;
  margin: 0;
  list-style: none;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0 0 0;
  background: none;
  border: none;
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  background-color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 10px;
}

.hamburger span:nth-child(4) {
  top: 20px;
}

.hamburger.open span:nth-child(1) {
  top: 11px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 11px;
  width: 0%;
  left: 50%;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
