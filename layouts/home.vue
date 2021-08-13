<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <SideBar></SideBar>
      <div class="flex flex-col w-full md:space-y-4">
        <NavBarHome></NavBarHome>
        <nuxt></nuxt>
      </div>
    </div>
  </main>
</template>
<script>
import NavBarHome from "../components/NavBar/nav-bar-home";
import SideBar from "../components/SideBar/side-bar";
export default {
  components: { SideBar, NavBarHome },
};
</script>
