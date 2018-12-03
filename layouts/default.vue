<template>
  <div>
    <nuxt/>
    <social-bar />
  </div>
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

@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900');
@import '~/assets/main.scss';

html {
  font-family: 'Raleway', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $black;

  ::selection {
    background-color:$magenta;
    color: $white;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>