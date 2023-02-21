<template>
  <main>
    <div class="title-wrap">
      <div class="title">
        <h1>Nicholas Wolch</h1>
        <h5>Web Developer</h5>
      </div>
      <div class="desktop-nav">
        <ThemeSwitcher />
        <HomepageNavigation />
      </div>
      <div class="mobile-nav">
        <HamburgerMenu />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import HomepageNavigation from "./HomepageNavigation.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import HamburgerMenu from "./HamburgerMenu.vue";

export default {
  name: "HomePageContent",
  components: { HomepageNavigation, ThemeSwitcher, HamburgerMenu },
};
</script>

<style>
@media (min-width: 769px) {
  .desktop-nav {
    display: block;
  }
  .mobile-nav,
  .flex-grow {
    display: none;
  }
}

@media (max-width: 768px) {
  body main {
    display: block;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
  .title-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}

main {
  position: relative;
  height: 100%;
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
</style>
