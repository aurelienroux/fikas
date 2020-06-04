<template>
  <div class="scroll-top" @click="scrollTop">
    <AppIconVideoScroll />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
})
</script>

<style lang="scss" scoped>
.scroll-top {
  align-items: center;
  background-color: $perrywinkle;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  height: 6rem;
  justify-content: center;
  margin-top: 4rem;
  width: 6rem;

  .icon {
    transform: rotate(180deg);
    width: 3rem;
  }
}
</style>
