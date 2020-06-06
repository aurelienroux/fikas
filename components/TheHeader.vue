<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link to="/" exact class="logo" @click.native="closeMenu">
        <AppLogo />
      </nuxt-link>
      <div class="menu">
        <AppDropDown
          title="A propos"
          :class="{ 'active-menu': currentMenu === 'about' }"
        >
          <li>
            <nuxt-link
              class="menu-sublink"
              to="/festival"
              @click.native="changeCurrentMenu('about')"
            >
              le festival
            </nuxt-link>
            <nuxt-link
              class="menu-sublink"
              to="/test"
              @click.native="changeCurrentMenu('about')"
            >
              le festival
            </nuxt-link>
          </li>
        </AppDropDown>
        <AppDropDown
          title="Programmation"
          :class="{ 'active-menu': currentMenu === 'prog' }"
        >
          <li>
            <nuxt-link
              class="menu-sublink"
              to="/archives"
              @click.native="changeCurrentMenu('prog')"
            >
              archives
            </nuxt-link>
          </li>
        </AppDropDown>
        <nuxt-link
          to="/contact"
          class="menu-link"
          :class="{ 'active-menu': currentMenu === 'contact' }"
          @click.native="changeCurrentMenu('contact')"
        >
          Contact
        </nuxt-link>
      </div>
      <button class="btn-lang">EN</button>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import AppDropDown from '@/components/AppDropDown'

export default Vue.extend({
  components: {
    AppDropDown
  },
  data() {
    return {
      openMenu: false
    }
  },
  computed: {
    currentMenu() {
      return this.$store.state.menu.currentMenuLink
    }
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
      this.$store.commit('menu/change', 'home')
    },
    changeCurrentMenu(link) {
      this.$store.commit('menu/changeMenu', link)
    }
  }
})
</script>

<style lang="scss" scoped>
.active-menu {
  border-bottom: 2px solid $white !important;
}
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
      border-bottom: 2px solid $aqua-blue;
    }

    &-sublink {
      color: $white;
      display: block;
      font-size: 1.4rem;
      font-weight: normal;
      padding: 1rem 2rem;
      position: relative;
      text-decoration: none;

      &::after {
        background-color: $white;
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        left: 0;
        position: absolute;
        width: 20px;
      }

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

  .menu-sublink.nuxt-link-exact-active {
    background: $white;
    color: $charcoal-grey;
  }
}
</style>
