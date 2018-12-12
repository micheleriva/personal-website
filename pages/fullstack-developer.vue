<template lang="pug">
  section#fullstack-developer
    h1 Fullstack Developer

    .desc
      | A selection of languages, frameworks and tools I'd like to work with

    .skills
      .group
        h1 Frontend
        .list
          .skill(v-for="skill in skills.frontend")
            img(:src="`/imgs/svgs/languages/${skill.icon}`")
            .name {{ skill.name }}
            .confidency {{ confidencyStars(skill.confidency) }}
      .group
        h1 Backend
        .list
          .skill(v-for="skill in skills.backend")
            img(:src="`/imgs/svgs/languages/${skill.icon}`")
            .name {{ skill.name }}
            .confidency {{ confidencyStars(skill.confidency) }}

      .group
        h1 Database
        .list
          .skill(v-for="skill in skills.database")
            img(:src="`/imgs/svgs/languages/${skill.icon}`")
            .name {{ skill.name }}
            .confidency {{ confidencyStars(skill.confidency) }}

      .group
        h1 DevOps
        .list
          .skill(v-for="skill in skills.devops")
            img(:src="`/imgs/svgs/languages/${skill.icon}`")
            .name {{ skill.name }}
            .confidency {{ confidencyStars(skill.confidency) }}

      .group
        h1 Misc
        .list
          .skill(v-for="skill in skills.misc")
            img(:src="`/imgs/svgs/languages/${skill.icon}`")
            .name {{ skill.name }}
            .confidency {{ confidencyStars(skill.confidency) }}

</template>

<script>

import Skills from '~/static/json/skills.json'

export default {
  name: "FullStackDeveloper",

  data() {
    return {
      skills: Skills
    }
  },

  methods: {
    confidencyStars(int) {
      return [...Array(int)].map(x => "⭑").join('')
    }
  }

}
</script>

<style lang="scss">

  @import '~/assets/main.scss';

  #fullstack-developer {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to left bottom, #9708cc, #5a28a5, #2a2778, #0f1c47, #050817);
    padding: 4em;
    display: flex;
    flex-direction: column;

    @include query(phone) {
      padding: 2em;
    }

    h1 {
      color: $white;
      font-size: 4em;
      margin-bottom: 15px;
      text-align: center;

      @include query(phone) {
        font-size: 15vw;
        line-height: 0.9em;
        margin-bottom: 1em;
      }
    }

    .desc {
      position: relative;
      display: inline-block;
      width: auto;
      margin: auto;
      margin-bottom: 4em;
      text-align: center;
      color: $white;
    }

    .skills {

      .group {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2em;

        .list {
          @include query(phone) {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }

      h1 {
        font-size: 2em;
      }

      .skill {
        float: left;
        padding: 1em;
        min-width: 150px;
        min-height: 140px;
        margin-left: 5px;
        margin-right: 5px;
        text-align: center;
        border-radius: 10px;
        box-shadow: #00000030 0px 2px 12px;
        background: linear-gradient(0deg, #eceef0 10%, #ffff 100%);
        transition: ease 0.5s;

        &:hover {
          transform: translateY(-1em);
        }

        @include query(phone) {
          min-width: 100px;
          min-height: 100px;
          flex: 1 0 20%;
          margin-bottom: 1em;
        }

        img {
          max-width: 80px;
          max-height: 50px;
          margin-bottom: 10px;
        }

        .confidency {
          color: #FFC107;
        }
      }

    }
  }
</style>
