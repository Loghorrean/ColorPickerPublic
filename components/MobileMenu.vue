<template>
  <div :class="{ active: menuActive }" class="navigation">
    <div class="navigation__menu">
      <Hamburger />
    </div>
    <div class="navigation__background"></div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__element navigation__element--first">
          <NuxtLink to="/">
            <img style="height: 10rem; width: 10rem" src="/logo.png" alt="Логотип" />
          </NuxtLink>
        </li>
        <li class="navigation__element">
          <NuxtLink to="/contacts" class="navigation__link">Контакты</NuxtLink>
        </li>
        <li class="navigation__element">
          <NuxtLink to="/how-it-works" class="navigation__link">Как это работает</NuxtLink>
        </li>
        <li class="navigation__element">
          <NuxtLink to="/auth/login" class="navigation__link">Авторизация</NuxtLink>
        </li>
        <li class="navigation__element">
          <NuxtLink to="/auth/registration" class="navigation__link">Регистрация</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hamburger from '~/components/Hamburger.vue'

export default Vue.extend({
  name: 'MobileMenu',
  components: {
    Hamburger,
  },
  computed: {
    menuActive() {
      return this.$store.state.mobileMenuState.mobileMenuActive
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/css/base/colors';
@import 'assets/css/base/mixins';

.navigation {
  &__index-link {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__menu {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 40;
  }

  &__background {
    height: 0;
    width: 0;
    border-radius: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transition: 0.5s all;
    transform: translate(-50%, -50%);
    background-image: radial-gradient($color-primary, $color-secondary);
    z-index: 10;

    .active & {
      height: 6rem;
      width: 6rem;
      transform: scale(40);
    }
  }

  &__nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    opacity: 0;
    transition: 0.4s all;
    transform: scale(0);
    @include flexCenter();

    .active & {
      opacity: 1;
      transform: scale(1);
    }
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    text-align: center;
  }

  &__element {
    &:not(:last-child) {
      margin-bottom: clamp(1rem, 2vw, 3rem);
    }
  }

  &__link {
    display: inline-block;
    width: 100%;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: $color-white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 2rem;
    transition: 0.4s all;

    &:hover {
      background-color: $color-black;
    }
  }
}
</style>
