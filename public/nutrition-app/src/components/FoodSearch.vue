<template>
  <div class="food-search-wrapper">
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
          {{ result.description }}
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
      selectedResult: null,
    });
    const localApiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      // Make a GET request to the USDA API using the search query
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/search?api_key=${localApiKey}&query=${state.query}&pageSize=25&pageNumber=2&sortBy=dataType.keyword&sortOrder=asc`
      );

      // Update the search results in the reactive state object
      console.log("All Data", response.data);
      state.results = response.data.foods;
    };
    const selectedItem = reactive({ result: null });
    return {
      state,
      search,
      showModal: false,
      selectedItem,
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
