<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <nuxt-img src="/tfd-logo.png" class="w-8" />
    </div>
    <div class="navbar-end">
      <label for="login-modal"
        ><ShadowButton text="login" color="bg-blue-700" />
      </label>
    </div>
  </div>
</template>
<script>
import ShadowButton from "~/components/button/shadow-button";
export default {
  name: "NavBar",
  components: { ShadowButton },
};
</script>
