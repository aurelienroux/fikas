<template>
  <div class="event">
    <div
      class="event__image"
      :style="{ backgroundImage: `url('${blok.image.filename}')` }"
    ></div>
    <div class="event__bg"></div>
    <div class="event__content">
      <p v-if="blok.date" class="event__date">{{ formatedDate }}</p>
      <p class="event__title">{{ blok.title }}</p>
      <p class="event__time">{{ blok.time }} - {{ blok.location }}</p>
      <!-- <a
        v-if="showBuyButton"
        class="event__link"
        :href="blok.facebooklink.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('programmation.facebookEvent') }}
        <IconMore />
      </a> -->
    </div>
    <!-- <Btn v-if="showBuyButton" class="event__tickets" btn-style="button--full">
      <a :href="blok.ticketslink.url" target="_blank" rel="noopener noreferrer">
        {{ $t('programmation.tickets') }}
      </a>
    </Btn> -->
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
    // showBuyButton() {
    //   const actualDate = new Date()
    //   const actualYear = actualDate.getFullYear()
    //   const actualMonth = actualDate.getMonth()
    //   const actualDay = actualDate.getDate()
    //   const Today = new Date(actualYear, actualMonth, actualDay)
    //   const eventDate = new Date(this.blok.date)

    //   return !(Today > eventDate)
    // }
  }
})
</script>

<style lang="scss" scoped>
.event {
  display: grid;
  flex-basis: 50%;
  grid-template-columns: 5rem 1fr 2.4rem;
  grid-template-rows: 14rem 7rem 1fr auto;
  margin-bottom: 8rem;

  @include for-tablet-landscape-up {
    flex-basis: 33%;
  }

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

  &__date {
    color: $white;
    font-family: $font-secondary;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.4;
  }

  &__title,
  &__time {
    color: $charcoal-grey;
    font-family: $font-primary;
    font-size: 2rem;
    line-height: 1.3;
  }

  &__title {
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
