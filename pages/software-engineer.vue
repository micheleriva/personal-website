<template lang="pug">
  .wip
    h1 Work in progress
    back-btn
</template>

<script>

import BackBtn  from '~/components/BackBtn.vue'

export default {
  name: "SoftwareEngineer",
  components: {
    BackBtn
  }
}
</script>

<style lang="scss">
  @import '~/assets/main.scss';

  .back-btn {
    position: relative;
    margin-top: -2em;
  }
</style>