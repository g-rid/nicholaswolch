<template>
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title-wrapper">
        <h2>{{ defaultNutrientsObject.vitimanA.name }}</h2>
        <h3>Total Calories:</h3>
        <div>Nutrient Type: {{ defaultNutrientsObject.vitimanA.type }}</div>
      </div>
      <button @click="showModal = false">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <div class="modal-body">
      <div class="nutrient-graph">
        <table>
          <thead>
            <tr>
              <th>Nutrient<br /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="nutrient-info">
        <h3>What it does?</h3>
        <ul>
          {{
            defaultNutrientsObject.vitimanA.whatItDoes
          }}
        </ul>
        <h3>Where it's found?</h3>
        <ul>
          {{
            defaultNutrientsObject.vitimanA.whereItsFound
          }}
        </ul>
      </div>
    </div>
  </div>
  <!-- <div v-if="showModal" class="modal-backdrop" @mouseover="showModal = true">
    <div class="modal">
      <button @click="showModal = false">X</button>
      <h2>{{ result }}</h2>
      <h3>Daily Nutrients:</h3>
      <ul>
        <li v-for="nutrient in SearchResult" :key="nutrient.nutrientId">
          {{ nutrientName }} {{ nutrient.nutrientNumber }}
          {{ nutrient.unitName }}
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script lang="ts">
import defaultNutrients from "./data/defaultNutrients.json";
export default {
  name: "FoodSearchModal",
  components: { defaultNutrients: Object },
  data() {
    const defaultNutrientsObject = defaultNutrients;
    return {
      defaultNutrientsObject,
    };
  },
};
</script>

<style>
h2,
h3 {
  text-align: left;
}
.modal {
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
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
