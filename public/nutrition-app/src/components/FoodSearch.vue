<template>
  <div class="food-search-wrapper">
    <span>Search all USDA registered food:{{ showModal }}</span>
    <div>
      <input v-model="state.query" @keyup.enter="search" type="text" />
      <button @click="search">Search</button>
    </div>
    <ul>
      <li
        v-for="result in state.results"
        :key="result.fdcId"
        :search-result="result"
        @mouseover="showModal = true"
        @mouseleave="showModal = false"
      >
        {{ result.description }}
      </li>
    </ul>
    <FoodSearchModal :show-modal="showModal" />
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";
import FoodSearchModal from "./FoodSearchModal.vue";

export default {
  name: "FoodSearch",
  components: { FoodSearchModal },
  setup() {
    const showModal = ref(false);
    return {
      showModal,
    };
  },
  data() {
    // Define a reactive state object to store the search query and search results
    const state: Object = reactive({
      query: "" as string,
      results: [] as Object,
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
