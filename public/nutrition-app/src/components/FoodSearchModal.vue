<template>
  <div v-if="show" class="modal">
    <div class="modal-header">
      <div class="modal-title-wrapper">
        <h2>{{ capitalize(selectedItem.description) }}</h2>
        <h3>Brand Name: {{ capitalize(selectedItem.brandName) }}</h3>
        <h3>Brand Owner: {{ selectedItem.brandOwner }}</h3>
        <h3>
          Serving Size: {{ selectedItem.servingSize
          }}{{ selectedItem.servingSizeUnit }}
        </h3>
        <h3>
          Total Calories: {{ selectedItem.foodNutrients[3].nutrientNumber }}cal
        </h3>
        <h3>
          Ingredients:
          <div class="ingredients">
            {{ capitalize(selectedItem.ingredients) }}
          </div>
        </h3>
      </div>
      <button @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <div class="modal-body">
      <div class="nutrient-graph">
        <table>
          <thead>
            <tr>
              <th>Nutrients<br /></th>
              <th>Units<br /></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="nutrient in selectedItem.foodNutrients"
              :key="nutrient.nutrientId"
            >
              <td>{{ nutrient.nutrientName }}</td>
              <td>{{ nutrient.nutrientNumber }} {{ nutrient.unitName }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <table>
          <thead>
            <tr>
              <th>Macronutrients<br /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Vitimans<br /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Minerals<br /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table> -->
      </div>
      <div class="nutrient-info">
        <h3>What it does?</h3>
        <ul></ul>
        <h3>Where it's found?</h3>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "FoodSearchModal",
  components: {},
  props: {
    show: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    selectedItem: {
      type: Object,
      required: true,
    },
  },
  setup() {},
  data() {
    // console.log("Selected Item:", selectedItem);
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    capitalize(text: String) {
      return text.toLowerCase().replace(/\b(\w)/g, (x) => x.toUpperCase());
    },
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 90%;
  background-color: var(--vt-c-black);
  padding: 2rem;
  overflow-y: scroll;
  text-transform: capitalize;
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
  font-weight: 6s00;
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
