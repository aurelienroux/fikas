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
      <input type="text" name="FirstName:" :placeholder="$t('contact.first')" />
      <input
        type="text"
        name="LastName:"
        :placeholder="$t('contact.last')"
        required
      />
      <input
        type="email"
        name="Email:"
        :placeholder="$t('contact.email')"
        required
      />
      <select name="Subject:">
        <option disabled selected>{{ $t('contact.selectSubject') }}</option>
        <option>{{ $t('contact.general') }}</option>
        <option>{{ $t('contact.volunteer') }}</option>
        <option>{{ $t('contact.partner') }}</option>
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

  form {
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  input[type='email'],
  select,
  textarea {
    background-color: transparent;
    border-radius: 1rem;
    border: solid 0.2rem $perrywinkle;
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-left: 2rem;

    &::placeholder {
      color: rgba(48, 52, 66, 0.7);
    }
  }

  input[type='text'],
  input[type='email'],
  select {
    height: 6rem;
  }

  textarea {
    padding: 2rem;
  }

  input[type='submit'] {
    align-self: flex-end;
    background-color: $perrywinkle;
    border-radius: 3rem;
    border: solid 0.2rem $perrywinkle;
    color: $white;
    cursor: pointer;
    display: inline-block;
    font-family: $font-secondary;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 1rem 0 1rem 1rem;
    padding: 2rem 3rem;
    transition: 0.3s;

    &:hover {
      background: transparent;
      color: $perrywinkle;
    }
  }
}
</style>
