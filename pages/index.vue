<template>
  <div class="flex relative items-center">
    <LoginModal />
    <div class="container px-5 py-12 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <nuxt-img src="/tfd-logo.png" class="w-20 mx-auto mb-12" />
        <p
          class="
            max-w-3xl
            text-lg
            md:text-md
            mx-auto
            dark:text-white
            text-gray-800
            py-2
            text-left
            leading-loose
          "
          v-html="$t('tfd_mission')"
        ></p>
      </div>
      <Registration />
    </div>
  </div>
</template>

<script>
import LoginModal from "~/components/Forms/login-modal";
import Registration from "~/components/forms/registration";
export default {
  components: { Registration, LoginModal },
  middleware: "guest",
};
</script>
