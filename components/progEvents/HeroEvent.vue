<template>
  <div class="hero">
    <div
      class="hero__image"
      :style="{ backgroundImage: `url('${imageFilenameUrl}')` }"
    />

    <h1 class="hero__title">
      {{ story.content.title }}
    </h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    story: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imageFilenameUrl() {
      return this.story.content?.image?.filename
        ? this.story.content.image.filename
        : 'https://imgs.search.brave.com/67Kjheym3g0n_ZaZvsSsbKZJ1YxQXkxeKpCbtG98wjY/rs:fit:1200:989:1/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL3Ry/YW5zZmVyL2ltZy9P/Z0RhdGEvMTUzNjgz/OTUyNV91c2Vzd2Vk/ZW4uanBn'
    }
  }
})
</script>

<style lang="scss" scoped>
.hero {
  align-items: flex-end;
  display: flex;
  height: 40rem;
  justify-content: center;
  position: relative;

  @include for-tablet-landscape-up {
    height: 60rem;
  }

  &__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 100%;
    position: absolute;
    width: 100%;

    &:before {
      background-color: $white;
      content: '';
      display: inline-block;
      height: 100%;
      opacity: 0.25;
      width: 100%;
    }

    &__title {
      color: $white;
      font-family: $font-secondary;
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 4rem;
      z-index: 10;

      @include for-tablet-landscape-up {
        font-size: 6rem;
        margin-bottom: 8rem;
      }
    }
  }

  &__title {
    color: $white;
    font-family: $font-secondary;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 4rem;
    z-index: 10;
    padding: 0 2rem;
    text-align: center;
    max-width: 120rem;

    @include for-tablet-landscape-up {
      font-size: 6rem;
      margin-bottom: 8rem;
    }
  }
}
</style>
