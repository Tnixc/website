<!-- App.vue -->
<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
    <bottomFooter />
    <component
      src="https://kit.fontawesome.com/56b651d75e.js"
      :is="'script'"
    ></component>
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
import bottomFooter from "./components/footer.vue";

export default {
  name: "App",
  components: {
    navBar,
    bottomFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");
* {
  font-family: "Space mono", sans-serif;
}
</style>

<style lang="scss">
body {
  background-color: $background;
  color: $text;
  padding-inline: 20px;
}
</style>
