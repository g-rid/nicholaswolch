<template>
  <main>
    <div class="title-wrap">
      <h1>Nicholas Wolch</h1>
      <h5>Web Developer</h5>
      <HomepageNavigation />
    </div>
    <section class="content">
      Hi there. You've stumbled onto my portfolio site. It's still in progress.
      Check back for more soon. In the meantime feel free to reach out at
      <a href="mailto: hey@nicholaswolch.com">hey@nicholaswolch.com</a>
    </section>
  </main>
</template>

<script lang="ts">
import HomepageNavigation from "./HomepageNavigation.vue";
export default {
  name: "HomePageContent",
  components: { HomepageNavigation },
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

.content {
  font-size: 1.4rem;
  text-shadow: 1px 1px 1px var(--primary-text-shadow);
}
</style>
