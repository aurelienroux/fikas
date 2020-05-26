<template>
  <header class="header">
    <div class="header__top">
      <AppLogo />
      <AppIconClose icon-style="icon--menu" @click="displayMenu" />
    </div>
    <div class="header__menu" :class="{ open: openMenu }">
      <div>A propos</div>
      <div class="header__news">
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

export default Vue.extend({
  data() {
    return {
      openMenu: false
    }
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;
  color: $white;

  &__top {
    background-color: $aqua-blue;
    border: none;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: relative;
    width: 100%;
    z-index: 10;
  }

  &__menu {
    background-color: $aqua-blue;
    border: none;
    bottom: 0;
    left: -100%;
    padding: 2rem;
    position: absolute;
    top: 6rem;
    transition: 0.3s;
    width: 100%;
    z-index: 5;

    &.open {
      display: initial;
      left: 0;
    }
  }

  &__news {
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
