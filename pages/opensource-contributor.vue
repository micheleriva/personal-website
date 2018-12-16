<template lang="pug">
  section#opensource-contributor
    back-btn
    h1.page-title OpenSource Contributor
    .desc
      | Some projects I'd love to share with you

    .projects
      a(v-for="project in contributions", :href="project.url", target="_blank").project
        h2 {{ project.name }}
          span.owner &nbsp; · {{ project.owner }}
        .language
          span.ico(:style="langIcoStyle(project.language)")
          span.lang &nbsp; {{ project.language }}
        .description {{ project.description }}
        .tags
          .tag(v-for="tag in project.tags") {{ tag }}

</template>

<script>

  import BackBtn       from '~/components/BackBtn.vue'
  import Contributions from '~/static/json/contributions.json'

  export default {
    name: "OpenSourceContributor",
    components: {
      BackBtn
    },
    data() {
      return {
        contributions: Contributions
      }
    },

    methods: {
      langIcoStyle(lang) {
        switch(lang) {
          case 'JavaScript': return {background: '#ffde57'}
          case 'Haskell':    return {background: '#6534ac'}
          case 'Python':     return {background: '#4584b6'}
          case 'Go':         return {background: '#1cb0f6'}
          case 'C++':        return {background: '#646464'}
          case 'Vue.js':     return {background: '#42b883'}
        }
      }
    }
  }
</script>

<style lang="scss">

  @import '~/assets/main.scss';

  #opensource-contributor {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 4em;
    background-image: linear-gradient(to right top, #050817, #002e4b, #005567, #007c56, #219e00);

    @include query(phone) {
      padding: 1em;
      padding-top: 4em;
    }

    .projects {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }

    .project {
      flex-grow: 1;
      padding: 1em;
      min-width: 300px;
      min-height: 100px;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 10px;
      text-align: center;
      border-radius: 10px;
      text-decoration: none;
      color: $black;
      box-shadow: #00000030 0px 2px 12px;
      background: linear-gradient(0deg, #eceef0 10%, #ffff 100%);
      transition: ease 0.5s;

      &:hover {
        transform: translateY(-1em);
      }

      @include query(phone) {
        min-width: 100px;
        min-height: 100px;
        margin-bottom: 1em;
      }

      h2 {
        font-weight: 500;
        font-size: 15px;
        text-align: left;
        margin-bottom: 1em;

        .owner {
          color: #9E9E9E;
        }
      }

      .description {
        font-size: 13px;
        text-align: left;
        margin-bottom: 1em;
      }

      .language {
        display: flex;
        align-items: center;
        text-align: left;
        margin-bottom: 1em;

        .ico {
          position: absolute;
          background-color: #050817;
          width: 12px;
          height: 12px;
          border-radius: 100%;
        }

        .lang {
          margin-left: 10px;
        }
      }

      .tags {

        text-align: left;

        .tag {
          float: left;
          font-size: 10px;
          margin-right: 5px;
          background: lightgrey;
          padding: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 5px;
        }
      }

    }

  }
</style>
