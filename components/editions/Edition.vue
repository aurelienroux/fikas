<template>
  <div class="edition">
    <h2 class="title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div v-editable="blok" class="year-container">
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
  max-width: 120rem;
  padding: 4rem 2rem;
  position: relative;
  width: 100%;
}

.year-container {
  @include for-tablet-landscape-up {
    display: flex;
    flex-wrap: wrap;
  }
}

.title {
  color: $aqua-blue;
  font-family: $font-secondary;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 4rem;
  padding: 0 2rem;
  position: relative;
  text-transform: uppercase;

  .layout-bar {
    background-color: $light-teal;
    bottom: 0;
    height: 0.2rem;
    left: 2rem;
    position: absolute;
    width: 8rem;
  }
}
</style>
