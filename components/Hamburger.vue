<template>
  <div
    :class="{ active: menuActive }"
    class="hamburger"
    @click="openMobileMenu"
  >
    <div class="bar-1"></div>
    <div class="bar-2"></div>
    <div class="bar-3"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hamburger',
  data() {
    const hamburgerOpen: boolean = false

    return {
      hamburgerOpen,
    }
  },
  computed: {
    menuActive() {
      return this.$store.state.mobileMenuState.mobileMenuActive
    },
  },
  methods: {
    openMobileMenu() {
      this.hamburgerOpen = !this.hamburgerOpen
      this.$store.commit('mobileMenuState/set', this.hamburgerOpen)
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/css/base/colors';

.hamburger {
  cursor: pointer;

  @media screen and (min-width: 41.25em) {
    display: none;
  }
}

@each $number in '1', '2', '3' {
  .bar-#{$number} {
    width: 2.5rem;
    height: 0.3rem;
    background-color: $color-black;
    margin: 6px 0;
    transition: 0.4s all;
  }
}

.active .bar-1 {
  transform: rotate(-45deg) translate(-9px, 6px);
}

.active .bar-2 {
  opacity: 0;
}

.active .bar-3 {
  transform: rotate(45deg) translate(-7px, -4px);
}
</style>
