<template>
  <header class="header-mobile">
    <div class="top">
      <nuxt-link :to="localePath('/')" exact @click.native="closeMenu">
        <Logo />
      </nuxt-link>
      <IconMenu :icon-style="openMenu" @click="displayMenu" />
    </div>

    <div class="menu" :class="{ open: openMenu }">
      <!-- dropdown links layout -->
      <Drawer
        v-for="(dropdown, index) in navData.dropdowns"
        :key="index"
        :title="dropdown.text"
      >
        <nuxt-link
          v-for="(link, indexText) in dropdown.links"
          :key="indexText"
          class="menu-sublink"
          :to="`/${link.link.cached_url}`"
          @click.native="closeMenu"
        >
          {{ link.text }}
        </nuxt-link>
      </Drawer>

      <!-- single links layout -->
      <nuxt-link
        v-for="(link, index) in navData.links"
        :key="index + '-link'"
        class="menu-link"
        :to="`/${link.link.cached_url}`"
        @click.native="closeMenu"
      >
        {{ link.text }}
      </nuxt-link>

      <!-- lang switcher -->
      <nuxt-link
        class="btn-lang"
        :to="switchLocalePath(switchLocale)"
        @click.native="closeMenu"
      >
        {{ switchLocale }}
      </nuxt-link>

      <div class="news">
        <Btn btn-style="button--full" @click="openNewsletter">
          {{ $t('newsletter.subscription') }}
        </Btn>
      </div>

      <div class="social">
        <BtnFacebook />
        <BtnInsta />
        <BtnYoutube />
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import Drawer from '@/components/DrawerMenu'

export default Vue.extend({
  components: {
    Drawer
  },
  data() {
    return {
      openMenu: false
    }
  },
  computed: {
    switchLocale() {
      return this.$i18n.locale === 'fr' ? 'en' : 'fr'
    },
    navData() {
      if (this.$i18n.locale === 'fr') {
        return this.$store.state.navDataFR
      } else {
        return this.$store.state.navDataEN
      }
    }
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
    },
    openNewsletter() {
      this.$store.commit('menu/toggleNewsletter')
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.openMenu ? 'body-fixed' : ''
      }
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
  top: 0;
  width: 100%;
  z-index: 100;

  @include for-desktop-up {
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
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
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
