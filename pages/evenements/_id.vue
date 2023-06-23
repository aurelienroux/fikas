<template>
  <div class="full-event">
    <HeroEvent :story="story" />

    <div class="layout">
      <div class="layout-bar"></div>
      <img src="~/assets/images/bg1.svg" alt="layout decoration" />

      <div class="container">
        <Bands
          :bands="story.content.eventBands"
          :description="story.content.description"
        />
        <Details :story="story" />
      </div>
    </div>
  </div>
</template>

<script>
import Details from '@/components/progEvents/Details'
import HeroEvent from '@/components/progEvents/HeroEvent'
import Bands from '@/components/progEvents/Bands'

export default {
  name: 'Events',
  components: {
    Details,
    HeroEvent,
    Bands
  },
  asyncData(context) {
    const locale = context.app.i18n.locale === 'en' ? '/en' : ''

    return context.app.$storyapi
      .get(`cdn/stories${locale}/evenements/${context.params.id}`, {
        version: 'draft'
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content from api'
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  },
  head() {
    return {
      title: `Fikas - ${this.story.slug}`,
      meta: [
        { property: 'og:title', content: this.story.slug },
        { property: 'og:image', content: this.story?.content?.image?.filename },
        {
          property: 'og:url',
          content: process.env.BASE_URL + this.$route.fullPath
        },
        { property: 'og:type', content: 'website' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.full-event {
  .layout {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    &-bar {
      background-color: $light-teal;
      height: 8rem;
      width: 0.5rem;

      @include for-tablet-landscape-up {
        width: 0.2rem;
      }
    }

    img {
      left: 0;
      max-width: 60rem;
      position: absolute;
      top: 8rem;
      width: 75%;

      @include for-tablet-portrait-up {
        width: 50%;
      }

      @include for-desktop-up {
        width: 33%;
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 120rem;
    padding: 7rem 2rem 0;
    position: relative;
    width: 100%;

    @include for-tablet-landscape-up {
      flex-direction: row;
    }
  }
}
</style>
