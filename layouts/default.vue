<template>
  <div>
    <TheHeaderMobile />
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/globals/TheHeader'
import TheHeaderMobile from '@/components/globals/TheHeaderMobile'
import TheFooter from '@/components/globals/TheFooter'

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

body.body-fixed {
  position: fixed;
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
