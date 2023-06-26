<template>
  <div v-if="!displayCookiesBanner" class="cookies">
    Nous utilisons des cookies pour améliorer votre expérience sur notre site et
    pour vous montrer un contenu personnalisé.
    <nuxt-link :to="localePath('/invites')">
      Politique de confidentialité
    </nuxt-link>
    <button @click="createCookie">J'accepte</button>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  computed: {
    displayCookiesBanner() {
      const cookies = document.cookie

      return cookies.includes('cookieConsent=true')
    }
  },
  methods: {
    createCookie() {
      const cookieName = 'cookieConsent'
      const cookieValue = 'true'
      const expirationDate = new Date()
      expirationDate.setMonth(expirationDate.getMonth() + 1000)

      // eslint-disable-next-line no-console
      console.log(`\n\nexpirationDate => `, expirationDate)

      let cookieString = cookieName + '=' + encodeURIComponent(cookieValue)
      cookieString += '; expires=' + expirationDate.toUTCString()

      // eslint-disable-next-line no-console
      console.log(`\n\ncookieString => `, cookieString)

      document.cookie = cookieString
    }
  }
}
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
  border-radius: 5px;
  background-color: $very-light-purple;

  @include for-tablet-portrait-up {
    left: inherit;
    max-width: 400px;
  }
}
</style>
