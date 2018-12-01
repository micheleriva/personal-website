<template lang="pug">
  .cont
    h1 Michele Riva
    text-rotator(
      :words="presentation.words"
      :colors="presentation.colors"
      :speed="4000"
      :animations="['fadeIn', 'fadeOut']"
    )
</template>

<script>

import Presentation       from '~/static/json/presentation.json'
import PresentationColors from '~/static/json/presentation-colors.json'
import TextRotator        from '~/components/TextRotator.vue'

export default {
  name: "Index",
  components: {
    TextRotator
  },
  data() {
    return {
      presentation: {
        words:  Presentation,
        colors: PresentationColors
      }
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
