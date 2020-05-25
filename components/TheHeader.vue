<template>
  <header class="header">
    <div class="header--top">
      <AppLogo />
      <AppIconClose icon-style="icon--menu" />
    </div>
    <div class="header--menu">
      <div>
        A propos
      </div>
      <div class="header__button">
        <AppBtn btn-style="button--full">
          S'inscrire a l infolettre
        </AppBtn>
      </div>
      <div class="header__social">
        <AppBtnFacebook />
        <AppBtnInsta />
        <AppBtnYoutube />
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.header {
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;
  color: $white;

  &--top {
    background-color: $aqua-blue;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: relative;
    width: 100%;
    z-index: 10;
  }

  &--menu {
    background-color: $aqua-blue;
    bottom: 0;
    left: 0;
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 6rem;
    z-index: 5;
  }

  &__button {
    display: block;
    margin: 4rem 0 4rem;
    text-align: center;
  }

  &__social {
    display: flex;
    justify-content: center;

    a {
      margin: 0 2rem;
    }
  }
}
</style>
