<template>
  <header class="header-mobile">
    <div class="top">
      <nuxt-link :to="localePath('/')" exact @click.native="closeMenu">
        <AppLogo />
      </nuxt-link>
      <AppIconMenu :icon-style="openMenu" @click="displayMenu" />
    </div>
    <div class="menu" :class="{ open: openMenu }">
      <AppDrawer :title="$t('header.about')">
        <nuxt-link
          class="menu-sublink"
          :to="localePath('/festival')"
          @click.native="closeMenu"
        >
          {{ $t('header.festival') }}
        </nuxt-link>
      </AppDrawer>

      <AppDrawer :title="$t('header.programmation')">
        <nuxt-link
          class="menu-sublink"
          :to="localePath('/archives')"
          @click.native="closeMenu"
        >
          {{ $t('header.archives') }}
        </nuxt-link>
      </AppDrawer>

      <nuxt-link
        class="menu-link"
        :to="localePath('/contact')"
        @click.native="closeMenu"
      >
        {{ $t('header.contact') }}
      </nuxt-link>

      <nuxt-link
        class="btn-lang"
        :to="switchLocalePath(switchLocale)"
        @click.native="closeMenu"
      >
        {{ switchLocale }}
      </nuxt-link>

      <div class="news">
        <AppBtn btn-style="button--full">
          {{ $t('newsletter.subscription') }}
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
  computed: {
    switchLocale() {
      return this.$i18n.locale === 'fr' ? 'en' : 'fr'
    }
  },
  methods: {
    displayMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
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
  z-index: 10;

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
