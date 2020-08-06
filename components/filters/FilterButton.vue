<template>
  <button :class="{ active: activeFilter() }" @click="changeFilter">
    {{ blok.text }}
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
    },
    activeFilter() {
      return this.blok.value === this.$store.state.filters.activeFilter
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  background: transparent;
  border: none;
  border-left: 2px solid $light-teal;
  color: $perrywinkle;
  cursor: pointer;
  font-family: $font-secondary;
  font-size: 30px;
  padding: 1rem 2rem;
  text-transform: uppercase;

  @include for-tablet-landscape-up {
    border: none;
    border-bottom: 2px solid $light-teal;
  }

  &.active {
    border-left: 4px solid $aqua-blue;
    color: $very-light-purple;
    font-weight: bold;

    @include for-tablet-landscape-up {
      border: none;
      border-bottom: 4px solid $aqua-blue;
    }
  }
}
</style>
