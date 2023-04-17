<template>
  <div class="authentication" v-if="!isAuthenticated">
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
import { defineComponent, computed, ref, onMounted, watch } from 'vue';
import { user, isAuthenticated, signIn, signOut } from '../auth';

export default defineComponent({
  setup(_, { emit }) {
    const email = ref('');
    const password = ref('');
    const userDisplayName = computed(() => {
      return user.value?.displayName || 'User';
    });
    const isUserAuthenticated = computed(() => isAuthenticated.value);

    const handleSignIn = async () => {
      await signIn(email.value, password.value);
    };

    const updateAuthenticationState = () => {
      emit('auth-state-changed', isUserAuthenticated.value);
    };

    watch(isUserAuthenticated, () => {
      updateAuthenticationState();
    });

    onMounted(() => {
      updateAuthenticationState();
    });

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

<style scoped> 
  .authentication {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 100%;
  }
</style>