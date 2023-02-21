<template>
  <main>
    <div class="title-wrap">
      <h1>Nicholas Wolch</h1>
      <h5>Web Developer</h5>
      <ThemeSwitcher />
      <HomepageNavigation
        selectedView="selectedView"
        @update:selectedView="updateSelectedView"
      />
    </div>
    <div class="flex-grow"></div>
    <transition name="fade">
      <div class="blurb" v-html="selectedViewBlurb"></div>
    </transition>
  </main>
</template>

<script lang="ts">
import HomepageNavigation from "./HomepageNavigation.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  name: "HomePageContent",
  components: { HomepageNavigation, ThemeSwitcher },
  data() {
    return {
      selectedView: "Home",
      viewData: {
        Home: {
          blurb:
            "Hello there, welcome to my portfolio site. I'm a web developer with a passion for building a better web.",
        },
        Portfolio: {
          blurb: `<p>
    Here's an example of some sites that I built during my time at
    <a href="https://www.revneuewell.com" target="_blank">PBHS/Revenuewell</a>
    A marketing agency that specializes in making webistes for doctors and
    dentists.
  </p>`,
        },
        Resume: {
          blurb: "This is the contact view blurb",
        },
        Contact: {
          blurb: "This is the contact view blurb",
        },
      },
    };
  },
  computed: {
    selectedViewBlurb() {
      return "";
    },
  },
  methods: {
    updateSelectedView(view: string) {
      this.selectedView = view;
    },
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
  padding: calc(var(--gutter-spacing) + 1rem) var(--gutter-spacing)
    var(--gutter-spacing) var(--gutter-spacing);
}

a {
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: underline;
}

h1 {
  font-size: 2.7rem;
}

.title-wrap h1 {
  margin-bottom: 1rem;
}

.blurb {
  font-size: 1.4rem;
  text-shadow: 1px 1px 1px var(--primary-a-7);
}

.flex-grow {
  flex-grow: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  main {
    flex-direction: row;
  }
  .title-wrap {
    display: flex;
  }
}
</style>
