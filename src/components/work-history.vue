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
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
      <div class="grid-item">This is a grid item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workHistory'
}
</script>

<style lang="scss" scoped>
@import "/src/style/basic.scss";
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 50px; /* Adjust the gap between grid items as needed */
  justify-content: center;
  align-items: center;
}

.grid-item {
  max-width: 100%;
  height: 300px;
  background: $surface;
}

</style>
