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
  padding: 4rem 0;
  position: relative;
  width: 100%;
}

.year-container {
  @include for-tablet-landscape-up {
    display: flex;
    justify-content: space-around;
  }
}

.title {
  color: $aqua-blue;
  font-family: $font-secondary;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 4rem;
  padding: 0 2rem;
  text-transform: uppercase;

  @include for-big-desktop-up {
    left: -11rem;
    position: absolute;
    top: 24rem;
    transform: rotate(-90deg);
  }

  .layout-bar {
    display: none;

    @include for-big-desktop-up {
      background-color: $light-teal;
      display: initial;
      height: 0.2rem;
      position: absolute;
      right: -7.1rem;
      top: 3.5rem;
      width: 8rem;
    }
  }
}
</style>
