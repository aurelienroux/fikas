<template>
  <div class="member">
    <p class="member__title">{{ blok.title }}</p>
    <p class="member__name">{{ blok.name | markdown }}</p>
    <p class="member__name">{{ blok.name | richtext }}</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.member {
  flex-basis: 100%;
  margin-bottom: 2.5rem;
  padding-right: 2rem;

  @include for-desktop-up {
    flex-basis: 50%;
  }

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 2rem;
  }

  &__name {
    font-family: $font-primary;
    font-size: 2rem;
  }
}
</style>
