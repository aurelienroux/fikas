<template>
  <div class="details-container">
    <div class="details">
      <p class="details__date">{{ formatedDate }}</p>
      <p class="details__time">{{ story.content.time }}</p>
      <p class="details__location">{{ story.content.location }}</p>
      <div
        v-if="story.content.prices"
        class="details__prices"
        v-html="richtext"
      ></div>
      <a
        v-if="story.content.tickets && story.content.tickets.url"
        class="tickets"
        :href="story.content.tickets.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Btn btn-style="button--full">
          {{ $t('programmation.buytickets') }}
        </Btn>
      </a>
      <a
        v-if="story.content.facebookEvent && story.content.facebookEvent.url"
        class="facebook-link"
        :href="story.content.facebookEvent.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('programmation.facebookEvent') }}
      </a>
    </div>
    <div class="share">
      <p>
        {{ $t('programmation.share') }}
      </p>
      <a
        class="share__icon"
        :href="fbSocialUrl()"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a
        class="share__icon"
        :href="twitterSocialUrl()"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        class="share__icon"
        :href="'mailto:?subject=FikasFest - ' + story.content.title"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  props: {
    story: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatedDate() {
      return moment(this.story.content.date, 'YYYY//MM/DD')
        .locale(this.$i18n.locale)
        .format('DD MMMM YYYY')
    },
    richtext() {
      return this.story.content.prices
        ? this.$storyapi.richTextResolver.render(this.story.content.prices)
        : ''
    }
  },
  methods: {
    fbSocialUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://fikasfest.com${this.$route.fullPath}`
    },
    twitterSocialUrl() {
      return `https://twitter.com/home?status=https://fikasfest.com${this.$route.fullPath}`
    }
  }
})
</script>

<style lang="scss" scoped>
.details-container {
  flex: 1;
  margin-bottom: 8rem;
  order: 0;

  @include for-tablet-landscape-up {
    order: 1;
  }

  .details {
    background-color: $light-teal;
    background-image: url('~@/assets/images/bg2.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2.5rem;

    &__date,
    &__time,
    &__prices {
      color: $charcoal-grey;
      font-family: $font-primary;
      font-size: 3rem;
    }

    &__date {
      font-weight: 600;
    }

    &__location {
      color: $perrywinkle;
      font-family: $font-primary;
      font-size: 3rem;
      padding: 1.5rem 0;
    }

    &__prices {
      font-size: 2.4rem;
    }

    .tickets {
      display: block;
      left: -1rem;
      margin-top: 1rem;
      position: relative;
    }

    .facebook-link {
      color: $perrywinkle;
      display: block;
      font-family: $font-secondary;
      font-size: 1.4rem;
      margin-top: 2rem;
      text-transform: uppercase;
    }
  }

  .share {
    background-color: $very-light-purple;
    background-image: url('~@/assets/images/bg2.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $charcoal-grey;
    flex: 1;
    font-family: $font-primary;
    font-size: 2.4rem;
    margin-top: 0.2rem;
    padding: 2.5rem;

    &__icon svg {
      color: $white;
      margin-right: 4rem;
      margin-top: 1.5rem;
    }
  }
}
</style>
