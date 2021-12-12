<template>
  <div v-if="activeFilter" class="event">
    <div
      class="event__image"
      :style="{ backgroundImage: `url('${blok.content.thumbnail.filename}')` }"
    />

    <div class="event__bg"></div>

    <div class="event__content">
      <p class="event__title">{{ blok.content.title }}</p>
      <p v-if="blok.content.date" class="event__date">{{ formatedDate }}</p>
      <p class="event__time">{{ blok.content.time }}</p>
      <p class="event__location">{{ blok.content.location }}</p>

      <nuxt-link class="event__link" :to="`/${blok.full_slug}`">
        {{ $t('programmation.more') }}
        <IconMore />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatedDate() {
      return moment(this.blok.content.date, 'YYYY//MM/DD')
        .locale(this.$i18n.locale)
        .format('DD MMMM YYYY')
    },
    storeFilter() {
      return this.$store.state.filters.activeFilter
    },
    activeFilter() {
      const stateFilter = this.$store.state.filters.activeFilter

      if (stateFilter === 'all') {
        return true
      } else if (this.blok.content.category.includes(stateFilter)) {
        return true
      } else {
        return false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.event {
  display: grid;
  flex-basis: 50%;
  grid-template-columns: 8rem 1fr 2.4rem;
  grid-template-rows: 32rem 7rem 1fr;
  margin-bottom: 8rem;

  &__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-row-start: 1;
    z-index: 10;
  }

  &__bg {
    background: $very-light-purple;
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-row-start: 2;
  }

  &__content {
    padding: 2rem;
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-row-start: 3;
  }

  &__title {
    color: $white;
    font-family: $font-secondary;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.4;
  }

  &__date,
  &__time,
  &__location {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2rem;
    line-height: 1.3;
  }

  &__date {
    font-weight: 700;
  }

  &__link {
    display: block;
    margin-top: 2rem;
    font-family: $font-secondary;
    font-size: 1.4rem;
    text-align: left;
    color: $white;
    text-transform: uppercase;
    text-decoration: none;
    text-align: right;
  }
}
</style>
