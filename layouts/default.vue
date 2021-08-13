<template>
  <main
    class="
      dark:bg-gray-800
      font-sans
      bg-white
      relative
      overflow-hidden
      h-screen
    "
  >
    <NavBar></NavBar>
    <nuxt />
  </main>
</template>
<script>
import NavBar from "../components/NavBar/nav-bar";
export default {
  components: { NavBar },
};
</script>
