<template>
  <div class="drawer" :class="color">
    <div class="title" @click="openDrawer">
      <span class="title__text">{{ title }}</span>
      <IconDrawerMap :class="{ open }" />
    </div>
    <div class="container" :class="{ open }">
      {{ content }}
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
    },
    color: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      required: true
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
.drawer {
  background: $perrywinkle;
  border-bottom: 1px solid $white;
  border-top: 1px solid $white;
  cursor: pointer;
  padding: 0 2rem;

  &--purple {
    background: $very-light-purple;
  }

  .title {
    align-items: center;
    color: $white;
    display: flex;
    font-family: $font-tertiary;
    font-size: 4.8rem;
    padding: 1.1rem 0;
    text-align: center;

    &__text {
      flex: 1;
    }
  }

  .container {
    color: $white;
    display: flex;
    flex-direction: column;
    font-family: Karla;
    font-size: 3rem;
    height: 0;
    overflow: hidden;

    &.open {
      height: initial;
      margin-bottom: 4rem;
    }
  }

  .menu-sublink {
    color: $white;
    font-size: 1.4rem;
    font-weight: normal;
    padding: 1.5rem 4rem;
    text-decoration: none;
  }
}
</style>
