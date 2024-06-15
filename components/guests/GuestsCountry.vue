<template>
  <h2 class="guests-country">{{ blok.country }}</h2>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.guests-country {
  z-index: 10;
  width: 100%;
  max-width: 120rem;
  padding: 4rem 2rem 2rem;
  font-family: $font-secondary;
  font-size: 4rem;
  font-weight: 600;
  color: $aqua-blue;
  text-transform: uppercase;
}
</style>
