<template>
  <div class="contact-form">
    <Form />
    <div class="content">
      <div class="content__social">
        <BtnFacebook class="content__social-btn" />
        <BtnInsta class="content__social-btn" />
        <BtnYoutube class="content__social-btn" />
      </div>
      <div class="content__newsletter">
        <div class="content__text">
          <h2>{{ $t('newsletter.newsletter') }}</h2>
          <p>{{ blok.newsletter_text }}</p>
          <Btn btn-style="button--full" @click="openNewsletter">
            {{ $t('newsletter.register') }}
          </Btn>
        </div>
      </div>
      <div class="content__volunteer">
        <div class="content__text">
          <h2>{{ $t('contact.volunteer') }}</h2>
          <p>{{ blok.volunteer_text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Form from '@/components/contact/Form'

export default Vue.extend({
  components: {
    Form
  },
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openNewsletter() {
      this.$store.commit('menu/toggleNewsletter')
    }
  }
})
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  padding: 4rem 2rem;
  position: relative;
  width: 100%;

  @include for-tablet-landscape-up {
    flex-direction: row;
  }

  .content {
    flex: 1;

    &__social {
      display: flex;
      justify-content: space-around;
      margin: 0 auto 4rem;
      max-width: 20rem;
    }

    &__text {
      background: $white;
      padding: 4rem 2rem;
      text-align: center;

      h2 {
        color: $aqua-blue;
        font-family: $font-secondary;
        font-size: 3.6rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      p {
        color: $charcoal-grey;
        font-family: $font-primary;
        font-size: 2rem;
        line-height: 1.4;
      }
    }

    &__newsletter,
    &__volunteer {
      background-image: url('~@/assets/images/bg2.svg');
      margin-bottom: 4rem;
      padding: 4rem;
    }

    &__newsletter {
      background-color: $light-teal;
    }

    &__volunteer {
      background-color: $very-light-purple;
    }
  }
}
</style>
