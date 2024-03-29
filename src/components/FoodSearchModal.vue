<template>
  <div v-if="show" class="modal">
    <div class="modal-wrapper">
      <div class="modal-header">
      <div class="modal-title-wrapper">
        <h2 v-if="selectedItem && selectedItem.brandName && selectedItem.description ">
          {{ selectedItem.brandName }} - {{ selectedItem.description }}
        </h2>
        <h3 v-if="selectedItem.dataType === 'SR Legacy'">
          Data Source: <strong>USDA</strong> based on Standard Reference
          originally available via the USDA National Nutrient Database (NNDB)
        </h3>
        <h3 v-if="selectedItem.brandOwner">
          Brand Owner: {{ selectedItem.brandOwner }}
        </h3>
        <h3 v-if="selectedItem.servingSize">
          Serving Size: {{ Math.round(selectedItem.servingSize) }}
          {{ selectedItem.servingSizeUnit }}
        </h3>
        <h3>
          Calories Per Serving:
          {{ 
          Math.round(selectedItem.foodNutrients.find(nutrient => nutrient.nutrientId === 1008).value)
          }}
          kcal
        </h3>
        <h3 v-if="selectedItem.packageWeight">
          Package Weight: {{ selectedItem.packageWeight }}
        </h3>
        <h3 v-if="selectedItem.ingredients">
          Ingredients:
          <span class="ingredients">
            {{ selectedItem.ingredients }}
          </span>
        </h3>
      </div>
      </div>
      <div class="modal-body">
        <FoodNutrients :selected-item="selectedItem" />
      </div>
    </div>
    <button @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
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
  setup() {
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
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 90%;
  background-color: var(--vt-c-black);
  padding: 2rem;
  overflow-y: scroll;
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}

.modal-wrapper {
  margin: auto;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
h2,
h3 {
  text-align: left;
  font-weight: 600;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
h2 {
  padding-top: 4.0rem;
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
