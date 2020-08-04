<template>
  <div class="events">
    <component
      :is="blok.component"
      v-for="blok in blok.components"
      :key="blok._uid"
      :blok="blok"
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
    }
  }
})
</script>

<style lang="scss" scoped>
.events {
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  padding: 7rem 2rem;
  position: relative;
  width: 100%;
}
</style>
