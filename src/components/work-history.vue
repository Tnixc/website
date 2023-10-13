<template>
  <body>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>  
    <div id="main">
      <div id="container">
        <ul>
          <h2><img class="icon" src="https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/macchiato_squircle.png?raw=true">Maintainer at catppuccin<div class="badges-container"><img class="badge" src="https://img.shields.io/badge/CSS3-31738F?style=for-the-badge&logo=css3&logoColor=white"></div></h2>
          <p>A high-spirited pastel color scheme at ~<a href="https://github.com/catppuccin">https://github.com/catppuccin</a></p>
        </ul>
        <ul>
          <h2>dots ~  <span>111 stars!</span></h2>
          <p><a href="https://github.com/Tnixc/dots">https://github.com/Tnixc/dots</a></p>
        </ul>
        <ul>
          <h2>This website <div class="badges-container"><img class="badge" src="https://img.shields.io/badge/Netlify-44948d?style=for-the-badge&logo=netlify&logoColor=white"><img class="badge" src="https://img.shields.io/badge/Vue%20js-3c8565?style=for-the-badge&logo=vuedotjs&logoColor=white" alt=""></div></h2>
          <p>Who doesn't love a bit of recursion? <a href="https://tnixc.space/">https://tnixc.space/</a></p>
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
.badges-container{
  display: inline-flex;
  margin-right: 20px;
  margin-left: auto;
  gap: 5px;
  background: $secondary;
  border-radius: 13px;
  padding: 5px;
}

.badge{
  border-radius: 8px;
}



@media screen and (max-width: 500px){
  p{ font-family: 90%;}
  ul{
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
  main,body{
    padding-inline: 0;
  }
  h2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  ul .icon{
  padding: 0 !important;
}
  .badges-container{
  display: inline-flex;
  gap: 5px;
  background: $secondary;
  border-radius: 13px;
  padding: 5px;
  margin: 0;
}
}
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

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 100vh;
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
    top: 100vh;
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
    top: 100vh;
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
    transform: translateY(-100vh);
  }
};
#main{
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 10px;
}
body{
  height: 100vh;
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