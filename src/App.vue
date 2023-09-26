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
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

*{
  font-family: 'Quicksand', sans-serif;
}
</style>

<style lang="scss" >

body{
  background-color: $background;
  color: $text;
}
</style>
