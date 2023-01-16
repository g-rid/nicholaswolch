<template>
  <div class="food-search-wrapper">
    <button @click="debug">Debug</button>
    <span>Search all USDA registered food:</span>
    <div>
      <input v-model="state.query" @keyup.enter="search" type="text" />
      <button @click="search">Search</button>
    </div>
    <ul>
      <li v-for="result in state.results" :key="result.fdcId">
        <button
          @click="(showModal = true), (selectedItem = result)"
          role="button"
        >
          {{ result.description }}: {{ result.brandName }}
        </button>
      </li>
    </ul>
    <FoodSearchModal
      v-if="showModal"
      :show="showModal"
      @close="showModal = false"
      :selected-item="selectedItem"
    />
  </div>
</template>

<script lang="ts">
import { reactive, ComponentPropsOptions } from "vue";
import axios from "axios";
import FoodSearchModal from "./FoodSearchModal.vue";
interface ParentData {
  showModal: boolean;
  selectedItem: Object | null;
}
const componentProps: ComponentPropsOptions<ParentData> = {};
export default {
  name: "FoodSearch",
  components: { FoodSearchModal },
  props: componentProps,
  data() {
    // Define a reactive state object to store the search query and search results
    const state = reactive({
      query: "",
      results: [],
    });
    const apiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      try {
        // Make a GET request to the USDA API using the search query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${state.query}&pageSize=50&pageNumber=5&lowercaseDescription.keyword&sortOrder=asc`
        );
        // Update the search results in the reactive state object
        console.log("Response Object:", response.data);
        state.results = response.data.foods;
        if (state.results.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble.<br><br>` + error);
      }
    };
    const selectedItem = reactive({ result: null });
    function debug() {
      console.log("State Results", state.results);
    }
    return {
      state,
      search,
      showModal: false,
      selectedItem,
      debug,
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
ul {
  list-style: none;
}
ul li {
  text-transform: capitalize;
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
