<template>
  <div class="partner-text" v-html="richtext"></div>
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
.partner-text {
  flex-basis: calc(50% - 2rem);
  font-family: $font-primary;
  font-size: 2rem;
  margin: 1rem;
  min-width: 300px;
}
</style>

<style lang="scss">
.partner-text {
  a {
    text-decoration: none;
  }

  .link-styling {
    color: $perrywinkle;
    text-decoration: none;
  }
}
</style>
