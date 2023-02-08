<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="card in cardData" :key="card.id">
      <div class="card">{{ card.title }}</div>
    </Slide>

    ...
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "PortfolioView",
  components: {
    Carousel,
    Slide,
  },
  data() {
    interface Card {
      id: number;
      title: string;
      blurb: string;
      pageLink: string;
      image: string;
    }
    const cardData: Card[] = [
      {
        id: 1,
        title: "Semi-Custom Theme #2156",
        blurb: "",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2154-template",
        image: "../assets/screenshots/2156.jpg",
      },
      { id: 1, title: "", blurb: "", pageLink: "Panel 1", image: "" },
      { id: 1, title: "", blurb: "", pageLink: "Panel 1", image: "" },
      { id: 1, title: "", blurb: "", pageLink: "Panel 1", image: "" },
    ];
    return {
      cardData,
    };
  },
});
</script>

<style scoped>
.carousel__item {
  /* background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #000;
  font-size: 1.5rem;
  height: 500px;
  line-height: 1.5;
  padding: 1rem;
  text-align: center;
  width: 500px; */
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
