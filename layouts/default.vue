<template>
  <div>
    <CommonHeader />
    <MobileMenu />
    <Nuxt />
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonFooter from '~/components/CommonFooter.vue'
import CommonHeader from '~/components/CommonHeader.vue'
import MobileMenu from '~/components/MobileMenu.vue'

export default Vue.extend({
  components: {
    CommonHeader,
    CommonFooter,
    MobileMenu,
  },
})
</script>

<style>
html {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
