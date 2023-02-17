<template>
  <div class="portfolio-section">
    <p>
      For the past four years I worked with the tight knit team at
      <a href="https://www.pbhs.com">PBHS/RevenueWell</a>.<br />
      Here are some examples of sites that were designed by our design team and
      developed by yours truly.
    </p>
  </div>
  <div class="portfolio-section">
    <div class="portfolio-grid">
      <div
        v-for="preview in cardData"
        :key="preview.id"
        class="preview"
        @click="openModal(preview.id)"
      >
        <img
          :src="preview.image"
          :alt="'A homepage screenshot of ' + preview.title"
        />
      </div>
    </div>
  </div>
  <div v-if="modal === true" class="modal">
    <div class="modal-content">
      <Carousel ref="myCarousel">
        <Slide v-for="slide in cardData" :key="slide.id">
          <button @click="closeModal" class="close-button">x</button>
          <h2>{{ slide.title }}</h2>
          <a :href="slide.pageLink" target="_blank">
            <img
              :src="slide.image"
              :alt="'A homepage screenshot of ' + slide.title"
            />
          </a>
          <p>{{ slide.blurb }}</p>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { cardData } from "@/components/data/portfolioImages.js";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "PortfolioView",
  components: { Carousel, Navigation, Slide },
  onMounted() {
    const myCarousel = ref(null);
    const openModal = (previewIndex: number) => {
      this.$refs.myCarousel.slideTo(previewIndex);
      modal.value = true;
    };
    const modal = ref(false);
    return {
      myCarousel,
      openModal,
    };
  },
  setup(modal) {
    const closeModal = () => {
      // modal.value = false;
    };

    return {
      closeModal,
      modal,
      cardData,
    };
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
  transition: filter 0.2s ease;
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
  transition: all 2ms ease;
}

.carousel {
  width: 100%;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--primary-a-9);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  width: 100%;
}

.modal h2 {
  margin: 2rem 0;
}

.modal img {
  max-width: 80vw;
  max-height: 80vh;
}

.modal p {
  margin-top: 1rem;
}

.modal .close-button {
  position: absolute;
  top: 0;
  right: 0;
  border-color: var(--primary-color);
}
</style>
