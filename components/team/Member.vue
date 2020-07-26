<template>
  <div class="member">
    <p class="member__title">{{ blok.title }}</p>
    <div class="member__name" v-html="richtext"></div>
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
  },
  computed: {
    richtext() {
      return this.blok.name
        ? this.$storyapi.richTextResolver.render(this.blok.name)
        : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.member {
  flex-basis: 100%;
  margin-bottom: 2.5rem;
  padding-right: 2rem;

  @include for-tablet-portrait-up {
    flex-basis: 50%;
  }

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  &__name {
    font-family: $font-primary;
    font-size: 2rem;
  }
}
</style>

<style lang="scss">
.member__name {
  a {
    text-decoration: none;
  }

  .link-styling {
    color: $perrywinkle;
    text-decoration: none;
  }
}
</style>
