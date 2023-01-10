<script setup lang="ts"></script>

<template>
  <div class="food-search-wrapper">
    <span>Search all USDA registered food:</span>
    <div>
      <input v-model="state.query" type="text" />
      <button @click="search">Search</button>
    </div>
    <ul>
      <li v-for="result in state.results" :key="result.fdcId">
        {{ result.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";

export default {
  name: "FoodSearch",
  components: {},
  data() {
    // Define a reactive state object to store the search query and search results
    const state: Object = reactive({
      query: "",
      results: [],
    });
    const localApiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      // Make a GET request to the USDA API using the search query
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/search?api_key=${localApiKey}&query=${state.query}`
      );

      // Update the search results in the reactive state object
      console.log(response.data);
      state.results = response.data.foods;
    };
    // Return the reactive state object and the search method
    return {
      state,
      search,
    };
  },
};
</script>

<style>
.food-search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
