<template>
  <div class="contact-form">
    <form
      method="post"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="submitForm"
    >
      <input type="hidden" name="form-name" value="contact-form" />

      <input type="text" name="firstname" placeholder="first" />
      <input type="text" name="lastname" placeholder="last" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    submitForm() {
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
