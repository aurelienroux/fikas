<template>
  <div class="menu-link" @mouseenter="showHover" @mouseleave="hideHover">
    {{ title }}
    <IconMenuDrop />
    <ul class="menu-dropdown" :class="{ show: showLinks }">
      <slot />
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showLinks: false
    }
  },
  methods: {
    showHover() {
      this.showLinks = true
    },
    hideHover() {
      this.showLinks = false
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-dropdown li {
  display: none;
}

.menu-dropdown.show li {
  display: initial;
}

.header {
  & .menu {
    align-items: stretch;
    display: flex;
    flex: 1;

    &-dropdown {
      background-color: $aqua-blue;
      left: 0;
      list-style-type: none;
      padding: 0;
      position: absolute;
      top: 100%;
      width: 100%;
    }
  }
}
</style>
