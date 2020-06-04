<template>
  <footer class="footer">
    <img src="~/assets/images/footer-montagnes.png" alt="fikas mountains" />
    <div class="container">
      <AppLogoFooter class="logo" />
      <p>
        &copy; FIKA(S) {{ new Date().getFullYear() }} | Tous droits réservés
      </p>
      <AppBtn class="newsletter" btn-style="button--full">
        s'inscrire a l'infolettre
      </AppBtn>
      <div>
        <AppBtnFacebook class="social-btn" />
        <AppBtnInsta class="social-btn" />
        <AppBtnYoutube class="social-btn" />
      </div>
      <AppBtnScrollTop />
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  .container {
    background-color: $aqua-blue;
    color: $white;
    font-family: $font-primary;
    padding: 2rem 2rem 4rem;
    position: relative;
    text-align: center;
    top: -0.2rem;

    .logo {
      margin-bottom: 1.8rem;
    }

    .newsletter {
      margin: 3.5rem;
    }

    .social-btn {
      margin: 1rem;
    }
  }
}
</style>
