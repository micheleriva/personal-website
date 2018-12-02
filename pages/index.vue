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

import Presentation from '~/static/json/presentation.json'
import TextRotator  from '~/components/TextRotator.vue'

export default {
  name: "Index",
  components: {
    TextRotator
  },
  data() {
    return {
      skills: Presentation
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
      color: #f5f5f5;
      font-size: 4em;
      font-weight: 900;
    }
  }
</style>
