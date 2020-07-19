<template>
  <div class="edition">
    <h2 class="title">{{ blok.title }}</h2>
    <div v-editable="blok">
      <component
        :is="blok.component"
        v-for="blok in blok.years"
        :key="blok._uid"
        :blok="blok"
      ></component>
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
.edition {
  width: 100%;
  padding: 4rem 0;
}

.title {
  color: $aqua-blue;
  font-family: $font-secondary;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 4rem;
  padding: 0 2rem;
  text-transform: uppercase;
}
</style>
