<template>
  <div class="nav-container">
    <button @click="isOpen = !isOpen" class="hamburger">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <transition name="slide-down">
      <nav>
        <ul v-if="isOpen" class="nav-items">
          <li v-for="item in items" :key="item.id">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>
<script lang="ts">
export default {
  name: "HomepageNavigation",
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      isOpen: false,
      items: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
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
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 3rem;
  padding: 1rem 0 0 0;
  background: none;
  border: none;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: var(--secondary-color);
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
