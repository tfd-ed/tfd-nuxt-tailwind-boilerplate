<template>
  <form
    class="
      lg:w-2/6
      md:w-1/2
      bg-gray-100
      rounded-lg
      p-8
      flex flex-col
      md:ml-auto
      w-full
      mt-10
      md:mt-0
    "
    method="post"
    @submit.prevent="submit"
  >
    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
      {{ $t("sign_up") }}
    </h2>
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-600">{{
        $t("name")
      }}</label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
        :required="true"
        class="tfd-input"
      />
    </div>
    <div class="relative mb-4">
      <label for="username" class="leading-7 text-sm text-gray-600">{{
        $t("username")
      }}</label>
      <input
        id="username"
        v-model="username"
        type="text"
        name="username"
        :required="true"
        class="tfd-input"
      />
    </div>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">{{
        $t("email")
      }}</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        :required="true"
        class="tfd-input"
      />
    </div>
    <div class="relative mb-4">
      <label for="password" class="leading-7 text-sm text-gray-600">{{
        $t("password")
      }}</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
        :required="true"
        class="tfd-input"
      />
    </div>
    <div class="relative mb-4">
      <label for="confirmPassword" class="leading-7 text-sm text-gray-600">{{
        $t("confirmPassword")
      }}</label>
      <input
        id="confirmPassword"
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        :required="true"
        class="tfd-input"
      />
    </div>
    <div class="flex flex-row justify-center space-x-4">
      <button type="submit">
        <ShadowButton text="sign_up" color="bg-tfd" />
      </button>
    </div>
  </form>
</template>
<script>
import ShadowButton from "~/components/button/shadow-button";
export default {
  components: { ShadowButton },
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    clear() {
      this.username = "";
      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordConfirmation = "";
    },
    async submit() {
      try {
        await this.$axios.$post("/api/v1/user/register", {
          username: this.username,
          email: this.email,
          name: this.name,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        });
        this.clear();
      } catch (error) {
        if (Array.isArray(error.response.data.message)) {
          this.$toast.error(error.response.data.message.join("<br />"), {
            duration: 4000,
          });
        } else {
          this.$toast.error(error.response.data.message, {
            duration: 4000,
          });
        }
      }
    },
  },
};
</script>
