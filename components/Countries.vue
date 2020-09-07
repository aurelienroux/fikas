<template>
  <div class="countries">
    <h2 class="countries__title">
      {{ blok.title }}
      <div class="layout-bar"></div>
    </h2>
    <img
      class="countries__map"
      src="~/assets/images/map-pays.png"
      alt="countries map"
    />
    <Drawer title="Aland" color="drawer--purple">
      Le Groenland est une île immense et un territoire danois autonome situé
      entre l'Atlantique Nord et l'océan Arctique. Une grande partie de sa
      surface est recouverte de glace. La majorité de sa population vit le long
      des côtes libres de glace et bordées de fjords, en particulier dans le
      sud-ouest. Sa position, largement au-dessus du cercle polaire arctique,
      entraîne des phénomènes naturels tels que le soleil de minuit en été et
      les aurores boréales en hiver.
    </Drawer>
    <Drawer title="Danemark">
      Le Groenland est une île immense et un territoire danois autonome situé
      entre l'Atlantique Nord et l'océan Arctique. Une grande partie de sa
      surface est recouverte de glace. La majorité de sa population vit le long
      des côtes libres de glace et bordées de fjords, en particulier dans le
      sud-ouest. Sa position, largement au-dessus du cercle polaire arctique,
      entraîne des phénomènes naturels tels que le soleil de minuit en été et
      les aurores boréales en hiver.
    </Drawer>
    <Drawer title="Finlande">
      Le Groenland est une île immense et un territoire danois autonome situé
      entre l'Atlantique Nord et l'océan Arctique. Une grande partie de sa
      surface est recouverte de glace. La majorité de sa population vit le long
      des côtes libres de glace et bordées de fjords, en particulier dans le
      sud-ouest. Sa position, largement au-dessus du cercle polaire arctique,
      entraîne des phénomènes naturels tels que le soleil de minuit en été et
      les aurores boréales en hiver.
    </Drawer>
    <Drawer title="Groenland" color="drawer--purple">
      Le Groenland est une île immense et un territoire danois autonome situé
      entre l'Atlantique Nord et l'océan Arctique. Une grande partie de sa
      surface est recouverte de glace. La majorité de sa population vit le long
      des côtes libres de glace et bordées de fjords, en particulier dans le
      sud-ouest. Sa position, largement au-dessus du cercle polaire arctique,
      entraîne des phénomènes naturels tels que le soleil de minuit en été et
      les aurores boréales en hiver.
    </Drawer>
  </div>
</template>

<script>
import Vue from 'vue'
import Drawer from '@/components/DrawerMap'

export default Vue.extend({
  components: {
    Drawer
  },
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.countries {
  margin: 8rem 0;

  &__title {
    color: $aqua-blue;
    font-family: $font-secondary;
    font-size: 4rem;
    font-weight: 600;
    margin: 0 2rem 4rem;
    text-transform: uppercase;

    @include for-big-desktop-up {
      left: -20rem;
      position: absolute;
      top: 32rem;
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

  &__map {
    margin-bottom: 4rem;
  }
}
</style>
