<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="nav-title-wrapper">
    <div class="logo-wrapper purple">
      <font-awesome-icon icon="fa-solid fa-utensils" />
      <h1>{{ msg }}</h1>
    </div>
    <div class="user-wrapper">
      <font-awesome-icon icon="fa-solid fa-user" />
      <h3>User</h3>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-weight: 300;
  font-size: 1.6rem;
}

.nav-title-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.logo-wrapper,
.user-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-wrapper {
  padding-top: 2rem;
}

.logo-wrapper svg {
  padding-right: 1rem;
  font-size: 4rem;
  width: 3rem;
}

.user-wrapper svg {
  font-size: 3rem;
  padding-right: 1rem;
  width: 3rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
