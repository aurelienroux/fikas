<template>
  <div class="event">
    <div
      class="event__image"
      :style="{ backgroundImage: `url('${blok.content.thumbnail.filename}')` }"
    />

    <div class="event__bg"></div>

    <nuxt-link class="event__link" :to="`/${blok.full_slug}`">
      <p v-if="blok.content.date" class="event__date">{{ formatedDate }}</p>
      <p class="event__category">{{ blok.content.category }}</p>
      <p class="event__title">{{ blok.content.title }}</p>
      <p class="event__time">
        {{ blok.content.time }} - {{ blok.content.location }}
      </p>

      <p class="event__more">
        {{ $t('programmation.more') }}
        <IconMore />
      </p>
    </nuxt-link>
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

  &__link {
    padding: 2rem;
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-row-start: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    text-decoration: none;
  }

  &__category {
    background-color: $perrywinkle;
    display: inline-block;
    margin-bottom: 5px;
    padding: 5px 8px;
    border-radius: 4px;
    font-family: $font-secondary;
    color: $white;
    font-size: 1.2rem;
  }

  &__bg {
    background: $very-light-purple;
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-row-start: 2;
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

  &__time {
    flex: 1;
  }

  &__title {
    font-weight: 700;
  }

  &__more {
    width: 100%;
    display: block;
    margin-top: 2rem;
    font-family: $font-secondary;
    font-size: 1.4rem;
    text-align: right;
    color: $white;
    text-transform: uppercase;
    text-align: right;
  }
}
</style>
