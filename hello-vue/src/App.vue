<template>
  <div>
    <BlogHeader/>
    <BlogContent/>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader";
import BlogContent from "@/components/BlogContent";

export default {
  name: "App",
  components: {
    BlogHeader,
    BlogContent,
  },
}
</script>

<style scoped>
.wrap {
  display: flex;
}
</style>