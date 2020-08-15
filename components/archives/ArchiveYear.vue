<template>
  <div v-if="selected === data.title" class="archive-year">
    <div class="archive-year__buttons">
      <button
        :class="{ active: showVideos === false }"
        @click="switchMedia(false)"
      >
        {{ $t('archives.photos') }}
      </button>
      <button
        :class="{ active: showVideos === true }"
        @click="switchMedia(true)"
      >
        {{ $t('archives.videos') }}
      </button>
    </div>
    <div v-if="!showVideos" class="archive-year__masonry">
      <img
        v-for="(photo, indexPhoto) in data.photos"
        :key="indexPhoto"
        :src="photo.image.filename"
        :alt="photo.image.alt"
      />
    </div>
    <div v-else class="archive-year__videos">
      <iframe
        v-for="(video, indexVideo) in data.videos"
        :key="indexVideo"
        class="archive-year__video"
        width="640"
        height="388"
        :src="
          `https://www.youtube.com/embed/${video.video_link}?showinfo=0&autoplay=0&mute=0&modestbranding=1&controls=1&loop=0`
        "
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    selected: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      showVideos: false
    }
  },
  methods: {
    switchMedia(media) {
      this.showVideos = media
    }
  }
})
</script>

<style lang="scss" scoped>
.archive-year {
  &__buttons {
    padding: 4rem 0;
    display: flex;

    button {
      background: transparent;
      border: none;
      border-bottom: 2px solid $light-teal;
      color: $perrywinkle;
      cursor: pointer;
      font-family: $font-secondary;
      font-size: 2rem;
      padding: 1.6rem 2rem;
      text-transform: uppercase;

      @include for-tablet-portrait-up {
        font-size: 3rem;
      }

      &.active {
        border: none;
        border-bottom: 4px solid $aqua-blue;
        color: $very-light-purple;
        font-weight: bold;
      }
    }
  }

  &__masonry {
    column-count: 1;
    column-gap: 1.2rem;

    @include for-tablet-portrait-up {
      column-count: 2;
    }

    @include for-tablet-landscape-up {
      column-count: 3;
    }

    img {
      margin-bottom: 1.2rem;
    }
  }

  &__videos {
    @include for-tablet-landscape-up {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &__video {
    margin-bottom: 2rem;
    width: 100%;

    @include for-tablet-landscape-up {
      flex-basis: calc(50% - 1rem);
      // margin: 1.2rem;
    }
  }
}
</style>
