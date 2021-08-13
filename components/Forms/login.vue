<template>
  <div>
    <div class="w-full">
      <t-alert
        :show="ifError"
        :timeout="3000"
        variant="danger"
        @hidden="ifError = false"
      >
        {{ errorMsg }}
      </t-alert>
      <t-alert
        :show="isSuccess"
        :timeout="3000"
        variant="success"
        @hidden="isSuccess = false"
      >
        {{ errorMsg }}
      </t-alert>
    </div>
    <t-modal :click-to-close="true" :hide-close-button="true" name="login">
      <div class="container w-full mx-auto py-6 md:w-4/5 w-11/12 px-6">
        <div>
          <h2 class="mt-6 text-center text-5xl font-bold text-gray-700">
            Log In
          </h2>
        </div>
        <form class="mt-16" method="post" @submit.prevent="login">
          <t-input
            v-model="username"
            classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md"
            :required="true"
            placeholder="Username"
            name="username"
            autocomplete="username"
            type="text"
          />
          <t-input
            v-model="password"
            classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md"
            :required="true"
            placeholder="Password"
            name="password"
            autocomplete="password"
            type="password"
          />
          <t-button
            type="submit"
            classes="mt-16 w-full bg-green-400 text-white font-semibold text-sm uppercase rounded-md"
            >Login</t-button
          >
        </form>
      </div>
    </t-modal>
  </div>
</template>
<script>
export default {
  name: "Login",
  props: ["value"],
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
      isSuccess: false,
      ifError: false,
    };
  },
  methods: {
    async login() {
      this.$emit("input", true);
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        await this.$auth.setUser(response.data.user);
        await this.$router.push("/dashboard");
        this.username = "";
        this.password = "";
      } catch (e) {
        this.$emit("input", false);
        this.ifError = true;
        this.errorMsg = e.response.data.message;
      }
    },
  },
};
</script>
