<template>
  <div v-if="!isAuthenticated">
    <h1>Please sign in</h1>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="handleSignIn">Sign in with email and password</button>
  </div>
  <div v-else>
    <h1>Welcome, {{ userDisplayName }}</h1>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { user, isAuthenticated, signIn, signOut } from '../auth';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const userDisplayName = computed(() => {
      return user.value?.displayName || 'User';
    });
    const isUserAuthenticated = computed(() => isAuthenticated.value);

    const handleSignIn = async () => {
      await signIn(email.value, password.value);
    };

    return {
      email,
      password,
      userDisplayName,
      isAuthenticated: isUserAuthenticated,
      handleSignIn,
      signOut,
    };
  },
});
</script>
