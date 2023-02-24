<template>
  <div>
    <h2>FDA Daily Recommended Nutrition Value</h2>
    <Macronutrients />
    <Vitimans />
    <div>
      This app is not intended for children, infants, pregnant women, or
      breastfeeding women.
    </div>
  </div>
</template>

<script lang="ts">
import Macronutrients from "./DailyNutritionGraphs/Macronutrients.vue";
import Vitimans from "./DailyNutritionGraphs/Vitimans.vue";
export default {
  name: "BarChart",
  components: { Macronutrients, Vitimans },
  data: function () {
    return {};
  },
};
// https://www.nal.usda.gov/human-nutrition-and-food-safety/dri-calculator
// https://www.fda.gov/food/new-nutrition-facts-label/daily-value-new-nutrition-and-supplement-facts-labels
</script>

<style>
h2,
h3 {
  text-align: center;
}
</style>
