<template>
  <div class="layout">
    <div class="layout-bar"></div>
    <img src="~/assets/images/bg1.svg" alt="" />
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

  &-bar {
    background-color: $light-teal;
    height: 8rem;
    width: 0.5rem;

    @include for-tablet-landscape-up {
      width: 0.2rem;
    }
  }
}

img {
  left: 0;
  max-width: 60rem;
  position: absolute;
  top: 8rem;
  width: 75%;

  @include for-tablet-portrait-up {
    width: 50%;
  }

  @include for-desktop-up {
    width: 33%;
  }
}

.btn {
  position: relative;
}
</style>
