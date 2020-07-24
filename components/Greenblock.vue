<template>
  <div class="greenblock">
    <div class="greenblock__bg">
      <div class="cover"></div>
    </div>
    <div
      class="greenblock__image"
      :style="{ backgroundImage: `url('${blok.image.filename}')` }"
    ></div>
    <h2 class="greenblock__title">{{ blok.title }}</h2>
    <p class="greenblock__text">{{ blok.text }}</p>
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
.greenblock {
  border: 1px solid;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: 10rem 20rem auto auto 8rem;
  width: 100%;

  &__bg {
    background: $light-teal;
    grid-column-end: -1;
    grid-column-start: 1;
    grid-row-end: -1;
    grid-row-start: 2;
    position: relative;

    .cover {
      background-image: url('~@/assets/images/bg2.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column-end: -2;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-row-start: 1;
    position: relative;
  }

  &__title {
    color: $white;
    font-family: $font-tertiary;
    font-size: 7.5rem;
    grid-column-end: -2;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-row-start: 3;
    margin: 2rem 0;
    position: relative;
    text-transform: uppercase;
  }

  &__text {
    color: $charcoal-grey;
    font-family: $font-tertiary;
    font-size: 3.6rem;
    font-weight: normal;
    grid-column-end: -2;
    grid-column-start: 2;
    grid-row-end: 5;
    grid-row-start: 4;
    line-height: 1.2;
    line-height: normal;
    position: relative;
    text-align: left;
  }
}
</style>
