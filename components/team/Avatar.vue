<template>
  <div class="avatar">
    <img
      class="avatar__image"
      :src="resizeImg(blok.image.filename)"
      :alt="blok.image.alt"
    />
    <p class="avatar__name">{{ blok.name }}</p>
    <p class="avatar__role">{{ blok.role }}</p>
    <p class="avatar__work">{{ blok.work }}</p>
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
  methods: {
    resizeImg(originalUrl) {
      const newUrl = originalUrl.replace(
        'https://a.storyblok.com',
        'https://img2.storyblok.com/250x0'
      )
      return newUrl
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: 6rem;
  text-align: center;
  width: 24rem;

  &__image {
    border-radius: 100%;
    height: 16rem;
    margin-bottom: 2rem;
    object-fit: cover;
    width: 16rem;
  }

  &__name {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.8rem;
  }

  &__role {
    color: $aqua-blue;
    font-family: $font-primary;
    font-size: 2rem;
    line-height: 2.8rem;
  }

  &__work {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2rem;
  }
}
</style>
