<template>
  <div class="container">
    <a>Made with <i class="fa-brands fa-vuejs"></i></a>
    <a href="https://github.com/Tnixc/vue-app">Source on github<i class="fa-brands fa-github"></i></a>
  </div>
</template>

<script>
export default {
  name: "bottomFooter",
};
</script>

<style lang="scss" scoped>
.container{
  z-index: 9999;
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
}
a{
  display: inline-flex;
  justify-content: center;
  gap: 10px;
  color: $accent;
  text-decoration: none;
}
i{
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>

