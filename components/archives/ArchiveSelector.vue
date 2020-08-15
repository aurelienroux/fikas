<template>
  <div class="archive">
    <div class="archive__selector">
      <h2 class="title">
        {{ selectedYear }}
        <div class="layout-bar"></div>
      </h2>
      <div class="archive__container">
        <img
          class="archive__image"
          :src="selectedYearImage.filename"
          :alt="selectedYearImage.alt"
        />
        <div class="archive__buttons">
          <button
            v-for="(year, index) in blok.components.slice().reverse()"
            :key="index"
            class="archive__button"
            :class="{ active: year.title === selectedYear }"
            @click="selectYear(year.title, year.image)"
          >
            {{ year.title }}
          </button>
        </div>
      </div>
    </div>
    <ArchiveYear
      v-for="(year, index) in blok.components"
      :key="index"
      :data="year"
      :selected="selectedYear"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedYear: this.blok.components[0].title,
      selectedYearImage: this.blok.components[0].image
    }
  },
  methods: {
    selectYear(year, yearImage) {
      this.selectedYear = year
      this.selectedYearImage = yearImage
    }
  }
})
</script>

<style lang="scss" scoped>
.archive {
  max-width: 120rem;
  padding: 4rem 2rem;
  position: relative;
  width: 100%;

  &__container {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    @include for-tablet-portrait-up {
      justify-content: flex-start;
    }
  }

  &__buttons {
    order: 0;
    display: flex;
    flex-direction: column;

    @include for-tablet-landscape-up {
      flex-direction: row;
      order: 1;
    }
  }

  &__button {
    background: transparent;
    border: none;
    border-left: 2px solid $light-teal;
    color: $perrywinkle;
    cursor: pointer;
    font-family: $font-secondary;
    font-size: 3rem;
    padding: 1.6rem 2rem;

    @include for-tablet-landscape-up {
      border: none;
      border-bottom: 2px solid $light-teal;
    }

    &.active {
      border: none;
      border-left: 4px solid $aqua-blue;
      color: $very-light-purple;
      font-weight: bold;

      @include for-tablet-landscape-up {
        border: none;
        border-bottom: 4px solid $aqua-blue;
      }
    }
  }

  &__image {
    max-width: 18rem;
    order: 1;

    @include for-tablet-landscape-up {
      margin-right: 2rem;
      order: 0;
    }
  }
}

.title {
  color: $aqua-blue;
  font-family: $font-secondary;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;

  @include for-big-desktop-up {
    left: -11rem;
    position: absolute;
    top: 17rem;
    transform: rotate(-90deg);
  }

  .layout-bar {
    display: none;

    @include for-big-desktop-up {
      background-color: $light-teal;
      display: initial;
      height: 0.2rem;
      position: absolute;
      right: -9rem;
      top: 3.5rem;
      width: 8rem;
    }
  }
}
</style>
