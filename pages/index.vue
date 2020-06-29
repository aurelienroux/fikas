<template>
  <div class="container">
    <div>
      <AppBtn>test btn</AppBtn>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ex
        porro natus voluptates quae aliquid eaque incidunt neque cupiditate.
        Illo repudiandae reprehenderit consequuntur in, ipsam dolores iure
        cumque dolorum tempora!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ex
        porro natus voluptates quae aliquid eaque incidunt neque cupiditate.
        Illo repudiandae reprehenderit consequuntur in, ipsam dolores iure
        cumque dolorum tempora!
      </p>
      <p>{{ story.content.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.app.i18n.locale}/home`, {
        version: 'draft'
      })
      .then((res) => {
        // console.log(context.app.i18n.locale)
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          // console.error(res.response.data)
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
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
</script>
