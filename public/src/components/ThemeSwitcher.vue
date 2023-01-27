<template>
  <div class="theme-switcher-buttons">
    <button
      @click="setTheme('light-theme')"
      type="button"
      class="light-theme-button"
    >
      <span class="button-wrap">
        <font-awesome-icon icon="fa-solid fa-sun" /> Light
      </span>
    </button>
    <button
      @click="setTheme('dark-theme')"
      type="button"
      class="dark-theme-button"
    >
      <span class="button-wrap">
        <font-awesome-icon icon="fa-solid fa-moon" /> Dark
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
export default {
  name: "ThemeSwitcher",
  components: {},
  props: {},
  setup() {
    const theme = ref("dark-theme");
    onMounted(() => {
      document.body.className = theme.value;
    });
    const setTheme = (themeSelector: string) => {
      theme.value = themeSelector;
      document.body.className = theme.value;
    };
    return {
      theme,
      setTheme,
    };
  },
};
</script>

<style scoped>
.theme-switcher-buttons {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 0;
  right: var(--gutter-spacing);
}
.theme-switcher-buttons button {
  border: transparent;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.9rem;
  transition: all 300ms ease-in-out;
  height: var(--gutter-spacing);
  margin: 0;
}
.dark-theme-button {
  margin-right: 1px;
}
</style>
