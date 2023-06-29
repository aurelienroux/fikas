<template>
  <main class="container">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </main>
</template>

<script>
export default {
  name: 'Confidentialite',
  asyncData(context) {
    const locale = context.app.i18n.locale === 'en' ? '/en' : ''

    return context.app.$storyapi
      .get(`cdn/stories${locale}/confidentialite`, {
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
  }
}
</script>
