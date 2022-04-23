<template>
  <div class="h-full w-full container mx-auto justify-items-center">
    <div class="relative">
      <div
        class="
          absolute
          flex flex-row
          justify-center
          mt-72
          inset-x-0
          w-3/4
          md:w-2/5
          mx-auto
          rounded-lg rounded-t-none
        "
      >
        <HalfCircleSpinner
          :animation-duration="1000"
          :size="65"
          color="#10b981"
        />
        <div class="text-md text-blue font-bold self-center px-4">
          <article>Logging In</article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "LoginLoading",
  components: { HalfCircleSpinner },
};
</script>
