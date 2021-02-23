<template>
  <div class="lightbox">
    <button @click="$emit('closeLightbox')"><IconClose /></button>
    <div class="container">
      <img
        class="lightbox__image"
        :src="image.image.filename"
        :alt="image.image.alt"
      />
      <p class="lightbox__credits">{{ image.credits }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: {
      type: Object,
      default: () => null
    }
  }
})
</script>

<style lang="scss" scoped>
.lightbox {
  align-items: center;
  background: rgba($white, 0.9);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  .container {
    margin: 2rem;
    max-height: 80vh;
    max-width: 90rem;
    text-align: center;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4rem;
    position: absolute;
    right: 2rem;
    top: 2rem;

    svg {
      fill: $perrywinkle;
    }
  }

  &__image {
    max-height: 100%;
  }

  &__credits {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2.4rem;
    line-height: 1.33;
    margin-top: 3rem;
  }
}
</style>
