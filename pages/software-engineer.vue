<template lang="pug">
  #software-engineer
    back-btn
    h1.page-title Software Engineer

    .dynamic-shadow-img
    .img-desc 
      i Well, that's me working with an Emotiv Insight 1 for neuroprogramming
    .bio I'm a 23 years old Software Engineer based in Monza, Italy.
      br
      |I love computer programming in all of its forms, from 
      span.fe front-end &nbsp;
      |to 
      span.be back-end &nbsp;
      |development, from 
      span.db database management &nbsp;
      |to 
      span.do devops
      |.
      br
      | Member of the 
      a(href="/certs/HighIQCertificate.pdf", target="_blank") International High IQ Society.
      br
      br
      b #NeverStopLearning 
      | as my personal mantra.
      br
      br
      | Let's work together on &nbsp;
      a(href="https://github.com/MicheleRiva", target="_blank") GitHub
      |!

</template>

<script>
import Resume from "~/static/json/resume.json";
import BackBtn from "~/components/BackBtn.vue";

export default {
  name: "SoftwareEngineer",
  components: {
    BackBtn
  },
  data() {
    return {
      resume: Resume
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/main.scss";

$profile-image: url("/imgs/MicheleRiva_Miiitch_Sleva.jpg");

#software-engineer {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: $black;
  //background-image: linear-gradient(to right top, #050817, #4c2a4c, #a8425c, #ea7941, #eece13);
  background-attachment: fixed;
  padding: 4em;
  color: $white;

  @include query(phone) {
    padding: 1em;
    padding-top: 4em;
  }

  h2 {
    color: $white;
    margin-bottom: 15px;
  }

  .dynamic-shadow-img {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top: 4em;
    image-rendering: pixelated;
    background-image: $profile-image;
    background-position: center center;
    background-size: cover;
    border-radius: 20%;
    box-shadow: 0 5px 8px -3px rgba(0, 0, 0, 0.3);

    @include query(phone) {
      margin-top: 1em;
    }

    &::after {
      content: "";
      top: 8%;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      background: inherit;
      transform: scale(1.1);
      filter: blur(20px) saturate(300%);
      opacity: 0.4;
      position: absolute;
      z-index: -1;
    }
  }

  .img-desc {
    text-align: center;
    margin: 2em auto;
    margin-bottom: 4em;
    width: 315px;
    font-weight: 100;
    font-size: 14px;
  }

  .bio {
    margin: 0 auto;
    max-width: 1000px;
    text-align: center;

    @include query(phone) {
      margin-top: 1em;
      text-align: left;
    }

    a {
      color: $cyan;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .fe,
    .be,
    .do,
    .db {
      color: $green;
    }
  }
}
</style>