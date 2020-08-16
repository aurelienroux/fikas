<template>
  <div class="contact-form">
    <form
      method="post"
      name="contact"
      netlify
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      @submit.prevent="checkForm"
    >
      <input class="hidden" name="bot-field" />
      <input type="text" name="firstname" placeholder="first" />
      <input type="text" name="lastname" placeholder="last" />
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    checkForm() {
      console.log('form submit')
    }
  }
})
</script>

<style lang="scss" scoped>
.contact-form {
  position: relative;

  .hidden {
    display: none;
  }
}
</style>
