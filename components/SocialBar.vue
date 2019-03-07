<template lang="pug">
  .social-bar
    .center-cont
      .icon( v-for="social in social" )
        a(
          :href="social.url", 
          :aria-label="social.name"
          target="_blank", 
          rel="noopener"
          )
          img(
            :src="social.icon"
            :alt="social.name"
          )
</template>

<script>

import Social from '~/static/json/social.json'

export default {
  name: "SocialBar",
  data() {
    return {
      social: Social
    }
  }
}
</script>

<style lang="scss" scoped>
  .social-bar {
    position: fixed;
    display: flex;
    bottom: 2em;
    width: 100%;
    justify-content: center;
    align-items: center;

    .center-cont {
      display: inline-block;

      .icon {
        float: left;
        margin-left: 5px;
        margin-right: 5px;

        a {

          img {
          transition: ease 0.5s;
          width: 15px;

            &:hover {
              margin-left: 7px;
              margin-right: 7px;
              transform: scale(1.5)
            }
          }
        }
      }
    }
  }
</style>
