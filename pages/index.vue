<template lang="pug">
  div
    .cont
      h1 Michele Riva
      text-rotator(
        :words="skills"
        :speed="4000"
        :animations="['fadeInUp', 'fadeOutUp']"
      )
      .scroll-down(v-scroll-to="'#software-engineer'")
        .pulse
        img(src="/imgs/svgs/objects/scroll-down.svg")

</template>

<script>

import Presentation from '~/static/json/presentation.json'
import TextRotator  from '~/components/TextRotator.vue'
import SocialBar    from '~/components/SocialBar.vue'

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

  methods: {
    scrollDown() {
      alert('hey')
    }
  }

}

</script>

<style lang="scss">
  @import '~/assets/main.scss';
  @import '~/assets/landing.scss';

  $scroll-down-cta-gradient: linear-gradient( 135deg, #EECE13 10%, #B210FF 100%);

  .scroll-down {
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
    cursor: pointer;
    background-image: $scroll-down-cta-gradient;
    z-index: 1;
    
    .pulse {
      position: absolute;
      border-radius: 100%;
      height: 60px;
      width: 60px;
      background-image: $scroll-down-cta-gradient;
      animation: pulse infinite 2s linear;
    }

    img {
      max-width: 50px;
      margin-top: 5px;
    }
  }

  @keyframes pulse {
	0% {
		transform: scale(1, 1);
		opacity: 0;
  }
  15% {
    opacity: 0.5;
  }
	50%, 100% {
		transform: scale(1.25, 1.25);
		opacity: 0;
	}
}
  
</style>
