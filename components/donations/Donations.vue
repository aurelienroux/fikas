<template>
  <div v-editable="blok" class="donations">
    <component
      :is="blok.component"
      v-for="blok in blok.donations"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
.donations {
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  max-width: 120rem;
  padding: 4rem 2rem;
  position: relative;
  width: 100%;
}
</style>
