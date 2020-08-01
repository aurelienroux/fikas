<template>
  <div class="player">
    <h2 class="player__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div class="player__container">
      <iframe
        class="player__video"
        width="640"
        height="588"
        :src="videoLink"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      <div class="player__bg"></div>
    </div>
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
  },
  computed: {
    videoLink() {
      return `https://www.youtube.com/embed/${this.blok.video_id}?showinfo=0&autoplay=0&mute=0&modestbranding=1&controls=1&loop=0`
    }
  }
})
</script>

<style lang="scss" scoped>
.player {
  max-width: 120rem;
  padding: 7rem 2rem;
  position: relative;
  width: 100%;
  text-align: center;

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-transform: uppercase;

    @include for-desktop-up {
      left: -20rem;
      position: absolute;
      top: 32rem;
      transform: rotate(-90deg);
    }

    .layout-bar {
      display: none;

      @include for-desktop-up {
        background-color: $light-teal;
        display: initial;
        height: 0.2rem;
        position: absolute;
        right: -9rem;
        top: 3.5rem;
        width: 8rem;
      }
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 4rem 1fr 4rem;
    grid-template-rows: 4rem 25rem 4rem;

    @include for-tablet-portrait-up {
      display: grid;
      grid-template-columns: 8rem 1fr 16rem;
      grid-template-rows: 8rem 50rem 8rem;
    }
  }

  &__video {
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-row-start: 1;
    height: 100%;
    max-height: 58rem;
    width: 100%;
  }

  &__bg {
    background: $very-light-purple;
    grid-column-end: -1;
    grid-column-start: 2;
    grid-row-end: -1;
    grid-row-start: 2;
  }

  .button {
    margin: 8rem 0;
  }
}
</style>
