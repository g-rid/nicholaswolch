<template>
  <div v-if="show" class="modal">
    <div class="modal-header">
      <div class="modal-title-wrapper">
        <h2>{{ selectedItem.description }}</h2>
        <h3>Brand Name: {{ selectedItem.brandName }}</h3>
        <h3>Brand Owner: {{ selectedItem.brandOwner }}</h3>
        <h3>
          Serving Size: {{ selectedItem.servingSize
          }}{{ selectedItem.servingSizeUnit }}
        </h3>
        <h3>
          Total Calories: {{ selectedItem.foodNutrients[3].nutrientNumber }}cal
        </h3>
        <h3>Ingreditents: {{ selectedItem.ingredients }}</h3>
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
        </table>
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
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
h2,
h3 {
  text-align: left;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80rem;
  background-color: var(--vt-c-black);
  padding: 2rem;
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
}
table td {
  border: 1px solid #b3adad;
  text-align: center;
  padding: 5px;
  background: #ffffff;
  color: #313030;
}
</style>
