<template>
  <navBar/>
</template>

<script>
import navBar from "./components/nav.vue";

export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
@import "css/colors.css";

body{
  background-color: var(--background);
}

</style>
