<template>
  <div>
    <Header/>
    <div class="wrap">
      <Menu/>
      <Content/>
    </div>
    <div>
      <Box color="blue"/>
      <Box color="purple"/>
      <Box color="green"/>
      <Box color="blue"/>
      <Box color="purple"/>
      <Box/>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Content from "./components/Content";
import Box from "./components/Box";

export default {
  name: "App",
  components: {
    Menu,
    Content,
    Box,
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
}
</style>