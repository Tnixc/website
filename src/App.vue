<!-- App.vue -->
<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
  </div>
</template>

<script>

import navBar from './components/nav-bar.vue'


export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style lang="scss">
@import "style/colors.scss";

body{
  background-color: $background;
  color: $text;
}

</style>
