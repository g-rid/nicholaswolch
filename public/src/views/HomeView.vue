<script setup lang="ts">
import DailyNutritionGraphs from "../components/DailyNutritionGraphs.vue";
</script>

<template>
  <main>
    <DailyNutritionGraphs />
  </main>
</template>

<style>
main {
  background: rgb(169, 96, 238);
  background: linear-gradient(
    0deg,
    rgba(255, 51, 61, 1) 0%,
    rgba(169, 96, 238, 1) 100%
  );
}
</style>
