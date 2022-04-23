<template>
  <div>
    <input id="login-modal" type="checkbox" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box bg-gray-100">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          {{ $t("login") }}
        </h2>
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
            autocomplete="username"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
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
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="modal-action justify-center">
          <ShadowButton text="login" color="bg-green-700" @onClick="login" />
        </div>
      </div>
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
      } catch (e) {
        this.logging = false;
        this.ifError = true;
        this.errorMsg = e.response.data.message;
      }
    },
  },
};
</script>
