<template>
  <div class="nutrient-graph">
    <button @click="debug">Debug</button>
    <table>
      <thead>
        <tr>
          <th>Nutrients:</th>
          <th>Units:</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(selectedFoodResult, key) in selectedFoodData.results"
          :key="key"
        >
          <td>{{ selectedFoodResult[0] }}</td>
          <td>{{ selectedFoodResult[1].value }} *Unit*</td>
        </tr>
      </tbody>
    </table>
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
    const selectedItemFdcId: string = this.selectedItem.fdcId;
    const selectedFoodData = reactive({
      results: [],
    });
    const apiKey: string = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      try {
        // Make a GET request to the USDA API using the FdcId query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/food/${selectedItemFdcId}?api_key=${apiKey}&format=full`
        );
        // Update the search results in the reactive state object
        console.log("Selected Food Object:", response.data);
        selectedFoodData.results = Object.entries(response.data.labelNutrients);
        if (selectedFoodData.results.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble. ` + error);
      }
    };
    console.log("Selected Food Data", selectedFoodData.results);
    search();
    return {
      search,
      selectedFoodData,
    };
  },
  computed: {},
  methods: {
    debug(): void {
      console.log("Selected Food Data", this.selectedFoodData.results);
      console.log(
        "Selected Food Label Nutrients",
        this.selectedFoodData.results.labelNutrients
      );
    },
  },
};
</script>

<style></style>
