<template>
  <div class="nutrient-graph">
    <button @click="debug">Debug</button>
    <h2>Label Nutrients</h2>
    <table
    >
      <thead>
        <tr>
          <th>Nutrient:</th>
          <th>Units:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nutrient, key) in selectedItem.foodNutrients"
      :key="key">
          <td>{{ nutrient.nutrientName }}</td>
          <td>{{ nutrient.value }} {{ nutrient.unitName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";

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

  setup() {


    return {
    
    };
  },
  methods: {
    debug() {
      console.log(this.selectedItem);
    },
  }
};
</script>

<style></style>
