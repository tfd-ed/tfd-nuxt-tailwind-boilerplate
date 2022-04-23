<template>
  <div>
    <input id="login-modal" type="checkbox" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <form
        class="modal-box relative bg-gray-100"
        method="post"
        @submit.prevent="login"
      >
        <label
          for="login-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          {{ $t("login") }}
        </h2>
        <div class="relative mb-4">
          <label for="login-username" class="leading-7 text-sm text-gray-600">{{
            $t("username")
          }}</label>
          <input
            id="login-username"
            v-model="username"
            type="text"
            name="login-username"
            :required="true"
            autocomplete="login-username"
            class="tfd-input"
          />
        </div>
        <div class="relative mb-4">
          <label for="login-password" class="leading-7 text-sm text-gray-600">{{
            $t("password")
          }}</label>
          <input
            id="login-password"
            v-model="password"
            type="password"
            name="login-password"
            :required="true"
            class="tfd-input"
          />
        </div>
        <div class="modal-action justify-center">
          <button type="submit">
            <ShadowButton text="login" color="bg-green-700" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ShadowButton from "~/components/button/shadow-button";
export default {
  components: { ShadowButton },
  data() {
    return {
      logging: false,
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    async login() {
      this.logging = true;
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        await this.$auth.setUser(response.data.user);
        await this.$router.push("/dashboard");
        this.logging = false;
        this.username = "";
        this.password = "";
      } catch (error) {
        this.logging = false;
        this.$toast.error(error.response.data.message, {
          duration: 4000,
        });
      }
    },
  },
};
</script>
