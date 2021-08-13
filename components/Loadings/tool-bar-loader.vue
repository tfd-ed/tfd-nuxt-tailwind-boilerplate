<template>
  <ContentLoader
    :width="462"
    :height="80"
    viewBox="0 0 462 160"
    class="bg-white rounded-2xl"
  >
    <rect x="90" y="16" rx="5" ry="5" width="321" height="15" />
    <rect x="129" y="39" rx="5" ry="5" width="220" height="9" />
    <rect x="26" y="10" rx="0" ry="0" width="50" height="45" />
    <rect x="13" y="54" rx="0" ry="0" width="0" height="0" />
    <rect x="13" y="50" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
</template>
<script>
import { ContentLoader } from "vue-content-loader";
export default {
  name: "ToolBarLoader",
  components: { ContentLoader },
};
</script>
