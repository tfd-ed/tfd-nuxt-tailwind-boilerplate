<template>
  <div>
    <t-alert
      :show="ifError"
      variant="danger"
      :timeout="3000"
      @hidden="ifError = false"
    >
      <span v-html="errorMsg"></span>
    </t-alert>
    <t-alert
      :show="isSuccess"
      :timeout="3000"
      variant="success"
      @hidden="isSuccess = false"
    >
      Successfully changed password for: <b>{{ errorMsg }}</b>
    </t-alert>
    <t-modal
      :click-to-close="true"
      :hide-close-button="true"
      name="change-password"
    >
      <div class="container w-full mx-auto py-6 md:w-4/5 w-11/12 px-6">
        <div>
          <h2 class="mt-6 text-center text-4xl font-bold text-gray-700">
            Change Password
          </h2>
        </div>
        <form class="mt-16" method="post" @submit.prevent="changePassword">
          <t-input
            v-model="currentPassword"
            classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md"
            :required="true"
            placeholder="Current Password"
            name="password"
            autocomplete="off"
            type="password"
          />
          <t-input
            v-model="newPassword"
            classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md"
            :required="true"
            placeholder="Password"
            autocomplete="off"
            name="password"
            type="text"
          />
          <t-input
            v-model="confirmPassword"
            classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md"
            :required="true"
            placeholder="Confirmed Password"
            name="confirmedPassword"
            autocomplete="off"
            type="text"
          />
          <t-button
            type="submit"
            classes="mt-16 w-full bg-green-400 text-white font-semibold text-sm uppercase rounded-md"
            >Submit</t-button
          >
        </form>
      </div>
    </t-modal>
  </div>
</template>
<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      errorMsg: "",
      ifError: false,
      isSuccess: false,
    };
  },
  methods: {
    clear() {
      this.newPassword = "";
      this.currentPassword = "";
      this.confirmPassword = "";
      this.$modal.hide("change-password");
    },
    async changePassword() {
      const username = this.$store.$auth.user.username;
      const data = {
        username: username,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      };
      try {
        let response = await this.$axios.$post(
          "/api/v1/auth/changePassword",
          data
        );
        // Clear data from form
        this.clear();
        this.isSuccess = true;
        this.errorMsg = response.username;
      } catch (error) {
        this.ifError = true;
        if (Array.isArray(error.response.data.message)) {
          console.log("true");
          this.errorMsg = error.response.data.message.join("<br />");
        } else {
          this.errorMsg = error.response.data.message;
        }
      }
    },
  },
};
</script>
