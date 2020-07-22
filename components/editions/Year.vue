<template>
  <div class="container">
    <div
      class="image"
      :style="{ backgroundImage: `url('${blok.image.filename}')` }"
    ></div>
    <div class="purple-bg"></div>
    <a class="year-text" :href="blok.link.cached_url">
      <p class="year">{{ blok.year }}</p>
      <p class="archives">
        {{ blok.link_text }}
        <IconMore />
      </p>
    </a>
  </div>
</template>

<script lang="ts">
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
.container {
  display: grid;
  grid-template-columns: 2rem repeat(20, 1fr) 2rem;
  grid-template-rows: repeat(20, 2.7rem);
  margin: 0 auto 5rem;
  max-width: 38.5rem;
  max-width: 42.5rem;

  @include for-tablet-landscape-up {
    flex: 1;
    margin: 2rem;
  }
}

.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-column-end: -2;
  grid-column-start: 2;
  grid-row-end: -4;
  grid-row-start: 1;
  z-index: 2;
}

.purple-bg {
  background: $very-light-purple;
  grid-column-end: -1;
  grid-column-start: 3;
  grid-row-end: -1;
  grid-row-start: 16;
  z-index: 1;
}

.year-text {
  align-self: center;
  color: $white;
  font-family: $font-secondary;
  grid-column-end: -2;
  grid-column-start: 3;
  grid-row-end: -1;
  grid-row-start: 18;
  justify-self: end;
  text-decoration: none;
  z-index: 2;

  .year {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: right;
  }

  .archives {
    font-size: 1.4rem;
    height: 2.2rem;
    text-align: right;
    text-transform: uppercase;
  }
}
</style>
