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
  mounted() {
    // this.$store.state.blurb = `Hi there. You've stumbled onto my portfolio site. It's still in progress.
    //   Check back for more soon. In the meantime feel free to reach out at
    //   <a href="mailto:hey@nicholaswolch.com">hey@nicholaswolch.com</a>?`;
  },
});
</script>
<style>
.cube-container {
  width: 100%;
  height: 100%;
}
</style>
