<template>
  <div class="portfolio-section">
    <p>
      For the past four years I worked with the tight knit team at
      <a href="https://www.pbhs.com" target="_blank">PBHS/RevenueWell</a>.<br />
      Here are some examples of sites that were designed by our design team and
      developed by yours truly.
    </p>
  </div>
  <div class="portfolio-section">
    <div class="portfolio-grid">
      <div
        v-for="(preview, index) in cardData"
        :key="preview.id"
        class="preview"
        @click="showModal(index)"
      >
        <img
          :src="preview.image"
          :alt="'A homepage screenshot of ' + preview.title"
        />
      </div>
    </div>
  </div>
  <div v-if="isModalShown" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button @click="closeModal" class="close-button">x</button>
      <h2>{{ currentCard.title }}</h2>
      <a :href="currentCard.pageLink" target="_blank">
        <img
          :src="currentCard.image"
          :alt="'A homepage screenshot of ' + currentCard.title"
        />
      </a>
      <p>{{ currentCard.blurb }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { cardData } from "@/components/data/portfolioImages.js";

interface Card {
  id: number;
  title: string;
  image: string;
  blurb: string;
  pageLink: string;
}

export default defineComponent({
  name: "PortfolioView",
  components: {},
  data() {
    return {
      cardData,
      isModalShown: false,
      currentCard: cardData as Card,
    };
  },
  methods: {
    closeModal() {
      this.isModalShown = false;
    },
    showModal(id: number) {
      this.currentCard = this.cardData[id];
      this.isModalShown = true;
    },
  },
});
</script>
<style scoped>
.portfolio-section {
  text-align: center;
  margin: 4rem 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
}
.preview {
  max-width: 220px;
  padding: 10px;
}

.preview img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: filter 500ms ease;
}

.preview img:hover {
  filter: grayscale(0);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-a-9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;
  transition: all 500ms ease;
  text-transform: inherit;
}
.modal-background {
  width: 100%;
  height: 100%;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  max-width: 572px;
}

.modal h2 {
  margin: 2.1rem 0 2rem 0;
}

.modal img {
  max-width: 80vw;
  max-height: 80vh;
}

.modal p {
  margin-top: 1rem;
  padding: 1rem 2rem;
  text-align: justify;
}

.modal .close-button {
  position: absolute;
  top: 0;
  right: 0;
  border-color: var(--primary-color);
  padding: 2rem;
}
</style>
