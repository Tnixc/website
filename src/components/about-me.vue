<template>
  <container>
    <main>
      <left>
        <h1 class="title">Haii, I'm Tnixc <p>he/him</p></h1>
        <h2>15 year old from Hong Kong, living in Canada</h2>
        <h4>I do coding stuff sometimes. Also I like watching anime, reading books/webtoons, drawing, and playing video games</h4>
      </left>
      <h1 class="subtitle">Stuff I know:</h1>
      <div id="cards">
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-solid fa-code-merge"></i>
              <div class="card-info-title">
                <h3>Git</h3>
                <h4>and github too!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-brands fa-css3-alt"></i>
              <div class="card-info-title">
                <h3>CSS</h3>
                <h4>This is not hell</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-brands fa-html5"></i>
              <div class="card-info-title">
                <h3>HTML</h3>
                <h4>Vanilla</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-brands fa-square-js"></i>
              <div class="card-info-title">
                <h3>JavaScript</h3>
                <h4>Not good at javascript at all</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-brands fa-vuejs"></i>
              <div class="card-info-title">
                <h3>Vue</h3>
                <h4>Used it for this website!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-brands fa-python"></i>
              <div class="card-info-title">
                <h3>Python</h3>
                <h4>I think I actually know this</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  </container>
</template>

<script>
export default {
  name: "aboutMe",
  mounted() {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  },
};
</script>

<style lang="scss" scoped>

container{
  display: grid;
  justify-content: center;
}
main{
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
}
left{
  width: 100%;
}
left > h4{
  opacity: 0.65;
}
.title{
  font-family: "Space Grotesk", monospace;
  font-weight: 700;
  font-size: 300%;
}
p{
  font-weight: 400;
  font-size: 40%;
  display: inline-block;
  background: #282A34;
  padding-inline: 5px;
  border-radius: 5px;
  backdrop-filter: blur(20px);
  font-family: "Space Grotesk", monospace;

}

.subtitle{
  font-family: "Space Grotesk", monospace;
  font-weight: 700;
  font-size: 200%;
  width: 100%;
}
#cards {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: calc(100% - 20px);
}

#cards:hover > .card::after {
  opacity: 1;
}

.card {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 100px;
  flex-direction: column;
  position: relative;
  width: 300px;
}

.card:hover::before {
  opacity: 1;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.1),
    transparent 40%
  );
  z-index: 3;
}

.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    hsl(227, 41%, 49%, 0.4),
    transparent 40%
  );
  z-index: 1;
}

.card > .card-content {
  background-color: #11111188;
  opacity: 1;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 10px;
  position: absolute;
  z-index: 2;
}

/* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */

h1,
h2,
h3,
h4,
span {
  color: $text;
  font-weight: 400;
  margin: 0px;
}

.card-info-wrapper {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 0px 20px;
}

.card-info {
  align-items: flex-start;
  display: flex;
  gap: 10px;
}

.card-info > i {
  font-size: 1em;
  height: 20px;
  line-height: 20px;
}

.card-info-title > h3 {
  font-size: 1.1em;
  line-height: 20px;
}

.card-info-title > h4 {
  color: $text;
  opacity: 0.7;
  font-size: 0.85em;
  margin-top: 8px;
}

/* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */


@media (max-width: 100px) {
  #cards{
    flex-grow: 1;
    flex-direction: column;
    flex-wrap: nowrap;
}
  .card{
    width: calc(100% - 4px);
  }
}
</style>

<style scoped></style>
