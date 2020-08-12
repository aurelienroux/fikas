<template>
  <div class="event">
    <div
      class="event__image"
      :style="{ backgroundImage: `url('${blok.image.filename}')` }"
    ></div>
    <div class="event__bg"></div>
    <div class="event__content">
      <p class="event__title">{{ blok.title }}</p>
      <p v-if="blok.date" class="event__date">{{ formatedDate }}</p>
      <p class="event__time">{{ blok.time }}</p>
      <p class="event__location">{{ blok.location }}</p>
      <a
        class="event__link"
        :href="blok.facebooklink.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('programmation.facebookEvent') }}
        <IconMore />
      </a>
    </div>
    <Btn class="event__tickets" btn-style="button--full">
      <a :href="blok.ticketslink.url" target="_blank" rel="noopener noreferrer">
        {{ $t('programmation.buytickets') }}
      </a>
    </Btn>
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
      return moment(this.blok.date, 'YYYY//MM/DD')
        .locale(this.$i18n.locale)
        .format('DD MMMM YYYY')
    }
  }
})
</script>

<style lang="scss" scoped>
.event {
  display: grid;
  flex-basis: 50%;
  grid-template-columns: 8rem 1fr 2.4rem;
  grid-template-rows: 32rem 7rem 1fr auto;
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

  &__tickets {
    align-self: center;
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 5;
    grid-row-start: 4;
    justify-self: flex-start;
    margin: 2rem;

    a {
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
