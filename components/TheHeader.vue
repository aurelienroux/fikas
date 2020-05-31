<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link to="/" class="logo" @click.native="closeMenu">
        <AppLogo />
      </nuxt-link>
      <div class="menu">
        <div class="menu-link">
          A propos
          <AppIconMenuDrop />
          <!-- <ul>
          <li><nuxt-link to="/">a</nuxt-link></li>
          <li><nuxt-link to="/">a</nuxt-link></li>
          <li><nuxt-link to="/">a</nuxt-link></li>
        </ul> -->
        </div>
        <div class="menu-link">
          Programmation
          <AppIconMenuDrop />
          <!-- <ul>
          <li><nuxt-link to="/">a</nuxt-link></li>
          <li><nuxt-link to="/">a</nuxt-link></li>
          <li><nuxt-link to="/">a</nuxt-link></li>
        </ul> -->
        </div>
        <nuxt-link to="/contact" class="menu-link">Contact</nuxt-link>
      </div>
      <button class="btn-lang">EN</button>
      <!-- <AppIconMenu :icon-style="openMenu" @click="displayMenu" /> -->
    </div>
    <!-- <div class="menu" :class="{ open: openMenu }">
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
    </div> -->
  </header>
</template>

<script>
import Vue from 'vue'
// import AppDrawer from '@/components/AppDrawer'

export default Vue.extend({
  // components: {
  //   AppDrawer
  // },
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
.header {
  align-items: center;
  background-color: $aqua-blue;
  color: $white;
  display: none;
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;
  height: 8rem;
  position: fixed;
  width: 100%;

  @include for-tablet-portrait-up {
    display: initial;
  }

  &-container {
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: 120rem;
    padding: 0 2rem;
    position: relative;
    width: 100%;
  }

  .logo {
    align-items: center;
    display: flex;
    margin-right: 2rem;
  }

  & .menu {
    align-items: stretch;
    display: flex;
    flex: 1;
  }

  & .menu-link {
    align-items: center;
    color: $white;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0 2rem;
    text-decoration: none;
  }

  & .btn-lang {
    background: transparent;
    border: none;
    color: $white;
    cursor: pointer;
    font-weight: bold;
    height: 100%;
    padding: 0 2rem;
    position: relative;
    right: -2rem;
  }
}
</style>
