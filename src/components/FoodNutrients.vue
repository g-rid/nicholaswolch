<template>
  <div class="nutrient-graph">
    <button @click="debug">Debug</button>
    <h2>Label Nutrients</h2>
    <table
    >
      <thead>
        <tr>
          <th>Nutrient:</th>
          <th>Type:</th>
          <th>Units:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nutrient, key) in combinedNutrientData"
      :key="key">
          <td>{{ nutrient.name }} <button @click="showInfoModal = true"><font-awesome-icon :icon="['fas', 'circle-info']" /></button></td>
          <td>{{ nutrient.type }}</td>
          <td>{{ nutrient.value }} {{ nutrient.unit }}</td>
          <div class="nutrient-info-modal" v-if="showInfoModal">
            <div class="nutrient-info-modal-content">
              <h3>{{ nutrient.name }}</h3>
              <button @click="showInfoModal = false">X</button>
              {{ nutrient.whatItDoes }}
              {{ nutrient.whereItsFound }}
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import defaultNutrients from "./data/defaultNutrients.json";
import nutrientMap from "./data/nutrientMap.json";

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
  setup(props) {
    const selectedItem = props.selectedItem;
      
    function combineNutrientData(selectedInfo, defaultInfo) {
    if (!Array.isArray(selectedInfo)) {
      selectedInfo = [selectedInfo];
    }
    const combinedData = selectedInfo.map(nutrient => {
    const nutrientName = nutrientMap[nutrient.nutrientName];
    const nutrientInfo = defaultInfo[nutrientName];
    return {
      name: nutrient.nutrientName,
      value: nutrient.value,
      unit: nutrient.unitName,
      whereItsFound: nutrientInfo?.whereItsFound,
      whatItDoes: nutrientInfo?.whatItDoes,
      type: nutrientInfo?.type,
    };
  });
    return combinedData;
  }
  const combinedNutrientData = combineNutrientData(selectedItem.foodNutrients, defaultNutrients);
  console.log("combinedNutrientData", combinedNutrientData);

  const showInfoModal = ref(false);

    return {
      combinedNutrientData,
      showInfoModal,
    };
  },
  methods: {
    debug() {
      console.log(this.selectedItem);
    },
  }
};
</script>

<style scoped>
.nutrient-info-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nutrient-info-modal-content {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 20px;
}
</style>
