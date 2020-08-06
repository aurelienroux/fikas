<template>
  <div v-editable="blok">
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :events="events"
    ></component>
  </div>
</template>

<script>
export default {
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
}
</script>
