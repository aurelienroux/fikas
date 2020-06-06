<template>
  <div>
    <TheHeaderMobile />
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheHeaderMobile from '@/components/TheHeaderMobile'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheHeaderMobile,
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
