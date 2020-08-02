<template>
  <button @click="changeFilter">
    {{ blok.text }}
    {{ blok.value }}
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeFilter() {
      this.$store.commit('filters/changeFilter', this.blok.value)
    }
  }
})
</script>

<style lang="scss" scoped></style>
