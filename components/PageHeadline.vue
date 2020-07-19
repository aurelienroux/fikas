<template>
  <div class="headline">
    <p>{{ blok.text }}</p>
    <Btn v-if="blok.show_button" class="button">
      {{ blok.button_text }}
    </Btn>
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
  padding-bottom: 4rem;

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
  position: relative;
}
</style>
