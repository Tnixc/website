<template>
  <div id="main-container">
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    <main>
      <div class="left">
        <h1 class="title">
          Haiiii, I'm Tnixc
          <p>he/him</p>
        </h1>
        <h2>15 year old from Hong Kong, living in Canada</h2>
        <h4>
          I do coding stuff sometimes. Also I like watching anime, reading
          books/webtoons, drawing, and playing video games.
        </h4>
      </div>
      <h1 class="subtitle">> Stuff I know:</h1>
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
                  <h4>The vanilla way</h4>
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
      <h1 class="subtitle contact">> Links/Contact</h1>
      <div class="left">
        <ol>
          <li>  
            <i class="fa-brands fa-github"></i
            ><a href="https://github.com/Tnixc"
              >Tnixc<i class="fa-solid fa-up-right-from-square"></i
            ></a>
          </li>
          <li>
            <i class="fa-brands fa-discord"></i>
            <a id="copy-discord">Tnixc<i class="fa-solid fa-copy"></i></a>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <a id="copy-email"
              >tnixxc@gmail.com<i class="fa-solid fa-copy"></i
            ></a>
          </li>
        </ol>
      </div>
    </main>
  </div>
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
    function copyToClipboardAndChangeIcon(textId, iconClass) {
      var textElement = document.getElementById(textId);
      var textToCopy = textElement.textContent;
      var iconElement = textElement.querySelector(".fa-copy");

      var textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);

      iconElement.classList.remove("fa-copy");
      iconElement.classList.add(iconClass);

      setTimeout(function () {
        iconElement.classList.remove(iconClass);
        iconElement.classList.add("fa-copy");
      }, 1000); // Change back to "fa-copy" after 1 second
    }

    document
      .getElementById("copy-discord")
      .addEventListener("click", function () {
        copyToClipboardAndChangeIcon("copy-discord", "fa-check");
      });

    document
      .getElementById("copy-email")
      .addEventListener("click", function () {
        copyToClipboardAndChangeIcon("copy-email", "fa-check");
      });
  },
};
</script>

<style lang="scss" scoped>
@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
    overflow: hidden;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
}

.star {
  $star-count: 50;
  --star-color: var(--primary-color);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
    tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @include sp-layout {
    // For mobile performance, tail-fade animation will be removed QAQ
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }

  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{calc(random_range(500em, 750em) / 100)};
      --top-offset: #{calc(random_range(0vh, 10000vh) / 100)};
      --fall-duration: #{calc(random_range(6000, 12000s) / 1000)};
      --fall-delay: #{calc(random_range(0, 10000s) / 1000)};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes tail-fade {
  0%,
  50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%,
  80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
.left > ol {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  gap: 5px;
}
.left > ol > li {
  background: $surface;
  width: max-content;
  backdrop-filter: blur(10px);
  padding: 12px;
  border: 1px solid $secondary;
  border-radius: 12px;
  position: relative;
}
.left > ol > li > i {
  width: 30px;
  display: inline-flex;
  justify-content: center;
  color: $primary;
}
.left > ol > li > a {
  color: $primary;
  text-decoration: none;
  cursor: pointer;
}
.left > ol > li > a > i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-40%);
  z-index: -1;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
}
.left > ol > li > a:hover > i {
  transform: translateY(-50%) translateX(120%);
  opacity: 1;
}

#main-container {
  margin-top: 80px;
  display: grid;
  justify-content: center;
}
main {
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: $max-width;
}
.left {
  width: 100%;
}
.left > h4 {
  opacity: 0.65;
}
.contact {
  padding-top: 30px;
}
.title {
  font-family: "Space Grotesk", monospace;
  font-weight: 700;
  font-size: 300%;
}
p {
  font-weight: 400;
  font-size: 40%;
  display: inline-block;
  background: $surface;
  padding-inline: 5px;
  border-radius: 5px;
  backdrop-filter: blur(20px);
  font-family: "Space Grotesk", monospace;
}

.subtitle {
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
  background-color: $surface;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 100px;
  flex-direction: column;
  position: relative;
  width: 300px;
  cursor: default !important;
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
  transition: opacity 250ms;
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
  #cards {
    flex-grow: 1;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .card {
    width: calc(100% - 4px);
  }
}
</style>

<style scoped></style>
