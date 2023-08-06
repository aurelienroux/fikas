<template>
  <div class="confidentialite">
    <p class="confidentialite__paragraph" v-html="richtext"></p>
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
.confidentialite {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  &__paragraph {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 1.6rem;
    line-height: 1.33;
    max-width: 120rem;
    padding: 2rem;
    position: relative;
  }
}
</style>
