<template>
  <button class="button" :class="btnStyle">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 3rem;
  border: solid 0.2rem $perrywinkle;
  color: $perrywinkle;
  cursor: pointer;
  font-family: $font-secondary;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1rem;
  padding: 2rem 3rem;
  transition: 0.3s;

  &:hover {
    background-color: $perrywinkle;
    color: $white;
  }

  &--full {
    background-color: $perrywinkle;
    color: $white;

    &:hover {
      background-color: $white;
      color: $perrywinkle;
    }
  }
}
</style>
