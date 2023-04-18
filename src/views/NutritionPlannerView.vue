<template>
  <div class="view-wrapper">
    <FoodSearch v-if="isAuthenticated" />
    <Authentication @auth-state-changed="handleAuthStateChanged" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FoodSearch from "../components/FoodSearch.vue";
import Authentication from "../components/Authentication.vue";

export default defineComponent({
  name: "FoodSearchView",
  components: {
    FoodSearch,
    Authentication,
  },
  setup() {
    const isAuthenticated = ref(false);

    const handleAuthStateChanged = (authState: boolean) => {
      isAuthenticated.value = authState;
    };

    return {
      isAuthenticated,
      handleAuthStateChanged,
    };
  },
});
</script>

<style>
.view-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  height: 100%;
}

.view-wrapper:has(.results) {
  height: auto;
}
</style>
