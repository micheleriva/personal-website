<template lang="pug">
  section#writer
    back-btn
    h1.page-title Writer
    .desc
      | Sharing is caring. Every article is public domain attributed.

    .articles
      a(v-for="article in articles", :href="article.url", target="_blank").article
        .header(:style="{backgroundImage: `url(${article.image})`}")
            h2 {{ article.title }}
        .pubblication Published on 
          b {{ article.publication }}
        .description {{ article.description }}
        .tags
          .tag(v-for="tag in article.tags") {{ tag }}
</template>

<script>

import BackBtn  from '~/components/BackBtn.vue'
import Articles from '~/static/json/articles.json'

export default {
  name: "Writer",
  components: {
    BackBtn
  },
  data() {
    return {
      articles: Articles
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/main.scss';

  #writer {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 4em;
    background-image: linear-gradient(to right top, #050817, #312242, #722f60, #b93967, #f55555);

    @include query(phone) {
      padding: 1em;
      padding-top: 2em;
    }

    .articles {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      .article {
        position: relative;
        padding: 1em;
        width: 400px;
        min-height: 450px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 10px;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        color: $black;
        box-shadow: #00000030 0px 2px 12px;
        background: linear-gradient(0deg, #eceef0 10%, #ffff 100%);
        cursor: pointer;
        transition: ease 0.5s;

        @include query(phone) {
          min-height: 500px;
          width: 300px;
          margin-left: 0;
          margin-right: 0;
        }

        &:hover {
          transform: translateY(-1em);
        }

        .header {
          position: relative;
          min-height: 200px;
          margin-top: 1em;
          margin-left: -1em;
          background-size: cover;
          background-position: center;
          width: 400px;

          @include query(phone) {
            width: 300px;
          }

          &::after {
            content: "";
            display: block;
            position: relative;
            width: 100%;
            height: 200px;
            background: rgba(5, 8, 23, 0.67);
            z-index: 0;
          }

          h2 {
            position: absolute;
            bottom: 0;
            color: $white;
            z-index: 1;
            padding: 10px;
            text-align: center;
            width: 100%;
          }
        }

        .description {
          padding: 1em;
          padding-top: 0;
          text-align: left;
        }

        .pubblication{
          padding: 1em;
          text-align: left;
          color: $grey;

          b {
            font-weight: 600;
          }
        }

      .tags {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
        text-align: left;

        .tag {
          float: left;
          font-size: 10px;
          margin-right: 5px;
          margin-bottom: 5px;
          background: lightgrey;
          padding: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 5px;
        }
      }

      }
    }

  }

</style>