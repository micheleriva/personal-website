<template lang="pug">
  .text-rotator(
    :style="{color: colors[currentColor]}"
    v-html="words[currentWord]"
    :class="animationClass"
  )
</template>

<script>
export default {
  name: "TextRotator",

  props: {
    words:  {
      type:     Array,
      required: true
    },
    colors: {
      type:     Array,
      required: false,
      default:  () => ['#f5f5f5']
    },
    speed: {
      type:     Number,
      required: false,
      default:  () => 4000
    },
    animations: {
      type:     Array,
      required: false,
      default:  () => ['fadeIn', 'fadeOut']
    }
  },

  data() {
    return {
      currentWord:  -1,
      currentColor: -1,
      animationClass: `${this.animations[0]} animated`
    }
  },

  watch: {
    currentWord() {
      this.animationClass = `${this.animations[0]} animated`
      setTimeout(() => this.animationClass = `${this.animations[1]} animated`, 
        this.speed - 1000)
    }
  },

  mounted() {
    this.currentWord  = 0
    this.currentColor = 0
    this.updateCurrent()
  },

  methods: {
    updateCurrent() {
      setInterval(() => {
              const wordsLength  = this.words.length
              const colorsLength = this.colors.length
              this.currentWord  <= wordsLength  - 2 ? this.currentWord++  : this.currentWord  = 0
              this.currentColor <= colorsLength - 2 ? this.currentColor++ : this.currentColor = 0
      }, this.speed)
    }
  }

}
</script>

<style lang="scss" scoped>
  .text-rotator {
    font-size: 1.5em;
  }
</style>
