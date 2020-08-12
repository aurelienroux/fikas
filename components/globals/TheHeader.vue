<template>
  <header class="header" :class="{ full: !windowTop }">
    <div class="header-container">
      <nuxt-link
        class="logo"
        :to="localePath('/')"
        exact
        @click.native="closeMenu"
      >
        <Logo />
      </nuxt-link>
      <div class="menu">
        <DropDown
          :title="$t('header.about')"
          :class="{ 'menu-active': currentMenu === menuEnum.about }"
        >
          <li>
            <nuxt-link
              class="menu-sublink"
              :to="localePath('/festival')"
              @click.native="changeCurrentMenu(menuEnum.about)"
            >
              {{ $t('header.festival') }}
            </nuxt-link>
            <nuxt-link
              class="menu-sublink"
              :to="localePath('/equipe')"
              @click.native="changeCurrentMenu(menuEnum.about)"
            >
              {{ $t('header.equipe') }}
            </nuxt-link>
            <nuxt-link
              class="menu-sublink"
              :to="localePath('/partenaires')"
              @click.native="changeCurrentMenu(menuEnum.about)"
            >
              {{ $t('header.partenaires') }}
            </nuxt-link>
          </li>
        </DropDown>
        <DropDown
          :title="$t('header.programmation')"
          :class="{ 'menu-active': currentMenu === menuEnum.prog }"
        >
          <li>
            <nuxt-link
              class="menu-sublink"
              to="/programmation"
              @click.native="changeCurrentMenu(menuEnum.prog)"
            >
              {{ $t('header.programmation') }}
            </nuxt-link>
            <nuxt-link
              class="menu-sublink"
              to="/offfikas"
              @click.native="changeCurrentMenu(menuEnum.prog)"
            >
              {{ $t('header.offfikas') }}
            </nuxt-link>
            <nuxt-link
              class="menu-sublink"
              to="/archives"
              @click.native="changeCurrentMenu(menuEnum.prog)"
            >
              {{ $t('header.archives') }}
            </nuxt-link>
          </li>
        </DropDown>
        <nuxt-link
          class="menu-link"
          :class="{ 'menu-active': currentMenu === menuEnum.contact }"
          :to="localePath('/contact')"
          @click.native="changeCurrentMenu(menuEnum.contact)"
        >
          {{ $t('header.contact') }}
        </nuxt-link>
      </div>
      <nuxt-link class="btn-lang" :to="switchLocalePath(switchLocale)">
        {{ switchLocale }}
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import DropDown from '@/components/DropDown'
import { menuEnum } from '@/store/menu'

export default Vue.extend({
  components: {
    DropDown
  },
  data() {
    return {
      openMenu: false,
      menuEnum,
      windowTop: true
    }
  },
  computed: {
    currentMenu() {
      return this.$store.state.menu.currentMenuLink
    },
    switchLocale() {
      return this.$i18n.locale === 'fr' ? 'en' : 'fr'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.tranparentMenu)
  },
  destroyed() {
    window.removeEventListener('scroll', this.tranparentMenu)
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
      this.$store.commit('menu/changeMenu', menuEnum.home)
    },
    changeCurrentMenu(link) {
      this.$store.commit('menu/changeMenu', link)
    },
    tranparentMenu() {
      if (window.scrollY === 0) {
        this.windowTop = true
      } else {
        this.windowTop = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: transparent;
  color: $white;
  display: none;
  font-family: Rubik;
  font-size: 1.8rem;
  font-weight: bold;
  height: 8rem;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: 0.3s;

  &.full {
    background-color: $aqua-blue;
  }

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
      position: relative;
      text-decoration: none;
    }

    &-active {
      border-bottom: 2px solid $white;
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
    align-items: center;
    background: transparent;
    color: $white;
    display: flex;
    padding: 0 2rem;
    position: relative;
    right: -2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu-sublink.nuxt-link-exact-active {
    background: $white;
    color: $charcoal-grey;
  }
}
</style>
