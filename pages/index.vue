<template lang="pug">
  div
    social-bar
    .cont
      h1.fadeInDown.animated Michele Riva
      .sections.fadeInUp.animated
        nuxt-link.section(
          v-for="section in sections"
          :class="section.class"
          :to="section.url"
          :key="section.class"
          :aria-label="section.name"
        )
          img(:src="`/imgs/svgs/icons/${section.icon}`" :alt="section.name")
          .title {{ section.name }}

</template>

<script>

import Presentation from '~/static/json/presentation.json'
import SocialBar    from '~/components/SocialBar.vue'

export default {
  name: "Index",
  
  components: {
    SocialBar
  },

  data() {
    return {
      skills: Presentation,
      sections: [
        {
          url: '/software-engineer',
          name: 'Software Engineer',
          icon: 'software-engineering.svg',
          class: 'se'
        },
        {
          url: '/fullstack-developer',
          name: 'Fullstack Developer',
          icon: 'fullstack-development.svg',
          class: 'fd'
        },
        {
          url: '/opensource-contributor',
          name: 'OpenSource Contributor',
          icon: 'open-source.svg',
          class: 'oc'
        },
        {
          url: '/writer',
          name: 'Writer',
          icon: 'writer.svg',
          class: 'wr'
        }
      ]
    }
  }

}

</script>

<style lang="scss">
  @import '~/assets/main.scss';
  @import '~/assets/landing.scss';

  $section-colors: linear-gradient( 135deg, #EECE13 10%, #B210FF 100%),
                   linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%),
                   linear-gradient( 135deg, #70F570 10%, #49C628 100%),
                   linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);

  $section-names: 'se', 'fd', 'oc', 'wr';

  $section-circles-dimension: 60px;

  .sections {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;

    @include query(smallphone) {
      margin: 1em;
      justify-content: center;
    }

  }

  .section {
    position: relative;
    padding: 1em;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    width: $section-circles-dimension;
    height: $section-circles-dimension;
    border-radius: 100%;
    text-decoration: none;
    color: $white;
    font-weight: 700;
    transition: ease 0.5s;

    @include query(smallphone) {
      margin: 1em;
    }

    img {
      max-width: 25px;
    }

    &:hover {
      .title {
        transform: translateY($section-circles-dimension + 20px);
        opacity: 1;
      }
    }

    .title {
      position: absolute;
      top: 0;
      left: -30px;
      width: $section-circles-dimension + 60px;
      font-weight: 300;
      text-align: center;
      opacity: 0;
      transition: ease 0.5s;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: $section-circles-dimension;
      height: $section-circles-dimension;
      border-radius: 100%;
      background-image: inherit;
      transform: scale(1.2);
      filter: blur(5px);
      opacity: 0;
      z-index: -1;
      transition: ease 0.5s;
    }

    &:hover::after {
      opacity: 1;
    }

    @for $i from 1 through length($section-names) {
      &.#{nth($section-names, $i)} {
        background-image: nth($section-colors, $i);
      }
    }

  }

</style>
