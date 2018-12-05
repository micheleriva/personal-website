<template lang="pug">
  div
    nuxt
    social-bar
</template>

<script>

import SocialBar from '~/components/SocialBar.vue'

export default {
  name: "DefaultLayout",
  components: {
    SocialBar
  }
}
</script>


<style lang="scss">

@import '~/assets/main.scss';

</style>