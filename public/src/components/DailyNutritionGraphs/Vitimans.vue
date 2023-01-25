<template>
  <h3>Vitimans</h3>
  <apexchart
    type="bar"
    height="500"
    :options="options"
    :series="options.series"
  ></apexchart>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import nutrients from "../data/defaultNutrients.json";
export default {
  name: "BarChartVitimans",
  components: { apexchart: VueApexCharts },
  data() {
    console.log("Nutrients", typeof nutrients);
    return {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "mg",
            data: [nutrients.vitimanA.dailyValue.value],
          },
        ],
        xaxis: {
          categories: [nutrients.vitimanA.name],
          label: "mg",
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, xaxis }) {
            console.log("tooltip", xaxis[categories]);
            return (
              '<div class="arrow_box">' +
              "<span>" +
              series[seriesIndex][dataPointIndex] +
              "</span>" +
              "</div>"
            );
          },
          theme: "dark",
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
