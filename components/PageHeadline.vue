<template>
  <div class="headline">
    <p class="headline__paragraph" v-html="richtext"></p>
    <nuxt-link
      v-if="blok.show_button"
      class="headline__button"
      :to="blok.link.cached_url"
    >
      <Btn>{{ blok.button_text }}</Btn>
    </nuxt-link>
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
      return this.blok.text
        ? this.$storyapi.richTextResolver.render(this.blok.text)
        : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.headline {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  &__paragraph {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2.4rem;
    line-height: 1.33;
    max-width: 120rem;
    padding: 2rem;
    position: relative;
  }

  &__button {
    padding: 2rem 3rem;
  }
}
</style>
