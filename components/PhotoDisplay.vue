<template>
  <div class="display">
    <div class="display__container">
      <div
        v-for="(image, index) in blok.images"
        :key="index"
        class="display__image"
        :style="{ backgroundImage: `url('${image.image.filename}')` }"
      ></div>
    </div>
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
  }
})
</script>

<style lang="scss" scoped>
.display {
  background-color: $light-teal;
  margin: 8rem 0;
  padding: 0 2rem;
  width: 100%;

  &__container {
    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    margin: 0 auto;
    max-width: 120rem;
    position: relative;
    top: -6rem;
  }

  &__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 28rem;
  }
}
</style>
