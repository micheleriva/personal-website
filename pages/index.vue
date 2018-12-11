<template lang="pug">
  div
    .cont
      h1.fadeInDown.animated Michele Riva
      text-rotator(
        :words="skills"
        :speed="4000"
        :animations="['fadeInUp', 'fadeOutUp']"
      )

      .sections.fadeInUp.animated
        nuxt-link.section(
          v-for="section in sections"
          :class="section.class"
          :to="section.url"
          :key="section.class"
        )
          img(:src="`/imgs/svgs/icons/${section.icon}`")
          // span {{ section.name }}

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

  .sections {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4em;
  }

  .section {
    padding: 1em;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 100%;
    text-decoration: none;
    color: $white;
    font-weight: 700;
    transition: ease 0.5s;

    img {
      max-width: 25px;
    }

    &:hover {
      transform: translateY(-1em);
    }

    &.se {
      background-image: linear-gradient( 135deg, #EECE13 10%, #B210FF 100%);
    }

    &.fd {
      background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);
    }

    &.oc {
      background-image: linear-gradient( 135deg, #70F570 10%, #49C628 100%);
    }

    &.wr {
      background-image: linear-gradient( 135deg, #F97794 10%, #623AA2 100%);
    }
  }

</style>
