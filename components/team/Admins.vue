<template>
  <div class="admins">
    <h2 class="admins__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div class="admins__container">
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
.admins {
  max-width: 120rem;
  padding: 7rem 2rem;
  position: relative;
  width: 100%;

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 4rem;
    position: relative;
    text-transform: uppercase;

    .layout-bar {
      background-color: $light-teal;
      bottom: -1rem;
      height: 0.2rem;
      left: 0;
      position: absolute;
      width: 8rem;
    }
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
