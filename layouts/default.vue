<template>
  <div>
    <TheHeaderMobile />
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheHeaderMobile from '@/components/TheHeaderMobile'

export default {
  components: {
    TheHeader,
    TheHeaderMobile
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

img {
  max-width: 100%;
}
</style>
