<template>
  <div class="icon" :class="{ open: iconStyle }" v-on="$listeners">
    <div class="bar bar--one"></div>
    <div class="bar bar--two"></div>
  </div>
</template>

<script>
export default {
  props: {
    iconStyle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 2rem;
  position: relative;
  width: 2rem;

  & .bar {
    background-color: $perrywinkle;
    border-radius: 0.1rem;
    position: absolute;
    transition: 0.3s;
  }

  .bar--one {
    height: 0.4rem;
    top: calc(50% - 0.2rem);
    width: 2rem;
  }

  .bar--two {
    height: 2rem;
    left: calc(50% - 0.2rem);
    width: 0.4rem;
  }

  &.open .bar--two {
    display: none;
  }
}
</style>
