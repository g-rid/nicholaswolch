<template>
  <div class="cube-container">
    <CubeBackgroundFrame />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CubeBackgroundFrame from "../components/CubeBackgroundFrame.vue";
export default defineComponent({
  name: "CubeContainerView",
  components: {
    CubeBackgroundFrame,
  },
});
</script>
<style>
.cube-container {
  width: 100%;
  height: 100%;
}
</style>
