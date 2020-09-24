<template>
  <div id="layout" class="layout">
    <div class="layout__bar"></div>
    <img
      class="layout__image layout__image--top"
      src="~/assets/images/bg1.svg"
      alt="layout decoration"
    />
    <img
      class="layout__image layout__image--bottom"
      src="~/assets/images/bg1.svg"
      alt="layout decoration"
    />
    <component
      :is="blok.component"
      v-for="blok in blok.components"
      :key="blok._uid"
      :blok="blok"
      :events="events"
    ></component>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    },
    events: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss" scoped>
.layout {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  &__bar {
    background-color: $light-teal;
    height: 8rem;
    width: 0.5rem;

    @include for-tablet-landscape-up {
      width: 0.2rem;
    }
  }

  &__image {
    max-width: 60rem;
    position: absolute;
    width: 75%;

    @include for-tablet-portrait-up {
      width: 50%;
    }

    @include for-desktop-up {
      width: 33%;
    }

    &--top {
      left: 0;
      top: 8rem;
    }

    &--bottom {
      bottom: 35rem;
      right: 0;
    }
  }
}
</style>
