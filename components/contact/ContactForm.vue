<template>
  <div class="contact-form">
    <form
      method="post"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input type="hidden" name="bot-field" />
      <input type="text" name="FirstName:" placeholder="first" required />
      <input type="text" name="LastName:" placeholder="last" required />
      <input type="email" name="Email:" placeholder="email" required />
      <select name="Subject:">
        <option selected>Question generales</option>
        <option>benevol</option>
        <option>Partneriat</option>
      </select>
      <textarea name="Message:" rows="4" cols="50" />

      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.contact-form {
  border: 1px solid;
  position: relative;
}
</style>
