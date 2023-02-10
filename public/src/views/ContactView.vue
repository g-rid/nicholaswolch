<template>
  <section>
    <img :src="headshot" alt="Headshot of Nicholas Wolch" />
    <p>Feel free to reach out</p>
    <a href="mailto:hey@nicholaswolch.com">hey@nicholaswolch.com</a>
  </section>
</template>
<script lang="ts">
import headshot from "@/assets/images/headshot.jpg";
export default {
  name: "ContactView",
  data() {
    return { headshot };
  },
};
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
img {
  filter: grayscale(100%);
  border-radius: 50%;
  max-width: 15rem;
  margin-bottom: 1.5rem;
}
</style>
