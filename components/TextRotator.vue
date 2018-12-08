<template lang="pug">
  .text-rotator(
    :style="{color: words[current].color || '#f5f5f5'}"
    v-html="words[current].skill"
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
      current: 0,
      animationClass: `${this.animations[0]} animated`
    }
  },

  watch: {
    current() {
      this.animationClass = `${this.animations[0]} animated`
      setTimeout(() => this.animationClass = `${this.animations[1]} animated`, 
        this.speed - 1000)
    }
  },

  mounted() {
    this.current = 1
    this.updateCurrent()
  },

  methods: {
    updateCurrent() {
      setInterval(() => {
        const wordsLength = this.words.length
        this.current <= wordsLength - 2 ? this.current++ : this.current = 0
      }, this.speed)
    }
  }

}
</script>

<style lang="scss" scoped>

  @import '~/assets/main.scss';

  .text-rotator {
    font-size: 1.5em;
    text-shadow: $black 1px 1px 1px;
  }
</style>
