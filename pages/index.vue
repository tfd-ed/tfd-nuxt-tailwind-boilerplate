<template>
  <div class="flex relative items-center">
    <t-alert :show="ifError" :timeout="3000" variant="danger" @hidden="ifError = false">
      {{ errorMsg }}
    </t-alert>
    <t-modal :click-to-close="true" :hide-close-button="true" name="login">
      <div class="container w-full mx-auto py-6 md:w-4/5 w-11/12 px-6">
        <div>
          <h2 class="mt-6 text-center text-5xl font-bold text-gray-700">
            Log In
          </h2>
        </div>
        <form class="mt-16" method="post" @submit.prevent="login">
          <t-input v-model="username" classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md" :required="true"
            placeholder="Username" name="username" autocomplete="username" type="text" />
          <t-input v-model="password" classes="mt-4 border-gray-300 placeholder-gray-400 rounded-md" :required="true"
            placeholder="Password" name="password" autocomplete="password" type="password" />
          <t-button type="submit"
            classes="mt-16 w-full bg-green-400 text-white font-semibold text-sm uppercase rounded-md">Login</t-button>
        </form>
      </div>
    </t-modal>
    <LoginLoading v-if="logging"></LoginLoading>
    <div v-else class="
        container
        mx-auto
        px-6
        flex flex-col
        justify-between
        items-center
        relative
        py-4
      ">
      <div class="flex flex-col">
        <nuxt-img src="https://i.imgur.com/SZqGIpL.png" class="w-28 mx-auto" />
        <p class="text-3xl my-6 text-center dark:text-white">
          Hello, I&#x27;m TFD ✌
        </p>
        <h2 class="
            max-w-3xl
            text-5xl
            md:text-6xl
            font-bold
            mx-auto
            dark:text-white
            text-gray-800 text-center
            py-2
          ">
          Teaching For Development
        </h2>
        <p class="
            max-w-3xl
            text-lg
            md:text-md
            mx-auto
            dark:text-white
            text-gray-800 text-center
            py-2
            text-justify
          ">
          <br />
          គឺជាគំនិតផ្តួចផ្តើមមួយ ក្នុងគោលបំណងពាំនាំ ចំនេះដឹងថ្មី នឹង
          ប្លែកៗដែលមិនត្រូវបានចាប់អារម្មណ៍ពីសារៈសំខាន់របស់វា ពីមុនមក។
          គំនិតផ្តួចផ្តើមនេះក៏ធ្វើឡើងក្នុងគោលបំណង ពង្រឹង នឹងជំរុញការគិតបែប
          វិទ្យាសាស្រ្តប្រកបដោយហេតុផល នឹង ការវិភាគច្បាស់លាស់។<br /><br />
          ទំនាក់ទំនង៖ សារអេឡិចត្រូនិច៖ teachingfordevelopment@gmail.com<br /><br />
          <b>TFD(Teaching For Development)</b><br />
          is a new initiative aiming at bringing uncovered facts that people
          might not be aware of to the public. This initiative also hopes to
          inspire scientific ways of thinking with logic and comprehensive
          analysis.
        </p>
        <div class="flex items-center justify-center mt-4">
          <a href="#" class="
              uppercase
              py-2
              my-2
              px-4
              rounded-md
              md:mt-16
              bg-transparent
              dark:text-gray-800 dark:bg-white
              hover:dark:bg-gray-100
              border-2 border-gray-800
              text-gray-800
              dark:text-white
              hover:bg-gray-800 hover:text-white
              text-md
            " @click="showLogin">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginLoading from "@/components/Loadings/login-loading";
export default {
  components: { LoginLoading },
  middleware: "guest",
  data() {
    return {
      logging: false,
      username: "",
      password: "",
      errorMsg: "",
      isSuccess: false,
      ifError: false,
    };
  },
  methods: {
    showLogin() {
      this.$modal.show("login");
    },
    async login() {
      this.$modal.hide("login");
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
        this.$modal.show("login");
        this.ifError = true;
        this.errorMsg = e.response.data.message;
      }
    },
  },
};
</script>
