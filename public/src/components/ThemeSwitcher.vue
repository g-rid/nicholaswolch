<template>
  <div class="theme-switcher-buttons">
    <button id="light-theme" type="button" class="button primary has-icon">
      <span class="button-wrap"> <i class="fa-solid fa-sun"></i> Light </span>
    </button>
    <button id="dark-theme" type="button" class="button primary has-icon">
      <span class="button-wrap"> <i class="fa-solid fa-moon"></i> Dark </span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ThemeSwitcher",
  components: {},
  props: {},
  setup() {
    const lightThemeButton = document.getElementById("light-theme");
    const darkThemeButton = document.getElementById("dark-theme");
    const theme = localStorage.getItem("theme");
    const currentTheme = theme ? theme : "light";
    const setTheme = (theme: string) => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };
    if (currentTheme === "dark") {
      setTheme("dark");
    }
    lightThemeButton.addEventListener("click", () => {
      setTheme("light");
    });
    darkThemeButton.addEventListener("click", () => {
      setTheme("dark");
    });
  },
};
</script>

<style></style>
