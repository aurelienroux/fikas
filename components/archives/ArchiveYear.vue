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
        @click="openLightBox(photo)"
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
    <transition name="fade">
      <Lightbox
        v-if="showLightbox"
        :image="selectedPicture"
        @closeLightbox="showLightbox = false"
      />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Lightbox from '@/components/archives/Lightbox'

export default Vue.extend({
  components: {
    Lightbox
  },
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
      showVideos: false,
      showLightbox: false,
      selectedPicture: null
    }
  },
  methods: {
    switchMedia(media) {
      this.showVideos = media
    },
    openLightBox(photoData) {
      this.showLightbox = true
      this.selectedPicture = photoData
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
      cursor: pointer;
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
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
