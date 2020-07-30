<template>
  <div class="partners">
    <h2 class="partners__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div class="partners__container">
      {{ blok.partners }}
      <component
        :is="blok.component"
        v-for="blok in blok.components"
        :key="blok._uid"
        :blok="blok"
      ></component>
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
.partners {
  max-width: 120rem;
  padding: 7rem 2rem;
  position: relative;
  width: 100%;

  &__title {
    color: $aqua-blue;
    display: inline-block;
    font-family: $font-secondary;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 4rem;
    position: relative;
    text-transform: uppercase;

    .layout-bar {
      background-color: $light-teal;
      display: none;
      height: 0.2rem;
      position: absolute;
      right: -9rem;
      top: 3.5rem;
      width: 8rem;

      @include for-tablet-landscape-up {
        display: initial;
      }
    }
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
