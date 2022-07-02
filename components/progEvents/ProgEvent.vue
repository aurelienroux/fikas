<template>
  <div class="event">
    <div
      class="event__image"
      :style="{ backgroundImage: `url('${blok.content.thumbnail.filename}')` }"
    />

    <div class="event__bg"></div>

    <div class="event__content">
      <p v-if="blok.content.date" class="event__date">{{ formatedDate }}</p>
      <p class="event__title">{{ blok.content.title }}</p>
      <p class="event__time">
        {{ blok.content.time }} - {{ blok.content.location }}
      </p>

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
    }
  }
})
</script>

<style lang="scss" scoped>
.event {
  display: grid;
  flex-basis: 50%;
  grid-template-columns: 5rem 1fr 2.4rem;
  grid-template-rows: 14rem 7rem 1fr;
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
}
</style>
