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

<style>
@import "css/colors.css";

body{
  background-color: var(--background);
  color: var(--text);
}

</style>
