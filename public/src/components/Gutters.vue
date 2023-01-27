<template>
  <div class="gutters">
    <div class="line line-top"></div>
    <div class="line line-right"></div>
    <div class="line line-bottom"></div>
    <div class="line line-left"></div>
  </div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gutters",
  components: {},
  props: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
.gutters {
  /* position: fixed;
  top: var(--gutter-spacing);
  right: calc(var(--gutter-spacing) * 6);
  bottom: var(--gutter-spacing);
  left: calc(var(--gutter-spacing) * 6); */
  z-index: 1;
}

.line {
  position: absolute;
  background-color: var(--secondary-color);
}
.line.line-top,
.line.line-bottom {
  width: 100%;
  height: 2px;
}
.line.line-right,
.line.line-left {
  width: 2px;
  height: 100%;
}
.line.line-top {
  bottom: 0;
  left: 0;
}
.line.line-right {
  top: 0;
  left: 0;
}
.line.line-bottom {
  top: 0;
  left: 0;
}
.line.line-left {
  top: 0;
  right: 0;
}
</style>
