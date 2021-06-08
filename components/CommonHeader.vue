<template>
  <header class="header container">
    <nav class="header__navigation">
      <NuxtLink to="/">
        <img style="height: 7rem; width: 7rem" src="/logo.png" alt="Логотип" />
      </NuxtLink>
      <div class="header__navigation-links">
        <div class="header__navigation-links-wrapper">
          <NuxtLink class="header__navigation-link" to="/contacts">
            <span class="header__navigation-link-text">Контакты</span>
          </NuxtLink>
          <NuxtLink class="header__navigation-link" to="/how-it-works">
            <span class="header__navigation-link-text"
              >Как работает сервис</span
            >
          </NuxtLink>
          <div class="header__navigation-dropdown-holder">
            <a class="header__navigation-link" href="#">
              <span class="header__navigation-link-text">Кабинет</span>
            </a>
            <div class="header__navigation-dropdown">
              <NuxtLink class="header__navigation-link" to="/auth/register">
                <span class="header__navigation-link-text"
                  >Зарегистрироваться</span
                >
              </NuxtLink>
              <NuxtLink class="header__navigation-link" to="/auth/login">
                <span class="header__navigation-link-text">Войти</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <Hamburger />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Hamburger from '~/components/Hamburger.vue'

export default Vue.extend({
  name: 'CommonHeader',
  components: {
    Hamburger,
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/css/base/colors';
@import 'assets/css/base/mixins';

.header {
  height: 7.2rem;
  position: sticky;

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      transition: all 0.4s;
      overflow: hidden;
      left: 100%;
      right: 0;
    }

    &-dropdown-holder {
      height: 100%;
      position: relative;

      &:hover {
        .header__navigation-dropdown {
          opacity: 1;
          left: -11.5rem;
        }
      }
    }

    &-links {
      &-wrapper {
        display: none;

        @media screen and (min-width: 41.25em) {
          display: flex;
          align-items: center;
        }
      }
    }

    &-link {
      height: 7.2rem;
      padding: 0 1.2rem;
      text-decoration: none;
      color: $color-black;
      transition: 0.4s background-color;
      @include inlineFlexCenter();

      &:hover {
        background-color: darken($color-white, 15%);
      }

      &-text {
        font-size: 1.8rem;
        font-family: 'Montserrat', sans-serif;
      }
    }
  }
}
</style>
