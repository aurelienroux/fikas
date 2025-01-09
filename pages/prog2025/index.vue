<template>
  <main class="container">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :events="events"
    ></component>
  </main>
</template>

<script>
export default {
  name: 'Prog2025',
  async asyncData(context) {
    const locale = context.app.i18n.locale === 'en' ? 'en/' : ''
    try {
      const [story, events] = await Promise.all([
        context.app.$storyapi.get(`cdn/stories/${locale}prog2025`, {
          version: 'draft'
        }),
        context.app.$storyapi.get(`cdn/stories`, {
          version: 'published',
          per_page: 100,
          starts_with: `${locale}evenements`,
          sort_by: 'content.date:asc,content.time:asc'
        })
      ])
      return {
        story: story.data.story,
        events: events.data.stories
      }
    } catch (error) {
      if (!error.response) {
        context.error({
          statusCode: 404,
          message: 'Failed to receive content from api'
        })
      } else {
        context.error({
          statusCode: error.response.status,
          message: error.response.data
        })
      }
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
