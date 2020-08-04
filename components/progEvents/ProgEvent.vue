<template>
  <div v-if="activeFilter" class="event">
    <div>
      {{ blok.title }}
    </div>
    <div>
      {{ formatedDate }}
    </div>
    <div>
      {{ blok.time }}
    </div>
    <div>
      {{ blok.location }}
    </div>
    <div>storeFilter: {{ storeFilter }}</div>
    <div>event category: {{ blok.category }}</div>
    <div>activeFilter: {{ activeFilter }}</div>
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
    },
    storeFilter() {
      return this.$store.state.filters.activeFilter
    },
    activeFilter() {
      const stateFilter = this.$store.state.filters.activeFilter

      if (stateFilter === 'all') {
        return true
      } else if (this.blok.category.includes(stateFilter)) {
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
  border: 1px solid;
  flex-basis: 50%;
}
</style>
