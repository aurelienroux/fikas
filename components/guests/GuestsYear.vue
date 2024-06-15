<template>
  <div class="guests-year">
    <h3 class="guests-year__year">{{ blok.year }}</h3>
    <p class="guests-year__details" v-html="richtext"></p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    richtext() {
      return this.blok.details
        ? this.$storyapi.richTextResolver.render(this.blok.details)
        : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.guests-year {
  z-index: 10;
  width: 100%;
  max-width: 120rem;
  padding: 0 2rem 2rem;

  &__year {
    margin-bottom: 1rem;
    font-family: $font-secondary;
    font-weight: 600;
    font-size: 3rem;
    color: $perrywinkle;
  }

  &__details {
    position: relative;
    max-width: 120rem;
    font-family: $font-primary;
    font-size: 2rem;
    line-height: 1.4;
    color: $charcoal-grey;
  }
}
</style>
