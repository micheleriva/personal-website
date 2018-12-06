<template lang="pug">
  .cont
    languages-bg
    h1 Michele Riva
    text-rotator(
      :words="skills"
      :speed="4000"
      :animations="['fadeInUp', 'fadeOutUp']"
    )
</template>

<script>

import { mapGetters } from 'vuex'
import Presentation   from '~/static/json/presentation.json'
import TextRotator    from '~/components/TextRotator.vue'
import SocialBar      from '~/components/SocialBar.vue'
import LanguagesBg    from '~/components/LanguagesBg.vue'

export default {
  name: "Index",
  
  components: {
    TextRotator,
    SocialBar,
    LanguagesBg
  },

  data() {
    return {
      skills: Presentation
    }
  }

}

</script>

<style lang="scss">
  @import '~/assets/main.scss';
  @import '~/assets/landing.scss';
</style>
