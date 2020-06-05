<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link to="/" exact class="logo" @click.native="closeMenu">
        <AppLogo />
      </nuxt-link>
      <div class="menu">
        <div class="menu-link">
          A propos
          <AppIconMenuDrop />
          <ul class="menu-dropdown">
            <li>
              <nuxt-link class="menu-sublink" to="/festival">
                le festival
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="menu-link">
          Programmation
          <AppIconMenuDrop />
          <ul class="menu-dropdown">
            <li>
              <nuxt-link class="menu-sublink" to="/archives">
                archives
              </nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link to="/contact" class="menu-link">Contact</nuxt-link>
      </div>
      <button class="btn-lang">EN</button>
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

  @include for-tablet-landscape-up {
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

    &-link {
      align-items: center;
      color: $white;
      cursor: pointer;
      display: flex;
      height: 100%;
      padding: 0 2rem;
      text-decoration: none;
      position: relative;

      &:hover {
        color: $charcoal-grey;
        background: $white;
      }
    }

    &-dropdown {
      background-color: $aqua-blue;
      border-top: 0.2rem solid $white;
      left: 0;
      list-style-type: none;
      padding: 0;
      position: absolute;
      top: calc(100% - 0.2rem);
      width: 100%;
    }

    &-sublink {
      color: $white;
      display: block;
      font-size: 1.4rem;
      font-weight: normal;
      padding: 1rem 2rem;
      text-decoration: none;

      &:hover {
        color: $charcoal-grey;
        background: $white;
      }
    }
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

  .nuxt-link-exact-active {
    background: red;
  }
  .nuxt-link-active {
    border: 2px solid lime;
  }
}
</style>
