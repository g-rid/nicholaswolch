<template>
  <main>
    <div class="title-wrap">
      <h1>Nicholas Wolch</h1>
      <h5>Web Developer</h5>
      <HomepageNavigation />
      <ThemeSwitcher />
    </div>
    <section class="blurb">
      <!-- {{ blurb }} -->
    </section>
  </main>
</template>

<script lang="ts">
import HomepageNavigation from "./HomepageNavigation.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  name: "HomePageContent",
  components: { HomepageNavigation, ThemeSwitcher },
  setup() {
    return {};
  },
};
</script>

<style>
main {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: calc(var(--gutter-spacing) + 1.5rem) var(--gutter-spacing);
}
a {
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: underline;
}
h1 {
  font-size: 2.7rem;
}
h5 {
  margin-bottom: 5px;
}

.blurb {
  font-size: 1.4rem;
  text-shadow: 1px 1px 1px var(--primary-text-shadow);
}
</style>
