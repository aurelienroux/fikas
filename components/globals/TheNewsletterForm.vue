<template>
  <div class="newsletter" :class="{ 'newsletter--open': newsletterState }">
    <p>{{ $t('newsletter.dontmiss') }}</p>
    <p>{{ $t('newsletter.subscribe') }}</p>
    <form ref="subscribe" action="" @submit.prevent="subscribe()">
      <input
        v-model="form.email"
        type="email"
        name="Email:"
        :placeholder="$t('contact.email')"
        required
      />
      <input type="submit" :value="$t('contact.submit')" />
    </form>
    {{ response.message }}
    <button @click="closeNewsletter">
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      form: {
        email: ''
      },
      response: {
        status: null,
        message: 'test'
      },
      cachedForm: {}
    }
  },
  computed: {
    newsletterState() {
      return this.$store.state.menu.newsletterOpen
    }
  },
  methods: {
    closeNewsletter() {
      this.$store.commit('menu/toggleNewsletter')
    },
    async subscribe(event) {
      const formData = { ...this.form }
      try {
        const { data, status } = await axios.post('/api/subscribe', formData)
        this.response.status = status
        this.response.message = `Thanks, ${data.email_address} is subscribed!`
        this.$refs.subscribe.reset()
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.newsletter {
  align-items: center;
  background-color: $aqua-blue;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  opacity: 0;

  &--open {
    opacity: 1;
    display: flex;
  }

  p {
    color: $white;
    font-family: $font-secondary;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.42;
    text-align: center;
    text-transform: uppercase;

    @include for-tablet-landscape-up {
      font-size: 48px;
    }

    &:nth-child(2) {
      margin-bottom: 4rem;
      @include for-tablet-landscape-up {
        margin-bottom: 8rem;
      }
    }
  }

  button {
    align-items: center;
    background: transparent;
    border: none;
    color: $white;
    cursor: pointer;
    display: flex;
    font-size: 2.4rem;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 0;

    @include for-tablet-landscape-up {
      margin: 2rem;
    }
  }

  input[type='text'],
  input[type='email'] {
    border: solid 0.2rem $white;

    @include for-tablet-landscape-up {
      width: 40rem;
    }

    &::placeholder {
      color: $white;
    }
  }

  input[type='submit'] {
    align-self: center;
    margin-top: 2rem;
  }
}
</style>
