<template>
  <a :href="blok.link.url" target="_blank" class="partner-image">
    <img
      class="partner-image__image"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />
  </a>
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
.partner-image {
  flex-basis: calc(30rem - 6rem);
  margin: 1rem;
  text-align: center;

  &__image {
    height: 14rem;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
