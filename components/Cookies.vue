<template>
  <div class="cookies">
    <!-- <div v-if="!hideCookiesBanner" class="cookies"> -->
    <p>
      {{ blok.content }}
      <nuxt-link :to="blok.link.cached_url">
        {{ blok.policy }}
      </nuxt-link>
    </p>

    <button class="button" @click="createCookie">
      {{ $t('cookies.accept') }}
    </button>
    <button class="button" @click="createCookie">
      {{ $t('cookies.decline') }}
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Cookies',
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    hideCookiesBanner() {
      if (process.client) {
        return document.cookie.includes('cookieConsent=true')
      }
      return false
    }
  },
  methods: {
    createCookie() {
      const cookieName = 'cookieConsent'
      const cookieValue = 'true'
      const expirationDate = new Date()
      expirationDate.setMonth(expirationDate.getMonth() + 6)

      let cookieString = cookieName + '=' + encodeURIComponent(cookieValue)
      cookieString += '; expires=' + expirationDate.toUTCString()

      document.cookie = cookieString
    }
  }
})
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  right: 20px;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  font-family: $font-primary;
  padding: 1.5rem 2.5rem;
  font-size: 1.4rem;
  border-radius: 15px;
  line-height: 1.3;
  background-color: $very-light-purple;

  @include for-tablet-portrait-up {
    left: inherit;
    max-width: 400px;
  }
}

.button {
  border: 0.2rem solid $topaz;
  border-radius: 100px;
  margin: 10px 20px 10px 0;
  background: $white;
  padding: 10px 20px;
  font-weight: 700;
  color: $topaz;
  cursor: pointer;
}
</style>
