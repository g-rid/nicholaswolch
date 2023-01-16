<template>
  <div class="food-search-wrapper">
    <button @click="debug">Debug</button>
    <span>Search all USDA registered food:</span>
    <div>
      <input v-model="state.query" @keyup.enter="search" type="text" />
      <button @click="search">Search</button>
    </div>
    <div v-if="state.results.length > 0">
      <button @click="previousPage">Previous Page</button>
      <button @click="nextPage">Next Page</button>
    </div>
    <table v-if="state.results.length > 0">
      <thead>
        <tr>
          <th>Food Description:</th>
          <th>Brand:</th>
          <th>Calories:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in state.results" :key="result.fdcId">
          <td>
            <button
              @click="(showModal = true), (selectedItem = result)"
              role="button"
            >
              {{ capitalize(result.description) }}
            </button>
          </td>
          <td>{{ capitalize(result.brandName) }}</td>
          <td>{{ displayCalories(result.foodNutrients) }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="state.results.length > 0">
      <button @click="previousPage">Previous Page</button>
      <button @click="nextPage">Next Page</button>
    </div>
    <FoodSearchModal
      v-if="showModal"
      :show="showModal"
      @close="showModal = false"
      :selected-item="selectedItem"
      :capitalize="capitalize"
    />
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import FoodSearchModal from "./FoodSearchModal.vue";
export default {
  name: "FoodSearch",
  components: { FoodSearchModal },
  props: {},
  data() {
    // Define a reactive state object to store the search query and search results
    const state = reactive({
      query: "",
      results: [],
      pageNumber: 1,
    });
    const apiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      try {
        // Make a GET request to the USDA API using the search query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${state.query}&dataType=Branded,Foundation&pageSize=50&pageNumber=${state.pageNumber}&lowercaseDescription.keyword&sortOrder=asc`
        );
        // Update the search results in the reactive state object
        console.log("Search Response Object:", response.data);
        state.results = response.data.foods;
        if (state.results.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble. ` + error);
      }
    };
    const selectedItem = reactive({ result: null });
    function debug() {
      console.log("State Results", state.results);
    }
    function nextPage() {
      state.pageNumber++;
      search();
    }
    function previousPage() {
      if (state.pageNumber > 1) {
        state.pageNumber--;
        search();
      } else {
        alert("You are on the first page.");
      }
    }
    return {
      state,
      search,
      showModal: false,
      selectedItem,
      debug,
      nextPage,
      previousPage,
    };
  },
  methods: {
    capitalize(text?: String) {
      if (text === undefined) {
        return "";
      } else {
        return text.toLowerCase().replace(/\b(\w)/g, (x) => x.toUpperCase());
      }
    },
    displayCalories(nutrients?: Array<Object>) {
      const calories = nutrients.find(
        (nutreint) => nutreint.nutrientId === 1008
      );
      return calories ? calories.value : "0";
    },
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
table {
  border: 1px solid #b3adad;
  border-collapse: collapse;
  padding: 5px;
  min-width: 60rem;
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
.modal-backdrop {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
.modal-backdrop button {
  text-align: right;
}
</style>
