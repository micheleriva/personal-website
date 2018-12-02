<template lang="pug">
  .cont
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

export default {
  name: "Index",
  
  components: {
    TextRotator,
    SocialBar
  },
  
  data() {
    return {
      skills: Presentation
    }
  },

  computed: {
    ...mapGetters(['getCurrentRotatorWord']),
    asd() {
      return this.$store.data.getCurrentRotatorWord
    }
  }

}

</script>

<style lang="scss" scoped>
  .cont {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    h1 {
      text-align: center;
      color: #f5f5f5;
      font-size: 4em;
      font-weight: 900;
    }
  }
</style>
