<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
html {
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
