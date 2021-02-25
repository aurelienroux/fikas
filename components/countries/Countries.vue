<template>
  <div class="countries">
    <h2 class="countries__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <div class="countries__mobile">
      <img
        class="countries__image"
        src="~/assets/images/map-pays.png"
        alt="countries map"
      />
      <Drawer
        v-for="country in blok.country"
        :key="country.title"
        :title="country.title"
        :color="country.background === true ? 'drawer--purple' : ''"
        :content="country.content"
      />
    </div>
    <div class="countries__desktop">
      <Map @select-country="selectCountry" />
      <Description
        v-for="country in blok.country"
        :id="country.id"
        :key="country.title"
        :display-country="displayCountry"
        :content="country.content"
        @hide-country="hideCountry"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Drawer from '@/components/countries/DrawerMap'
import Map from '@/components/countries/Map'
import Description from '@/components/countries/Description'

export default Vue.extend({
  components: {
    Drawer,
    Map,
    Description
  },
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      displayCountry: null
    }
  },
  methods: {
    selectCountry(country) {
      this.displayCountry = country
    },
    hideCountry() {
      this.displayCountry = null
    }
  }
})
</script>

<style lang="scss" scoped>
.countries {
  margin: 8rem 0;
  max-width: 120rem;
  position: relative;

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 4rem;
    font-weight: 600;
    margin: 0 2rem 4rem;
    position: relative;
    text-transform: uppercase;

    .layout-bar {
      background-color: $light-teal;
      bottom: -1rem;
      height: 0.2rem;
      left: 0;
      position: absolute;
      width: 8rem;
    }
  }

  &__image {
    margin-bottom: 4rem;
  }

  &__mobile {
    display: initial;

    @include for-desktop-up {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @include for-desktop-up {
      display: initial;
    }
  }
}
</style>
