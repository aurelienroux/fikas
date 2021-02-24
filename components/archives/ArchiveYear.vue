<template>
  <div v-if="selected === data.title" class="archive-year">
    <div class="archive-year__buttons">
      <button
        :class="{ active: showPhotos === true }"
        @click="switchMedia('photos')"
      >
        {{ $t('archives.photos') }}
      </button>
      <button
        :class="{ active: showVideos === true }"
        @click="switchMedia('videos')"
      >
        {{ $t('archives.videos') }}
      </button>
      <button
        v-if="data.prog_button"
        :class="{ active: showProg === true }"
        @click="switchMedia('prog')"
      >
        Prog
      </button>
    </div>
    <div v-if="showPhotos" class="archive-year__masonry">
      <img
        v-for="(photo, indexPhoto) in data.photos"
        :key="indexPhoto"
        :src="resizeImg(photo.image.filename)"
        :alt="photo.image.alt"
        @click="openLightBox(photo)"
      />
    </div>
    <div v-if="showVideos" class="archive-year__videos">
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
    <div v-if="showProg" class="prog" v-html="richtext"></div>
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
      showPhotos: true,
      showVideos: false,
      showProg: false,
      showLightbox: false,
      selectedPicture: null
    }
  },
  computed: {
    richtext() {
      return this.data.prog
        ? this.$storyapi.richTextResolver.render(this.data.prog)
        : ''
    }
  },
  methods: {
    switchMedia(media) {
      if (media === 'photos') {
        this.showPhotos = true
        this.showVideos = false
        this.showProg = false
      } else if (media === 'videos') {
        this.showPhotos = false
        this.showVideos = true
        this.showProg = false
      } else {
        this.showPhotos = false
        this.showVideos = false
        this.showProg = true
      }
    },
    resizeImg(originalUrl) {
      const newUrl = originalUrl.replace(
        'https://a.storyblok.com',
        'https://img2.storyblok.com/600x0'
      )
      return newUrl
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
      padding: 1.6rem;
      text-transform: uppercase;

      @include for-tablet-portrait-up {
        font-size: 3rem;
        padding: 1.6rem 2rem;
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

  .prog {
    font-family: $font-primary;
    font-size: 2rem;
    line-height: 1.4;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
