<template>
  <button @click="toggleTheme" class="theme-switcher">
    <div class="toggle-container">
      <div class="toggle-circle" :class="{ moon: dark, sun: !dark }">
        <font-awesome-icon
          :icon="`fa-solid fa-${dark ? 'moon' : 'sun'}`"
          aria-hidden="true"
          focusable="false"
          :style="{ fontSize: '10px' }"
        />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const dark = ref(true);
    const toggleTheme = () => {
      dark.value = !dark.value;
      if (dark.value) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }
    };

    onMounted(() => {
      const bodyClassList = document.body.classList;
      if (bodyClassList.contains("dark-theme")) {
        dark.value = true;
      } else if (bodyClassList.contains("light-theme")) {
        dark.value = false;
      }
    });

    return {
      dark,
      toggleTheme,
    };
  },
});
</script>

<style scoped>
.theme-switcher {
  background-color: transparent;
  border: none;
  padding: 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-top: 1rem;
}

.toggle-container {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--secondary-text-shadow);
  background-color: grey;
  transition: border-color 0.25s, background-color 0.25s;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  position: relative;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.toggle-circle.sun {
  transform: translateX(20px);
}

.toggle-circle svg {
  color: var(--secondary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
