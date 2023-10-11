<template>
  <main>
  <div class="container">
    <a>Made with <i class="fa-brands fa-vuejs"></i>and &lt;3</a>
    <a href="https://github.com/Tnixc/vue-app">Credits + Source on github<i class="fa-brands fa-github"></i></a>
  </div></main>
</template>

<script>
export default {
  name: "bottomFooter",
};
</script>

<style lang="scss" scoped>


.container{
  z-index: 9999;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: $max-width;
}
a{
  display: inline-flex;
  justify-content: center;
  gap: 10px;
  color: $accent;
  text-decoration: none;
  transition: all 240ms;
}
div>a:nth-child(2):hover{
  background: $secondary;
}
i{
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px){
  .container{
    flex-direction: column;
  }
}
main{
  display: flex;
  justify-content: center;
}
</style>

