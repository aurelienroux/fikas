<template>
  <header class="header-mobile">
    <div class="top">
      <nuxt-link to="/" @click.native="closeMenu">
        <AppLogo />
      </nuxt-link>
      <AppIconMenu :icon-style="openMenu" @click="displayMenu" />
    </div>
    <div class="menu" :class="{ open: openMenu }">
      <AppDrawer title="A propos">
        <nuxt-link class="menu-sublink" to="/" @click.native="closeMenu">
          Le festival
        </nuxt-link>
        <nuxt-link class="menu-sublink" to="/" @click.native="closeMenu">
          L equipe
        </nuxt-link>
        <nuxt-link class="menu-sublink" to="/" @click.native="closeMenu">
          Partenaires
        </nuxt-link>
      </AppDrawer>
      <AppDrawer title="Programmation">
        <nuxt-link class="menu-sublink" to="/" @click.native="closeMenu">
          testtest
        </nuxt-link>
      </AppDrawer>
      <nuxt-link class="menu-link" to="/contact" @click.native="closeMenu">
        Contact
      </nuxt-link>
      <button class="btn-lang">EN</button>
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
      openMenu: false
    }
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
    }
  }
})
</script>

<style lang="scss" scoped>
.header-mobile {
  color: $white;
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;
  position: fixed;
  width: 100%;

  @include for-tablet-landscape-up {
    display: none;
  }

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
    height: 100vh;
    left: -100%;
    padding: 2rem;
    position: absolute;
    top: 6rem;
    transition: 0.3s;
    width: 100%;
    z-index: 5;

    &.open {
      left: 0;
    }
  }

  & .menu-link,
  & .btn-lang {
    color: $white;
    padding: 1.5rem 0;
  }

  & .menu-link {
    display: block;
    text-decoration: none;
  }

  & .btn-lang {
    background: transparent;
    border: none;
    font-weight: bold;
    text-align: left;
    width: 100%;
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
