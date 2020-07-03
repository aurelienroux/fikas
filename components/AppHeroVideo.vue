<template>
  <div>
    <div v-editable="blok" class="hero-video">
      <div class="video-container">
        <iframe
          class="video"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/zBKei6Ji_WI?showinfo=0&autoplay=1&mute=1&modestbranding=1&controls=0&loop=1&playlist=zBKei6Ji_WI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop"
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="overlay">
        <h1 class="seo-title">
          my overlay
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-video {
  height: 100vh;
  overflow: hidden;
  width: 100%;
}

.video-container {
  background: $black;
  height: 100%;
  position: relative;
  width: 100%;
}

.video {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1.6);
  width: 100%;
}

.overlay {
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.seo-title {
  top: 1000rem;
}
</style>
