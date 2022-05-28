<template>
  <nav>
    <h1>Quick Post</h1>
    <!-- for all users -->

    <router-link to="/">Home</router-link>
    <!-- for logged in users -->
    <div v-if="authIsReady">
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logOut");
    };

    const user = computed(() => {
      return store.state.user;
    });

    const authIsReady = computed(() => {
      return store.state.authIsReady;
    });

    return { handleClick, user, authIsReady };
  }
};
</script>