<template>
  <div class="nutrient-graph">
    TEsting
    <button @click="debug">Debug</button>
    <div v-for="(defaultNutrient, key) in defaultNutrients" :key="key">
      <ul>
        <li>{{ key }}</li>
      </ul>
    </div>
    <div>{{ displayObject.nutrients }}</div>
    <div v-if="loading" class="loading">
      <font-awesome-icon icon="fa-solid fa-spinner" />
    </div>
    <table
      v-else
      v-for="(nutrientGroup, type) in displayObject.nutrients"
      :key="type"
    >
      <thead>
        <tr>
          <th>{{ nutrientGroup.type }}</th>
          <th>Units:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nutrient in nutrientGroup" :key="nutrient.nutrientName">
          <td>{{ nutrient.nutrientName }}</td>
          <td>{{ nutrient.nutrientValue }}</td>
          <td>{{ nutrient.whatItDoes }}</td>
          <td>{{ nutrient.whereItsFound }}</td>
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
import { reactive, ref } from "vue";
import type { PropType } from "vue";
import axios from "axios";
import defaultNutrients from "./data/defaultNutrients.json";
// import nutrientFilter from "./data/nutrientFilter.json";

export default {
  name: "FoodNutrients",
  components: {},
  props: {
    selectedItem: {
      type: Object,
      required: true,
    },
    capitalize: {
      type: Function as PropType<Function>,
      required: false,
    },
  },
  computed: {
    organizedLabelNutrients() {
      const nutrientTypes = {
        macronutrients: [],
        vitamins: [],
        minerals: [],
      };
      return nutrientTypes;
    },
  },
  setup(props) {
    const selectedItemFdcId: string = props.selectedItem.fdcId;
    console.log("Selected Item FdcId:", selectedItemFdcId);
    let displayObject = reactive({
      nutrients: [] as any,
    });
    const selectedFoodData = reactive({
      results: {} as any,
    });
    const loading = ref(false);
    const apiKey: string = import.meta.env.VITE_USDA_API_KEY;

    // Define a method that constructs displayObject
    // Get the value of each label nutrient from the USDA API
    // Get the "what it does" and "where it's found" from the defaultNutrients.json file
    const constructDisplayObject = () => {
      // Loop through the selectedFoodData object
      Object.keys(selectedFoodData.results).forEach((labelName) => {
        // Loop through the defaultNutrients object
        for (const [key, value] of Object.keys(defaultNutrients)) {
          // If the nutrientName contains the key even though they are concatenated
          if (labelName.includes(key)) {
            // add an object for each new nutrient to the displayObject
            displayObject.nutrients = [
              ...displayObject.nutrients,
              {
                nutrientName: value.name as string,
                nutrientValue: labelName[1] as string,
                whatItDoes: value.whatItDoes as string,
                whereItsFound: value.whereItsFound as string,
                type: value.type as string,
              },
            ];
          }
        }
      });
    };

    // Define a method to perform the search
    const search = async () => {
      try {
        loading.value = true;
        // Make a GET request to the USDA API using the FdcId query
        const response = await axios.get(
          `https://api.nal.usda.gov/fdc/v1/foods?api_key=${apiKey}&fdcIds=${selectedItemFdcId}&format=full&nutrients=0`
        );
        loading.value = false;
        // Update the search results in the reactive state object
        console.log("Selected Food Object:", response.data);
        selectedFoodData.results = response.data.labelNutrients;
        constructDisplayObject();
        if (response.data.length === 0) {
          alert(
            `The USDA's food database does not contain any results for this search. Please try a different food.`
          );
        }
      } catch (error) {
        alert(`Looks like we're having some trouble. ` + error);
      }
    };
    search();
    return {
      search,
      selectedFoodData,
      loading,
      defaultNutrients: defaultNutrients,
      displayObject,
    };
  },
  methods: {
    debug() {
      console.log("Display Object:", this.displayObject);
    },
  }
};
</script>

<style></style>
