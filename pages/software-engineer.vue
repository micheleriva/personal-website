<template lang="pug">
  section#software-engineer
    h1 Software Engineer
    
    .job(v-for="job in jobs")
      h1 {{ job.year }} 
      h2 {{ job.position }} · &nbsp;
        a(:href="job.company.url", target="_blank").company {{ job.company.name }}
      .langs
        .lang(v-for="lang in job.techStack") {{ lang }}
    
    .illustration
      img(src="/imgs/svgs/illustrations/git.svg")

</template>

<script>

import Rellax     from 'rellax'
import ResumeData from '~/static/json/resume.json'

export default {
  name: "SoftwareEngineer",

  data() {
    return {
      jobs: ResumeData
    }
  },

  mounted() {
    const rellax = new Rellax('.illustration', {
      speed: -7,
      round: true
    })
  }
}
</script>

<style lang="scss">
  @import '~/assets/main.scss';

  #software-engineer {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%);
    padding: 4em;

    @include query(phone) {
      padding: 2em;
    }

    h1 {
      color: $white;
      font-size: 5em;
      margin-bottom: 1em;

      @include query(phone) {
        font-size: 19vw;
        line-height: 0.9em;
        margin-bottom: 1em;
      }
    }

    .job {

      .langs {
        display: inline-block;
        width: 100%;
        margin-top: 1em;
        margin-bottom: 4em;

        @include query(phone) {
          display: flex;
          margin-bottom: 2em;
          overflow: auto;
        }

        .lang {
          color: #5f46ef;
          float: left;
          padding: 5px 10px 5px 10px;
          border-radius: 11px;
          margin-right: 1em;
          font-weight: 700;
          font-size: 12px;
          background-image: linear-gradient(135deg, #FDEB71 10%, #F8D800 100%);
        }
      }

      h1 {
        font-size: 3em;
        color: #4231eb;
        margin-bottom: initial;

        @include query(phone) {
          font-size: 8vw;
        }
      }

      h2 {
        color: $white;

        @include query(phone) {
          font-size: 4vw;
        }

        .company {
          font-weight: 300;
        }

        a {
          color: $white;
          text-decoration: none;
          transition: ease 0.5s;

          &:hover {
            text-decoration: underline;
          }
        }
      }

    }

    .illustration {
      position: absolute;
      top: 6em;
      right: 1em;

      @include query(phone) {
        display: none;
      }

      @include query(tablet) {
        display: none;
      }

      @include query(small-screen) {
        display: none;
      }
      
      img {
        max-width: 50vw;
      }
    }

  }
</style>
