<template>
  <div>
    <div
      v-if="error"
      style="padding: 7px; border-radius: 8px; color: white; background: crimson; margin-top: 10px;"
    >
      <p class="error">{{ error }}</p>
    </div>
    <div class="container-two">
      <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required />

        <label for="email">Password:</label>
        <input type="password" name="password" v-model="password" required />

        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value
        });

        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
  }
};
</script>