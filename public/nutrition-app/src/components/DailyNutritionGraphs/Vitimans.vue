<template>
  <h3>Vitimans</h3>
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
  name: "BarChartVitimans",
  components: { apexchart: VueApexCharts },
  setup() {
    const nutrients = {
      biotin: {
        name: "Biotin",
        dailyValue: 0.3,
        whatItDoes: `
          <li>Energy Storage</li>
          <li>Protein, carbohdrate and fat matabolism</li>`,
        whereItsFound: `
          <li>Avocados</li>
          <li>Cauliflower</li>
          <li>Eggs</li>
          <li>Fruits (eg. Rasperries)</li>
          <li>Liver</li>
          <li>Pork</li>
          <li>Salmon</li>
          <li>Whole Grains</li>`,
      },
    };
    return {
      nutrients,
    };
  },
  data(nutrients) {
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
            data: [
              nutrients.biotin.dailyValue,
              0.4,
              16,
              5,
              1.3,
              1.2,
              0.9,
              1.7,
              0.024,
              90,
              0.02,
              15,
              0.12,
            ],
          },
        ],
        xaxis: {
          categories: [
            "Biotin",
            "Folate/Folic Acid",
            "Niacin",
            "Pantothenic Acid",
            "Riboflaven",
            "Thiamin",
            "Vitiman A",
            "Vitiman B6",
            "Vitiman B12",
            "Vitiman C",
            "Vitiman D",
            "Vitiman E",
            "Vitiman K",
          ],
          label: { text: "mg" },
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
            title: [
              `Good for: <br>Energy Storage<br>Protein, carbohydrate, and fat metabolism`,
              "Choline",
              "Folate/Folic Acid",
              "Niacin",
              "Pantothenic Acid",
              "Riboflaven",
              "Thiamin",
              "Vitiman A",
              "Vitiman B6",
              "Vitiman B12",
              "Vitiman C",
              "Vitiman D",
              "Vitiman E",
              "Vitiman K",
            ],
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
