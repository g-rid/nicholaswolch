<template>
  <h1>Nicholas Wolch</h1>
  <h5>Web Developer</h5>
  <HomepageNavigation />
  <section class="content">
    Hi there. You've stumbled onto my portfolio site. It's still in progress.
    Check back for more soon. In the meantime feel free to reach out at
    <a href="mailto: hey@nicholaswolch.com">hey@nicholaswolch.com</a>
  </section>
</template>

<script lang="ts">
import HomepageNavigation from "./HomepageNavigation.vue";
export default {
  name: "HomePageContent",
  components: { HomepageNavigation },
  props: {},
  setup() {
    return {};
  },
};
</script>

<style>
a {
  color: var(--accent-color);
  font-weight: 500;
  text-decoration: underline;
}
</style>
