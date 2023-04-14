<template>
    <div v-if="!isAuthenticated">
      <h1>Please sign in</h1>
      <button @click="signIn">Sign in with email and password</button>
    </div>
    <div v-else>
      <h1>Welcome, {{ userDisplayName }}</h1>
      <button @click="signOut">Sign out</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { user, isAuthenticated, signIn, signOut } from '@/auth';
  
  export default defineComponent({
    setup() {
      const userDisplayName = computed(() => {
        return user.value?.displayName || 'User';
      });
  
      return {
        userDisplayName,
        isAuthenticated,
        signIn,
        signOut
      };
    }
  });
  </script>