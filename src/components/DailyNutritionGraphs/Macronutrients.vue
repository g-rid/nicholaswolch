<template>
  <h3>Macronutrients</h3>
  <apexchart
    type="bar"
    height="300"
    :options="options"
    :series="options.series"
  ></apexchart>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "BarChart",
  components: { apexchart: VueApexCharts },
  data: function () {
    return {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "grams",
            data: [275, 28, 50, 78, 20],
          },
        ],
        xaxis: {
          categories: [
            "Total Carbohydrates",
            "Dietary Fiber",
            "Protein",
            "Total Fat",
            "Saturated Fat Acids",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          show: true,
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
h3 {
  text-align: center;
}
</style>
