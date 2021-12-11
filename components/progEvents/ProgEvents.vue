<template>
  <div class="events">
    <component
      :is="event.content.component"
      v-for="(event, index) in events"
      :key="index"
      :blok="event"
    >
    </component>
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
.events {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 120rem;
  padding: 4rem 2rem 7rem;
  position: relative;
  width: 100%;

  @include for-tablet-portrait-up {
    flex-direction: row;
  }
}
</style>
