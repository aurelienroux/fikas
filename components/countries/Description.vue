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

  &--aland {
    border-radius: 2rem 2rem 0 2rem;
    top: 56rem;
    left: 58rem;

    @include for-big-desktop-up {
      top: 47rem;
    }
  }

  &--danemark {
    border-radius: 2rem 2rem 0 2rem;
    top: 60rem;
    left: 25rem;

    @include for-big-desktop-up {
      top: 51rem;
    }
  }

  &--finland {
    border-radius: 2rem 0 2rem 2rem;
    top: 43rem;
    left: 61rem;

    @include for-big-desktop-up {
      top: 34rem;
    }
  }

  &--feroe {
    border-radius: 2rem 2rem 0 2rem;
    top: 50rem;
    left: 14rem;

    @include for-big-desktop-up {
      top: 41rem;
    }
  }

  &--groenland {
    border-radius: 0 2rem 2rem 2rem;
    top: 30rem;
    left: 18rem;

    @include for-big-desktop-up {
      top: 22rem;
    }
  }

  &--iceland {
    border-radius: 0 2rem 2rem 2rem;
    top: 55rem;
    left: 47rem;

    @include for-big-desktop-up {
      top: 46rem;
    }
  }

  &--norway {
    border-radius: 2rem 2rem 0 2rem;
    top: 58rem;
    left: 27rem;

    @include for-big-desktop-up {
      top: 49rem;
    }
  }

  &--sweden {
    border-radius: 2rem 2rem 0 2rem;
    top: 50rem;
    left: 47rem;

    @include for-big-desktop-up {
      top: 41rem;
    }
  }
}
</style>
