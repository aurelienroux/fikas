<template>
  <div>
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheFooter
  }
}
</script>

<style>
html {
  font-size: 10px;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

img {
  max-width: 100%;
}
</style>
