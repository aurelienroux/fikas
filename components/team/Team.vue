<template>
  <div class="team">
    <h2 class="team__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div class="team__container">
      <component
        :is="blok.component"
        v-for="blok in blok.members"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
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
.team {
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
    text-transform: uppercase;

    @include for-desktop-up {
      left: -9rem;
      position: absolute;
      top: 22rem;
      transform: rotate(-90deg);
    }

    .layout-bar {
      display: none;

      @include for-desktop-up {
        background-color: $light-teal;
        display: initial;
        height: 0.2rem;
        position: absolute;
        right: -9rem;
        top: 3.5rem;
        width: 8rem;
      }
    }
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
