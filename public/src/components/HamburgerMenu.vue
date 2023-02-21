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
    <ul class="menu-list" :class="{ active: showMenu }">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      showMenu: false,
    });

    const toggleMenu = () => {
      state.showMenu = !state.showMenu;
    };

    return {
      state,
      toggleMenu,
    };
  },
});
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
  transition: transform 0.5s ease;
}

.hamburger span {
  background-color: #333;
  border-radius: 2px;
  display: block;
  height: 2px;
  margin: 5px auto;
  position: relative;
  transition: transform 0.5s ease;
  width: 20px;
}

.hamburger span:first-child {
  transform-origin: 0 0;
}

.hamburger span:last-child {
  transform-origin: 0 100%;
}

.hamburger.is-active span:first-child {
  transform: rotate(45deg);
  top: 50%;
}

.hamburger.is-active span:nth-child(2) {
  transform: scaleX(0);
}

.hamburger.is-active span:last-child {
  transform: rotate(-45deg);
  bottom: 50%;
}

.menu-list {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 0;
  background-color: #333;
  width: 100%;
}

.menu-list li {
  margin: 0;
}

.menu-list a {
  color: #fff;
  display: block;
  font-size: 18px;
  padding: 15px 20px;
  text-decoration: none;
}

.menu-list a:hover {
  background-color: #666;
}

.menu-list.active {
  display: block;
}
</style>
