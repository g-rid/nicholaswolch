<template>
  <div v-if="show" class="modal">
    <div class="modal-header">
      <div class="modal-title-wrapper">
        <h2 v-if="selectedItem && selectedItem.description">
          {{ selectedItem.description }}
        </h2>
        <h3 v-if="selectedItem && selectedItem.brandName">
          Brand Name: {{ selectedItem.brandName }}
        </h3>
        <h3 v-if="selectedItem.dataType === 'SR Legacy'">
          Data Source: <strong>USDA</strong> based on Standard Reference
          originally available via the USDA National Nutrient Database (NNDB)
        </h3>
        <h3 v-if="selectedItem.brandOwner">
          Brand Owner: {{ selectedItem.brandOwner }}
        </h3>
        <h3 v-if="selectedItem.servingSize">
          Serving Size: {{ selectedItem.servingSize }}
          {{ selectedItem.servingSizeUnit }}
        </h3>
        <h3>
          Total Calories:
          <!-- {{ displaySelectedCalories() }} -->
          kcal
        </h3>
        <h3 v-if="selectedItem.ingredients">
          Ingredients:
          <div class="ingredients">
            {{ selectedItem.ingredients }}
          </div>
        </h3>
      </div>
      <button @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <div class="modal-body">
      <FoodNutrients :selected-item="selectedItem" />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import FoodNutrients from "./FoodNutrients.vue";

export default {
  name: "FoodSearchModal",
  components: { FoodNutrients },
  props: {
    show: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    selectedItem: {
      type: Object,
      required: true,
    },
    capitalize: {
      type: Function as PropType<Function>,
      required: false,
    },
  },
  data() {
    // Split up the nutrients into different types based on nutrientFilter
    const nutrientTypes = {
      macronutrients: [],
      vitamins: [],
      minerals: [],
    };
    return {
      nutrientTypes,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    // displaySelectedCalories() {
    //   const calories = this.selectedItem.foodNutrients.find(
    //     (nutreint: Object) => nutreint.nutrientId === 1008
    //   );
    //   return calories ? calories.value : "0";
    // },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background-color: var(--vt-c-black);
  padding: 2rem;
  overflow-y: scroll;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.modal-body {
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0;
}
h2,
h3 {
  text-align: left;
  font-weight: 600;
}
.ingredients {
  font-size: 1.2rem;
}
table {
  border: 1px solid #b3adad;
  border-collapse: collapse;
  padding: 5px;
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
</style>
