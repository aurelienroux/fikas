<template>
  <div class="drawer">
    <div class="title" @click="openDrawer">
      {{ title }}
      <IconDrawer :class="{ open }" />
    </div>
    <div class="container" :class="{ open }">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    openDrawer() {
      this.open = !this.open
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
}

.container {
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;

  &.open {
    height: initial;
  }
}

.menu-sublink {
  color: $white;
  font-size: 1.4rem;
  font-weight: normal;
  padding: 1.5rem 4rem;
  text-decoration: none;
}
</style>
