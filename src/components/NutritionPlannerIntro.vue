<template>
    <div v-if="isOpen" class="intro-popup">
        <div class="intro-popup-content">
            Hey there, welcome to my Nutrition Planner app. I've built this app to help me make better food choices. It's also fun to explore app design, API calls, authentication, and database management. Feel free to poke around. I hope you find it useful too!
            <button @click="closePopup" class="popup-button">X</button>
        </div>
    </div>
</template>

<script lang="ts">    
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NutritionPlannerIntro",
  setup() {
    const isOpen = ref(true);

    function closePopup() {
        isOpen.value = false;
    }

    return {
        isOpen,
        closePopup,
    }
  }
});
</script>

<style scoped>
.intro-popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-a-7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
}
.intro-popup-content {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 7rem;
    width: 60rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    position: relative;
}

.popup-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
}
</style>