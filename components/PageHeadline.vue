<template>
  <div class="headline">
    <p>{{ blok.text }}</p>
    <nuxt-link
      v-if="blok.show_button"
      class="button"
      :to="blok.link.cached_url"
    >
      {{ blok.button_text }}
    </nuxt-link>
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
.headline {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  & p {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2.4rem;
    line-height: 1.33;
    max-width: 120rem;
    padding: 2rem;
    position: relative;
  }
}

.button {
  background: transparent;
  border-radius: 3rem;
  border: solid 0.2rem $perrywinkle;
  color: $perrywinkle;
  cursor: pointer;
  font-family: $font-secondary;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1rem;
  padding: 2rem 3rem;
  position: relative;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: $perrywinkle;
    color: $white;
  }

  &--full {
    background-color: $perrywinkle;
    color: $white;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
