<template>
  <div class="donation">
    <h2 v-if="blok.title" class="donation__title">{{ blok.title }}</h2>
    <p v-if="blok.content" class="donation__content">
      {{ blok.content }}
    </p>
    <img
      v-if="blok.image.filename"
      class="donation__img"
      :src="resizeImg(blok.image.filename)"
      :alt="blok.image.filename"
    />
    <div>
      <a
        class="donation__btn"
        target="_blank"
        rel="noopener noreferrer"
        :href="blok.link.cached_url"
        @click="onDonate"
      >
        <Btn>{{ blok.button_text }}</Btn>
      </a>
    </div>
  </div>
</template>

<script>
export default {
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
        'https://img2.storyblok.com/600x0'
      )
      return newUrl
    },
    onDonate() {
      this.$fb.track('Donate')
    }
  }
}
</script>

<style lang="scss" scoped>
.donation {
  display: flex;
  flex-direction: column;
  font-family: $font-primary;
  font-size: 2rem;
  text-align: center;

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  &__content {
    flex: 1;
    line-height: 1.4;
    margin-bottom: 2rem;
    margin: 0 auto 1rem;
    max-width: 60rem;
    text-align: left;
  }

  &__img {
    margin: 0 auto 1.5rem;
    max-width: 60rem;
    width: 100%;
  }
}
</style>
