<template>
  <body>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>  
    <div id="main">
      <div id="container">
        <ul>
          <h2><img class="icon" src="https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/macchiato_squircle.png?raw=true">Maintainer at catppuccin</h2>
          <p><a href="https://github.com/catppuccin">https://github.com/catppuccin</a></p>
        </ul>
        <ul>
          <h2>dots <span>111 stars!</span></h2>
          <p><a href="https://github.com/Tnixc/dots">https://github.com/Tnixc/dots</a></p>
        </ul>
        <ul>
          <h2>This website</h2>
          <p>Who doesn't love a bit of recursion? <a href="https://main--tnixc.netlify.app/">https://main--tnixc.netlify.app/</a></p>
        </ul>
      </div>
    </div>
  </body>

</template>

<script>
export default {
  name: "workHistory",
};
</script>

<style lang="scss" scoped>



// n is number of stars required
@function multiple-box-shadow ($n) {
  $value: '#{random(2000)}px #{random(2000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}
$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
}
#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
  }
}
#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}
#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
};
#main{
  display: flex;
  justify-content: center;
  width: 100%;
}
body{
  height: 80vh;
  overflow: hidden;
}

#container{
  display: flex;
  max-width: $max-width;
  width: 100%;
  flex-direction: column;
}
ul{
  background: $surface;
  backdrop-filter: blur(10px);
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 0px 0px $secondary;
  transition: all 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
ul:hover{
  box-shadow: 0 0 0px 5px $secondary;
}
ul .icon{
  height: 42px;
  padding-right: 24px;
}
ul h2{
  display: flex;
  align-items: center;
}
a{
  padding-left: 0.9ch;
  text-decoration: none;
  color: $accent;
}
span{
  padding-left: 1ch;
  color: rgb(248, 233, 182);
}


</style>