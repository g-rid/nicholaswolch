<template>
  <div>
    <h2>FDA Daily Recommended Nutrition Value</h2>
    <h3>Macronutrients</h3>
    <apexchart
      type="bar"
      height="500"
      :options="options"
      :series="options.series"
      :tooltip="options.tooltip"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "BarChart",
  components: { apexchart: VueApexCharts },
  data: function () {
    return {
      options: {
        series: [
          {
            name: "grams",
            data: [275, 28, 50, 78, 20],
          },
        ],
        xaxis: {
          categories: [
            "Carbohydrates",
            "Dietary Fiber",
            "Protein",
            "Fat",
            "Saturated Fat Acids",
          ],
          label: {
            text: "yay!",
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "30%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          show: false,
          width: 2,
          colors: ["transparent"],
        },
        fill: {
          opacity: 0.7,
        },
        tooltip: {
          theme: "dark",
          enabled: true,
          x: {
            show: true,
          },
          y: {
            show: true,
          },
        },
      },
    };
  },
};
// https://www.nal.usda.gov/human-nutrition-and-food-safety/dri-calculator
// https://www.fda.gov/food/new-nutrition-facts-label/daily-value-new-nutrition-and-supplement-facts-labels
</script>

<style>
h2,
h3 {
  color: var(--vt-c-white);
}
h3 {
  text-align: center;
}
</style>
