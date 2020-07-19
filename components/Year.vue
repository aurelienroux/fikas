<template>
  <div>
    year

    <h1>{{ blok.year }}</h1>
    <img :src="blok.image.filename" alt="" />
    <a :href="blok.link.cached_url">test</a>
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

<style lang="scss" scoped></style>
