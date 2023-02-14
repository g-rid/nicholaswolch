<template>
  <div class="portfolio-grid">
    <div
      v-for="card in cardData"
      :key="card.id"
      class="card"
      @click="openModal(image)"
    >
      <img :src="card.image" :alt="'A homepage screenshot of ' + card.title" />
    </div>
    <div v-if="selectedImage" class="modal">
      <img :src="selectedImage.url" />
      <p>{{ selectedImage.description }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { cardData } from "@/components/data/portfolioImages.js";
export default defineComponent({
  name: "PortfolioView2",
  components: {},
  data() {
    return {
      cardData,
      images: [] as Image[],
      selectedImage: null as Image | null,
    };
  },
  methods: {
    openModal(image: cardData) {
      this.selectedImage = image;
    },
    closeModal() {
      this.selectedImage = null;
    },
  },
});
</script>
<style>
.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.card {
  max-width: 220px;
  padding: 10px;
}

.card img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.2s ease;
}

.card img:hover {
  filter: grayscale(0);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal img {
  max-width: 80vw;
  max-height: 80vh;
}

.modal p {
  margin-top: 1rem;
}

.modal button {
  margin-top: 1rem;
}
</style>
