<template>
  <div class="preloader">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Preloader',
})
</script>

<style lang="scss" scoped>
@import 'assets/css/base/colors';
@import 'assets/css/base/animations';

.preloader {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100%;
  background-color: $color-black;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  min-width: 100px;
  min-height: 100px;
  display: grid;
  grid-gap: 7px;
  grid-template-columns: repeat(3, 1fr);

  & div {
    padding: 3px;
    background-color: $color-primary;
    border-radius: 50%;
    animation: preloader-grid 1.2s linear infinite;

    $animationConfig: 1 0, 2 -0.4, 3 -0.8, 4 -0.4, 5 -0.8, 6 -1.2, 7 -0.8,
      8 -1.2, 9 -1.6;

    @each $tuple in $animationConfig {
      &:nth-child(#{nth($tuple, 1)}) {
        animation-delay: nth($tuple, 2) + s;
      }
    }
  }
}
</style>
