<template>
  <div class="parent">
    <h1>This is the work I do.</h1>
    <div class="grid">
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <!-- <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "workHistory",
  mounted() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach((item) => {
      const random = Math.random();
      
      if (random < 0.3) {
        item.style.gridColumn = 'span 2';
        item.style.gridRow = 'span 2';
      } else if (random < 0.6) {
        item.style.gridColumn = 'span 2';
      } else if (random < 0.9) {
        item.style.gridRow = 'span 2';
      }
    });
},
}
</script>

<style lang="scss" scoped>
@import "/src/style/basic.scss";

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  grid-auto-flow: dense !important;
  justify-content: center;
  align-items: center;
}
.grid-item {
  max-width: 100%;
  height: 100%;
  /*height: 300px; */
  border-radius: 10px;
  border: 1px solid $accent;
  background: $surface;
  padding: 20px;
}

</style>
