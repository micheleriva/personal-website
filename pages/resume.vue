<template lang="pug">
  .resume
    .work(v-for="work in resume")
      .left-area
        h1.year {{ work.year }}
        .position {{ work.position }}
        .company
          a(:href="work.company.url", target="_blank") {{ work.company.name }}
      .right-area
        h1.tech-stack Tech Stack
        span.language(v-for="tech in work.techStack") {{ tech }} · &nbsp;
        h1.summary Summary
        .summary(v-html="work.summary")
</template>

<script>

import Resume from '~/static/json/resume.json'

export default {
  name: "Resume",
  data() {
    return {
      resume: Resume
    }
  }
}
</script>

<style lang="scss" scoped>
  .resume {
    display: inline-block;
    max-width: 900px;
    color: #f5f5f5;
    margin-top: 4em;
    margin-left: calc((100% - 900px) / 2);
  
    .work {
      display: inline-block;
      width: 100%;
      margin-bottom: 2em;

      .left-area, .right-area {
        width: 50%;
        float: left;
      }

      h1 {
        &.year {
          font-weight: 900;
          margin-bottom: 5px;
        }

        &.tech-stack {
          font-weight: 500;
          color: #EAB8D4;
          margin-bottom: 5px;
        }

        &.summary {
          font-weight: 500;
          color: #D4A518;
          margin-bottom: 5px;
          margin-top: 1em;
        }
      }

      .company {
        a {
          color: #00bcd4;
          text-decoration: none;
        }
      }
    }
  }
</style>
