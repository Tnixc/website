<!-- App.vue -->
<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
    <bottomFooter />
  </div>
</template>

<script>

import navBar from './components/nav-bar.vue'
import bottomFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    bottomFooter
  }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}


</style>

<style lang="scss" >

body{
  background-color: $background;
  color: $text;

}
</style>
