<template lang="pug">
  section#fullstack-developer
    h1 Fullstack Developer

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
    background-image: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);
    padding: 4em;

    @include query(phone) {
      padding: 2em;
    }

    h1 {
      color: $white;
      font-size: 5em;
      margin-bottom: 1em;
      text-align: center;

      @include query(phone) {
        font-size: 15vw;
        line-height: 0.9em;
        margin-bottom: 1em;
      }
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
