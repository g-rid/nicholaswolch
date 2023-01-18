<template>
  <div class="nutrient-graph">
    <button @click="debug">Debug</button>
    <!-- <div v-for="(defaultNutrient, key) in defaultNutrients" :key="key">
      <ul>
        <li>{{ key }}</li>
      </ul>
    </div> -->
    <div>{{ displayObject }}</div>
    <div v-if="loading" class="loading">
      <font-awesome-icon icon="fa-solid fa-spinner" />
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>Nutrients:</th>
          <th>Units:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(selectedFoodResult, key) in selectedFoodData" :key="key">
          <td>
            {{ key }}
          </td>
          <td>{{ selectedFoodResult.value }} *Unit*</td>
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
import { PropType } from "vue";
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
  data() {
    const selectedItemFdcId: string = this.selectedItem.fdcId;
    const displayObject = reactive({
      nutrientName: {
        nutrientValue: {},
        whatItDoes: {},
        whereItsFound: {},
      },
    });

    const selectedFoodData = reactive({
      results: {} as any,
    });
    const loading = ref(false);
    const apiKey: string = import.meta.env.VITE_USDA_API_KEY;

    // Define a method that constructs displayObject
    // Get the value of each label nutrient from the USDA API
    // Get the what it does and where it's found from the defaultNutrients.json file
    const constructDisplayObject = () => {
      // Loop through the nutrientNames array
      console.log("type of", Object.entries(selectedFoodData.results));
      Object.entries(selectedFoodData.results).forEach((labelName) => {
        // Loop through the defaultNutrients object
        for (const [key, value] of Object.entries(defaultNutrients)) {
          // If the nutrientName matches the key in defaultNutrients
          if (labelName[0] === key) {
            // Add the nutrientName to the displayObject
            displayObject.nutrientName = {
              nutrientValue: labelName[1],
              whatItDoes: value.whatItDoes,
              whereItsFound: value.whereItsFound,
            };
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
          `https://api.nal.usda.gov/fdc/v1/food/${selectedItemFdcId}?api_key=${apiKey}&format=full`
        );
        loading.value = false;
        // Update the search results in the reactive state object
        console.log("Selected Food Object:", response.data);
        selectedFoodData.results = response.data.labelNutrients;
        // selectedFoodData.nutrientValues = Object.values(
        //   response.data.labelNutrients
        // );
        // console.log(
        //   "Label Nutrients",
        //   Object.keys(response.data.labelNutrients),
        //   Object.values(response.data.labelNutrients)
        // );
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
    debug(): void {
      console.log("Default Nutrients", this.displayObject);
      // for (const nutrient in this.defaultNutrients) {
      //   console.log("Default Nutrients", nutrient);
      // }
    },
    displayNutritionFacts() {
      console.log(this.organizedLabelNutrients);
    },
  },
};
</script>

<style></style>
