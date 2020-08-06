<template>
  <div class="events">
    <component
      :is="event.content.component"
      v-for="(event, index) in events"
      :key="index"
      :blok="event.content"
    >
      {{ event.content.component }}
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
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  padding: 7rem 2rem;
  position: relative;
  width: 100%;
}
</style>
