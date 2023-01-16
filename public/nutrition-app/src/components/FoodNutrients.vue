<template>
  <div class="nutrient-graph">
    <table>
      <thead>
        <tr>
          <th>Nutrients<br /></th>
          <th>Units<br /></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="nutrient in selectedItem.foodNutrients"
          :key="nutrient.nutrientId"
        >
          <td>{{ nutrient.nutrientName }}</td>
          <td>{{ nutrient.value }} {{ nutrient.unitName }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <table>
            <thead>
              <tr>
                <th>Macronutrients<br /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Vitimans<br /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Minerals<br /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table> -->
  </div>
  <div class="nutrient-info">
    <h3>What it does?</h3>
    <ul></ul>
    <h3>Where it's found?</h3>
    <ul></ul>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
// import defaultNutrients from "./data/defaultNutrients.json";
import nutrientFilter from "./data/nutrientFilter.json";

export default {
  name: "FoodNutrients",
  components: {},
  props: {
    selectedItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    const selectedItemFdcId = this.selectedItem.fdcId;
    const selectedFoodData = reactive({
      query: "",
      results: [],
    });
    const apiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      try {
        // Make a GET request to the USDA API using the search query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/food/${selectedItemFdcId}?api_key=${apiKey}`
        );
        // Update the search results in the reactive state object
        console.log("Selected Food Object:", response.data);
        selectedFoodData.results = response.data;
        if (selectedFoodData.results.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble.` + error);
      }
    };
    search();
    return {
      search,
      selectedFoodData,
    };
  },
  methods: {},
};
</script>

<style>
table {
  border: 1px solid #b3adad;
  border-collapse: collapse;
  padding: 5px;
}
table th {
  border: 1px solid #b3adad;
  padding: 5px;
  background: #f0f0f0;
  color: #313030;
  text-align: left;
}
table td {
  border: 1px solid #b3adad;
  text-align: left;
  padding: 5px;
  background: #ffffff;
  color: #313030;
}
</style>
