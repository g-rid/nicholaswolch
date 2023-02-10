<template>
  <Carousel :itemsToShow="2.5" :wrapAround="true">
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
          <img
            :src="card.image"
            :alt="'A homepage screenshot of ' + card.title"
          />
        </a>
        <div class="content">
          <p>
            {{ card.blurb }}
          </p>
        </div>
      </article>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import sc2146 from "@/assets/portfolio-screenshots/2146.webp";
import sc2152 from "@/assets/portfolio-screenshots/2152.webp";
import sc2153 from "@/assets/portfolio-screenshots/2153.webp";
import sc2154 from "@/assets/portfolio-screenshots/2154.webp";
import sc2156 from "@/assets/portfolio-screenshots/2156.webp";
import sc2157 from "@/assets/portfolio-screenshots/2157.webp";
import drBonacci from "@/assets/portfolio-screenshots/drbonacci.jpg";
import neImplant from "@/assets/portfolio-screenshots/neimplant.jpg";
import everGreen from "@/assets/portfolio-screenshots/EvergreenOralSurgery.webp";
import sleepyHollow from "@/assets/portfolio-screenshots/SleepyHollowDentalArts.webp";
import visage from "@/assets/portfolio-screenshots/VisageFacialSurgery.webp";

export default defineComponent({
  name: "PortfolioView",
  components: {
    Carousel,
    Slide,
    Navigation,
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
        title: "Semi-Custom Theme #2146",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2146-template",
        image: sc2146,
      },
      {
        id: 3,
        title: "Semi-Custom Theme #2152",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2152-template",
        image: sc2152,
      },
      {
        id: 4,
        title: "Semi-Custom Theme #2153",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2153-template",
        image: sc2153,
      },
      {
        id: 5,
        title: "Semi-Custom Theme #2154",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2154-template",
        image: sc2154,
      },
      {
        id: 6,
        title: "Semi-Custom Theme #2156",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2156-template",
        image: sc2156,
      },
      {
        id: 7,
        title: "Semi-Custom Theme #2157",
        blurb: "This is a semi-custom theme for a dental practice.",
        pageLink:
          "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2157-template",
        image: sc2157,
      },
      {
        id: 8,
        title: "Evergreen Oral Surgery",
        blurb:
          "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
        pageLink: "https://www.evergreenoralsurgery.com/",
        image: everGreen,
      },
      {
        id: 9,
        title: "North East Implant and Oral Surgery",
        blurb:
          "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
        pageLink: "https://www.neimplantandoralsurgery.com/",
        image: neImplant,
      },
      {
        id: 10,
        title: "Dr Bonacci",
        blurb:
          "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
        pageLink: "https://www.drbonacci.com/",
        image: drBonacci,
      },
      {
        id: 11,
        title: "Sleepy Hollow Dental Arts",
        blurb:
          "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
        pageLink: "https://www.sleepyhollowdentalarts.com/",
        image: sleepyHollow,
      },
      {
        id: 12,
        title: "Visage Facal Surgery",
        blurb:
          "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
        pageLink: "https://www.visagefacialsurgery.com/",
        image: visage,
      },
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

.card h2 {
  font-size: 1.6rem;
}

.card p {
  font-size: 1.2rem;
}

.card img {
  max-width: 100%;
  filter: grayscale(100%);
  transition: filter 0.35s ease;
}

.card:hover img {
  filter: grayscale(0);
}

.carousel button {
  padding: 0;
  background-color: var(--primary-text-shadow);
}

.carousel button:hover {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-color: var(--secondary-color);
  font-weight: 400;
}
</style>
