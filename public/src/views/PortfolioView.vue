<template>
  <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
    <Slide v-for="card in cardData" :key="card.id">
      <article class="card">
        <header>
          <h2>{{ card.title }}</h2>
        </header>
        <a
          :href="card.pageLink"
          :title="'Click here to navigate to ' + card.title"
          target="_blank"
        >
          <img :src="card.image" :alt="card.alt" />
        </a>
        <div class="content">
          <p>
            {{ card.blurb }}
          </p>
        </div>
      </article>
    </Slide>

    ...
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import sc2156 from "@/assets/screenshots/2156.jpg";

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
      alt: string;
    }
    const cardData: Card[] = [
      {
        id: 1,
        title: "Semi-Custom Theme #2156",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2154-template",
        image: sc2156,
        alt: "A homepage screenshot of Semi-Custom Theme #2156",
      },
      { id: 2, title: "", blurb: "", pageLink: "Panel 1", image: "", alt: "" },
      { id: 3, title: "", blurb: "", pageLink: "Panel 1", image: "", alt: "" },
      { id: 4, title: "", blurb: "", pageLink: "Panel 1", image: "", alt: "" },
      { id: 5, title: "", blurb: "", pageLink: "Panel 1", image: "", alt: "" },
    ];
    return {
      cardData,
    };
  },
});
</script>

<style>
.carousel {
  height: 100%;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
  height: 100%;
  display: flex;
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

.card:hover {
  cursor: grab;
}

.card:active,
.card:focus {
  cursor: grabbing;
}

.card img:hover {
  cursor: alias;
}

.card img {
  max-width: 100%;
}
</style>
