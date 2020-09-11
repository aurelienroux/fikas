<template>
  <div
    v-if="display === id"
    class="countries__description"
    :class="`countries__description--${id}`"
  >
    <p>
      {{ content }}
      <button @click="$emit('hide-country')">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    display: {
      default: null,
      type: String
    },
    content: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.countries__description {
  background-color: $very-light-purple;
  color: $white;
  font-family: $font-primary;
  font-size: 1.8rem;
  padding: 4rem 4.5rem 4rem 4rem;
  position: absolute;
  width: 40rem;

  p {
    position: relative;
  }

  button {
    align-items: center;
    background: transparent;
    border: none;
    color: $white;
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    height: 3rem;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    right: -3rem;
    top: -3rem;
    width: 3rem;
  }

  &--groenland {
    border-radius: 0 2rem 2rem 2rem;
    bottom: 42rem;
    left: 18rem;
  }

  &--iceland {
    border-radius: 0 2rem 2rem 2rem;
    bottom: 17rem;
    left: 47rem;
  }

  &--feroe {
    border-radius: 2rem 2rem 0 2rem;
    bottom: 25rem;
    left: 14rem;
  }

  &--danemark {
    border-radius: 2rem 2rem 0 2rem;
    bottom: 5rem;
    left: 25rem;
  }

  &--norway {
    border-radius: 2rem 2rem 0 2rem;
    bottom: 18rem;
    left: 27rem;
  }

  &--aland {
    border-radius: 2rem 2rem 0 2rem;
    bottom: 17rem;
    left: 58rem;
  }

  &--sweden {
    border-radius: 2rem 2rem 0 2rem;
    bottom: 26rem;
    left: 47rem;
  }

  &--finland {
    border-radius: 2rem 0 2rem 2rem;
    bottom: 23rem;
    left: 62rem;
  }
}
</style>
