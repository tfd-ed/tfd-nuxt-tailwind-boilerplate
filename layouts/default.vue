<template>
  <main
    class="
      dark:bg-gray-800
      font-sans
      bg-white
      relative
      h-screen
      overflow-auto overflow-y-scroll
    "
  >
    <NavBar />
    <nuxt />
  </main>
</template>
<script>
import NavBar from "~/components/NavBar/nav-bar";

export default {
  components: { NavBar },
};
</script>
