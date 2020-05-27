<template>
  <header class="header">
    <div class="top">
      <AppLogo />
      <AppIconMenu :icon-style="openMenu" @click="displayMenu" />
    </div>
    <div class="menu" :class="{ open: openMenu }">
      <AppDrawer title="A propos">
        <nuxt-link class="menu-sublink" to="/">Le festival</nuxt-link>
        <nuxt-link class="menu-sublink" to="/">L equipe</nuxt-link>
        <nuxt-link class="menu-sublink" to="/">Partenaires</nuxt-link>
      </AppDrawer>
      <AppDrawer title="Programmation">
        <nuxt-link class="menu-sublink" to="/">testtest</nuxt-link>
      </AppDrawer>
      <nuxt-link class="menu-link" to="/">Contact</nuxt-link>
      <div class="news">
        <AppBtn btn-style="button--full">
          S'inscrire a l infolettre
        </AppBtn>
      </div>
      <div class="social">
        <AppBtnFacebook />
        <AppBtnInsta />
        <AppBtnYoutube />
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import AppDrawer from '@/components/AppDrawer'

export default Vue.extend({
  components: {
    AppDrawer
  },

  data() {
    return {
      openMenu: true
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
  color: $white;
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;

  & .top {
    background-color: $aqua-blue;
    border: none;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: relative;
    width: 100%;
    z-index: 10;
  }

  & .menu {
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
      display: fixed;
      left: 0;
    }
  }

  & .menu-link {
    color: $white;
    display: block;
    padding: 1.5rem 0;
    text-decoration: none;
  }

  & .news {
    display: block;
    margin: 4rem 0 4rem;
    text-align: center;
  }

  & .social {
    display: flex;
    justify-content: center;

    a {
      margin: 0 2rem;
    }
  }
}
</style>
