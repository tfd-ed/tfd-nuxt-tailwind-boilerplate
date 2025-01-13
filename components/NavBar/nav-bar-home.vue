<template>
  <section class="w-full h-16 z-40 flex items-center justify-between">
    <ChangePassword></ChangePassword>
    <div class="block lg:hidden ml-6">
      <button class="
          flex
          p-2
          items-center
          rounded-full
          bg-white
          shadow
          text-gray-500 text-md
        ">
        <svg width="20" height="20" class="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
          </path>
        </svg>
      </button>
    </div>
    <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
      <div class="relative p-1 flex items-center w-full space-x-4 justify-end">
        <button class="
            flex
            items-center
            text-gray-500
            dark:text-white
            text-md
            capitalize
          " @click="showChange">
          change password
        </button>
        <span class="w-1 h-8 rounded-lg bg-gray-200"> </span>
        <a href="#" class="block relative">
          <nuxt-img alt="profil" :src="'https://avatars.dicebear.com/api/male/' +
            loggedInUser.username +
            '.svg?background=%230000ff'
            " class="mx-auto object-cover rounded-full h-10 w-10" />
        </a>
        <button class="flex items-center text-gray-500 dark:text-white text-md">
          {{ loggedInUser.name }}
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import ChangePassword from "@/components/Forms/change-password";

export default {
  name: "NavBarHome",
  components: { ChangePassword },
  computed: {
    ...mapGetters({
      loggedInUser: "loggedInUser",
    }),
  },
  methods: {
    showChange() {
      this.$modal.show("change-password");
    },
  },
};
</script>
