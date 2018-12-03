<template lang="pug">
  .cont
    bubble-bg
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
import BubbleBg       from '~/components/BubbleBg.vue'

export default {
  name: "Index",
  
  components: {
    TextRotator,
    SocialBar,
    BubbleBg
  },
  
  data() {
    return {
      skills: Presentation
    }
  }

}

</script>

<style lang="scss" scoped>

  @import '~/assets/main.scss';

  .cont {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    z-index: 1;

    h1 {
      text-align: center;
      color: #f5f5f5;
      font-size: 4em;
      font-weight: 900;
      z-index: 1;
      text-shadow: $black 5px 5px;

      @include query(phone) {
        font-size: 3em;
      }
    }
  }
</style>
