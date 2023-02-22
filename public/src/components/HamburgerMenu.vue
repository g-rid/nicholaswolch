<template>
  <div class="menu">
    <button
      class="hamburger"
      :class="{ 'is-active': showMenu }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <HomepageNavigation
      class="menu-list"
      :class="{ active: showMenu }"
      ref="menuList"
    />
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted, Ref, nextTick } from "vue";
import HomepageNavigation from "./HomepageNavigation.vue";

interface MenuState {
  showMenu: Ref<boolean>;
}

export default {
  name: "HamburgerMenu",
  components: { HomepageNavigation },
  setup() {
    const state: MenuState = {
      showMenu: ref(false),
    };

    const menuList = ref<HTMLElement | null>(null);

    function toggleMenu() {
      state.showMenu.value = !state.showMenu.value;
    }

    function closeMenuOnClickOutside(event: MouseEvent) {
      console.log(event, "event");
      console.log(menuList.value, "menuList.value");
      if (menuList.value && !menuList.value.contains(event.target as Node)) {
        state.showMenu.value = false;
        document.removeEventListener("click", closeMenuOnClickOutside);
      }
    }

    onMounted(() => {
      document.addEventListener("click", closeMenuOnClickOutside);
      console.log(state.showMenu);
      nextTick(() => {
        menuList.value = document.querySelector(".menu-list");
      });
      document.addEventListener("click", closeMenuOnClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    });

    return {
      ...state,
      toggleMenu,
      menuList,
    };
  },
};
</script>

<style>
.menu {
  position: relative;
  display: flex;
  align-items: center;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 1;
  transition: all 500ms ease;
}

.hamburger span {
  background-color: var(--secondary-color);
  border-radius: 2px;
  display: block;
  height: 2px;
  margin: 5px auto;
  position: relative;
  transition: transform 500ms ease;
  width: 20px;
}

.hamburger.is-active {
  background-color: var(--secondary-color);
}

.hamburger span:first-child {
  transform-origin: 0 0;
}

.hamburger span:last-child {
  transform-origin: 0 100%;
}

.hamburger.is-active span {
  background-color: var(--primary-color);
}

.hamburger.is-active span:first-child {
  transform: rotate(45deg);
  top: 50%;
  left: 3px;
}

.hamburger.is-active span:nth-child(2) {
  transform: scaleX(0);
}

.hamburger.is-active span:last-child {
  transform: rotate(-45deg);
  bottom: 50%;
  left: 3px;
}

.mobile-nav .menu-list {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
  z-index: 2;
  opacity: 0;
  transition: all 500ms ease;
}

.mobile-nav .menu-list li {
  margin: 0;
  padding: 0.5rem;
}

.mobile-nav .menu-list a {
  display: block;
  font-size: 1.6rem;
  padding: 1.2rem 2.3rem;
  text-decoration: none;
}

.mobile-nav .menu-list.active {
  display: block;
  opacity: 1;
}

.mobile-nav nav a.router-link-exact-active {
  margin-left: 0;
}

.mobile-nav .theme-switcher {
  padding: 1.7rem 2.8rem 2.8rem 2.8rem;
}
</style>
