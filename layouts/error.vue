<template lang="pug">
  .cont
    h1 {{ error.statusCode }}
    h2 {{ error.message }}
</template>

<script>

export default {
  name: "Error",

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