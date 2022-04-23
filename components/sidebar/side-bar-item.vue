<template>
  <NuxtLink
    :id="name"
    :to="link"
    class="
      w-full
      dark:text-white
      flex
      items-center
      pl-6
      p-2
      my-2
      transition-colors
      duration-200
      justify-start
      border-l-4
    "
  >
    <slot></slot>
    <span class="mx-2 text-sm font-normal"> {{ name }} </span>
  </NuxtLink>
</template>
<script>
export default {
  name: "SideBarItem",
  props: ["name", "link"],
};
</script>
