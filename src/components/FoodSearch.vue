<template>
  <div class="food-search-wrapper">
      <span>Search all USDA registered food:</span>
      <div class="input-wrapper">
        <div class="search">
          <input v-model="state.query" @keyup.enter="search" type="text" />
          <button @click="search">Search</button>
        </div>
        <p v-if="state.results.length > 0">
          Total Results: {{ totalHits.number }}
        </p>
      </div>
      <div v-if="loading" class="loading">
        <font-awesome-icon icon="fa-solid fa-spinner" />
      </div>
      <div v-if="state.results.length > 0" class="results">
        <div>
          <button @click="previousPage">Previous Page</button>
          <button @click="nextPage">Next Page</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Brand:</th>
              <th>Calories:</th>
              <th>Serving Size:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="result in state.results" :key="result.fdcId">
              <td>
                <button
                  @click="showModal = true, (selectedItem = result)"
                  role="button"
                >
                <span v-if="result.brandName && result.description">{{ capitalize(result.brandName) }} - {{capitalize(result.description) }}</span>
                <span v-else-if="result.brandName && !result.description">{{ capitalize(result.brandName) }} - (no description)</span>
                <span v-else-if="!result.brandName && result.description">{{ capitalize(result.description) }} - (no brand name)</span>
                </button>
              </td>
              <td v-if="result.foodNutrients">
                {{
                  Math.round(result.foodNutrients.find(nutrient => nutrient.nutrientId === 1008)?.value)
                }}
                Kcal
              </td>
              <td v-else>No Calories Available</td>
              <td v-if="result.servingSize">
                {{
                  Math.round(result.servingSize)
                }}
                {{ result.servingSizeUnit }}
              </td>
              <td v-else>No Serving Size Available</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button @click="previousPage">Previous Page</button>
          <button @click="nextPage">Next Page</button>
        </div>
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
import { reactive, ref } from "vue";
import axios from "axios";
import FoodSearchModal from "./FoodSearchModal.vue";

interface Nutrient {
  type: string;
  value: number;
  nutrientId: number;
}

interface Result {
  fdcId: number;
  description: string;
  dataType: string;
  gtinUpc: string;
  publishedDate: string;
  brandOwner: string;
  ingredients: string;
  allHighlightFields: string;
  score: number;
  foodNutrients: Nutrient[];
  brandName: string;
  nutrientId: number;
  servingSize: number;
  servingSizeUnit: string;
  result: ObjectConstructor;
}

export default {
  name: "FoodSearch",
  components: { FoodSearchModal },
  setup() {
    const totalHits = reactive({
      number: Number,
    });
    const showModal = ref(false);

    // Define a reactive state object to store the search query and search results
    const state = reactive({
      query: "",
      results: Array<Result>(),
      pageNumber: 1,
    });
    const loading = ref(false);
    // @ts-ignore
    const apiKey = import.meta.env.VITE_USDA_API_KEY;

    // Define a method to perform the search
    const search = async () => {
      try {
        loading.value = true;
        // Make a GET request to the USDA API using the search query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${state.query}&dataType=Branded,Foundation&pageSize=50&pageNumber=${state.pageNumber}&lowercaseDescription.keyword&sortOrder=asc`
        );
        loading.value = false;
        // Update the search results in the reactive state object
        console.log("Search Response Object:", response.data.foods);
        state.results = response.data.foods;
        totalHits.number = response.data.totalHits;
        if (state.results.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble. ` + error);
      }
    };
    const selectedItem = reactive({ result: Object });
    return {
      state,
      search,
      selectedItem,
      loading,
      totalHits,
      showModal,
    };
  },
  methods: {
    capitalize(text?: String) {
      if (text === undefined || text === null) {
        return "";
      } else {
        return text.toLowerCase().replace(/\b(\w)/g, (x) => x.toUpperCase());
      }
    },
    nextPage() {
      this.state.pageNumber++;
      this.search();
    },
    previousPage() {
      if (this.state.pageNumber > 1) {
        this.state.pageNumber--;
        this.search();
      } else {
        alert("You are on the first page.");
      }
    },
  },
};
</script>

<style>

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search {
  display:flex;
  flex-direction: row;
}

.loading svg {
  position: relative;
  font-size: 3rem;
  margin: 50px auto;
  -webkit-animation: fa-spin 2s infinite linear;
  animation: fa-spin 2s infinite linear;
}

.results {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.0rem
}

table {
  border: 1px solid var(--color-primary);
  border-collapse: inherit;
  padding: 1.0rem;
  min-width: 60rem;
  border-radius: 0;
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

.results button {
  text-align: left;
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
