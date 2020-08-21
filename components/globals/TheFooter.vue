<template>
  <footer class="footer">
    <img src="~/assets/images/footer-montagnes.png" alt="fikas mountains" />
    <div class="container">
      <div class="wrapper">
        <div>
          <LogoFooter class="logo" />
          <p>
            &copy; FIKA(S) {{ new Date().getFullYear() }} |
            {{ $t('footer.copyright') }}
          </p>
        </div>
        <Btn class="newsletter" btn-style="button--full">
          {{ $t('newsletter.subscription') }}
        </Btn>
        <div>
          <BtnFacebook class="social-btn" btn-style="link--footer" />
          <BtnInsta class="social-btn" btn-style="link--footer" />
          <BtnYoutube class="social-btn" btn-style="link--footer" />
        </div>
        <BtnScrollTop class="scroll-btn" />
      </div>
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

  img {
    position: relative;
    top: 0.2rem;
  }

  .container {
    background-color: $aqua-blue;
    color: $white;
    font-family: $font-primary;
    position: relative;
    top: -0.2rem;

    .wrapper {
      margin: 0 auto;
      padding: 2rem 2rem 4rem;
      text-align: center;

      @include for-tablet-landscape-up {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 120rem;
        text-align: left;
      }
    }

    .logo {
      margin-bottom: 1.8rem;
    }

    .newsletter {
      margin: 3.5rem;
    }

    .social-btn {
      margin: 1rem;
    }

    .scroll-btn {
      margin-top: 4rem;

      @include for-tablet-landscape-up {
        margin-top: 0;
      }
    }
  }
}
</style>
