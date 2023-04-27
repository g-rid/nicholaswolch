<template>
  <div class="nutrient-table">
    <h2>Label Nutrients:</h2>
    <table v-if="combinedNutrientData">
      <thead>
        <tr>
          <th>Nutrient:</th>
          <th>Type:</th>
          <th>Units:</th>
          <th>% of Daily Value:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nutrient, key) in combinedNutrientData"
      :key="key">
          <td>{{ nutrient.name }}  <button @click="showSelectedModal(nutrient)" class="nutrient-info-button"><font-awesome-icon :icon="['fas', 'circle-info']" /></button></td>
          <td>{{ nutrient.type }}</td>
          <td>{{ nutrient.value }} {{ nutrient.unit }}</td>
          <td><ProgressBar :percentage="nutrient.dailyValue"/></td>
        </tr>
      </tbody>
    </table>
    <div class="nutrient-info-modal" v-if="showModal">
      <div class="nutrient-info-modal-content">
        <button @click="closeModal">X</button>
        <h3>{{ modalItem.name }}</h3>
        <h3>What It Does:</h3>
        <div v-html="modalItem.whatItDoes"></div>
        <h3>Where It's Found:</h3>
        <div v-html="modalItem.whereItsFound"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import defaultNutrients from "./data/defaultNutrients.json";
import nutrientMap from "./data/nutrientMap.json";
import ProgressBar from './ProgressBar.vue';

export default {
  name: "FoodNutrients",
  components: {
    ProgressBar
  },
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
      
    function combineNutrientData(selectedInfo: any[], defaultInfo: any = {}) 
    {
    if (!Array.isArray(selectedInfo)) {
      selectedInfo = [selectedInfo];
    }
    const combinedData = selectedInfo.map((nutrient: any) => {
    const nutrientValue= nutrient.value === 0 ? 0 : Math.round(nutrient.value);
    const nutrientName = nutrientMap[nutrient.nutrientName];
    const nutrientInfo = defaultInfo[nutrientName];
    const totalDailyValue = nutrientInfo.dailyValue.value;
    const dailyValue = totalDailyValue === 0 ? 0 : Math.round((nutrientValue / totalDailyValue) * 100);
    return {
      name: nutrient.nutrientName,
      value: nutrient.value,
      unit: nutrient.unitName,
      whereItsFound: nutrientInfo?.whereItsFound,
      whatItDoes: nutrientInfo?.whatItDoes,
      type: nutrientInfo?.type,
      dailyValue: dailyValue,
    };
  });
    return combinedData;
  }
  const combinedNutrientData = combineNutrientData(selectedItem.foodNutrients, defaultNutrients);
  console.log("combinedNutrientData", combinedNutrientData);

  const showModal = ref(false);
  const modalItem = ref({ name: null, whatItDoes: null, whereItsFound: null });

  function showSelectedModal(item: any) {
    showModal.value = true;
    modalItem.value = item;
    console.log("modalItem", modalItem.value);
  }

  function closeModal() {
    showModal.value = false;
    modalItem.value = { name: null, whatItDoes: null, whereItsFound: null };
  }

    return {
      combinedNutrientData,
      showModal,
      modalItem,
      showSelectedModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.nutrient-table {
  margin: auto;
}

table {
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  margin: auto;
}
.nutrient-info-button {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0;
}
.nutrient-info-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nutrient-info-modal-content {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 5.5rem 4.0rem 4.0rem 4.0rem;
  z-index: 2;
}

h2 {
  text-align: left;
  padding-top: 2.0rem;
  padding-bottom: 2.0rem;
}

h3 {
  text-align: left;
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;
  font-weight: 700;
}

.nutrient-info-modal-content button{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
