<template>
  <div
    class="
      relative
      inline-block
      group
      focus:outline-none focus:ring
      cursor-pointer
    "
  >
    <span
      class="
        absolute
        inset-0
        transition-transform
        translate-x-0 translate-y-0
        bg-tfd
        group-hover:translate-y-1.5 group-hover:translate-x-1.5
      "
    ></span>

    <span
      class="
        relative
        inline-block
        px-8
        py-3
        text-sm
        font-bold
        tracking-widest
        uppercase
        border-2 border-black
        text-white
      "
      @click="handleClick"
    >
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: "ShadowButton",
  props: ["text"],
  emits: ["onClick"],
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>
