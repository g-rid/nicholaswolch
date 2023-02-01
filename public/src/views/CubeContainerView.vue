<template>
  <div class="cube-container">
    <CubeBackgroundFrame />
    <ThemeSwitcher />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CubeBackgroundFrame from "../components/CubeBackgroundFrame.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
export default defineComponent({
  name: "CubeContainerView",
  components: {
    CubeBackgroundFrame,
    ThemeSwitcher,
  },
});
</script>
<style>
.cube-container {
  width: 100%;
  height: 100%;
}
</style>
