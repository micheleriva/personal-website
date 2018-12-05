<template lang="pug">
  .cont
    bubble-bg
    h1 {{ error.statusCode }}
    h2 {{ error.message }}
</template>

<script>
import BubbleBg from '~/components/BubbleBg.vue'

export default {
  name: "Error",

  components: {
    BubbleBg
  },

  props: {
    error: {
      type: Object,
      default: () => new Object()
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/main.scss';
  @import '~/assets/landing.scss';
</style>