<!-- ProgressBar.vue -->
<template>
        <div class="progress-bar">
            <div class="percentage">{{ percentage }}%</div>
            <div class="progress-bar__fill" :style="fillStyle"></div>
        </div>
</template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    props: {
      percentage: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const fillStyle = computed(() => ({
        width: `${props.percentage}%`,
      }));
  
      return { fillStyle };
    },
  });
  </script>
  
  <style scoped>
  .progress-bar-container {
    display: flex;
    align-items: center;
  }
  .progress-bar {
    width: 100%;
    height: 20px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }
  .percentage {
    color: var(--primary-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    -webkit-text-stroke: 1px var(--secondary-color);
    z-index: 1
  }
  .progress-bar__fill {
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.5s ease;
  }
  </style>