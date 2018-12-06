<template lang="pug">
  .languages-bg
</template>

<script>

import Rellax from 'rellax'

export default {
  name: "LanguagesBg",

}
</script>

<style lang="scss">
  @import '~/assets/main.scss';

  .languages-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, #031024, #050e21, #050c1d, #050a1a, #050817);
    z-index: 0;
  }
</style>
